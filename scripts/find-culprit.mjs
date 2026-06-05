// Identifie l'élément exact qui force la largeur min de la page (hide & measure)
const pw = await import('file:///C:/Users/sahyan/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs');

const URL = process.argv[2] ?? 'http://localhost:4321/';
const ENGINE = process.argv[3] ?? 'webkit';
const WIDTH = Number(process.argv[4] ?? 360);

const browser = await pw[ENGINE].launch();
const page = await browser.newPage({ viewport: { width: WIDTH, height: 844 }, hasTouch: true });
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

const result = await page.evaluate(() => {
  const docW = () => document.documentElement.scrollWidth;
  const vw = document.documentElement.clientWidth;
  const base = docW();
  if (base <= vw) return { vw, base, culprits: ['(aucun débordement)'] };

  const culprits = [];
  // descente récursive : trouve les feuilles responsables
  const probe = (root, path) => {
    for (const el of root.children) {
      const d = el.style.display;
      el.style.display = 'none';
      const w = docW();
      el.style.display = d;
      if (w < base) {
        const label = `${path} > ${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').join('.') : ''}`;
        // cet élément contribue — descendre dedans
        if (el.children.length > 0) {
          const before = culprits.length;
          probe(el, label);
          if (culprits.length === before) culprits.push(label + '  [lui-même]');
        } else {
          culprits.push(label + `  [feuille, texte: "${(el.textContent || '').slice(0, 60)}"]`);
        }
      }
    }
  };
  probe(document.body, 'body');
  return { vw, base, culprits };
});

console.log(`=== ${ENGINE} @ ${WIDTH}px ===`);
console.log(JSON.stringify(result, null, 2));
await browser.close();
