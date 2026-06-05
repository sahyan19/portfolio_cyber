// Diagnostic : détecte les éléments qui dépassent la largeur du viewport mobile
const pw = await import('file:///C:/Users/sahyan/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs');

const URL = process.argv[2] ?? 'http://localhost:4321/';
const ENGINE = process.argv[3] ?? 'chromium'; // chromium | webkit
const WIDTHS = [320, 360, 390, 414];

const browser = await pw[ENGINE].launch();

for (const WIDTH of WIDTHS) {
  const page = await browser.newPage({
    viewport: { width: WIDTH, height: 844 },
    isMobile: ENGINE === 'chromium',
    hasTouch: true,
    deviceScaleFactor: 3,
  });

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000); // boot du terminal, animations

  // scroll jusqu'en bas pour déclencher les reveals
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);

  const report = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const docW = document.documentElement.scrollWidth;
    const bodyW = document.body.scrollWidth;
    const offenders = [];
    const fixedWide = [];
    for (const el of document.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      const cs = getComputedStyle(el);
      const entry = {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        cls: typeof el.className === 'string' ? el.className.slice(0, 60) : null,
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
      };
      if (cs.position === 'fixed') {
        if (r.right > vw + 1 || r.left < -1) fixedWide.push(entry);
        continue;
      }
      if (r.right > vw + 1 || r.left < -1) offenders.push(entry);
    }
    return { vw, docW, bodyW, canScrollX: docW > vw, offenders, fixedWide };
  });

  console.log(`\n=== ${ENGINE} @ ${WIDTH}px ===`);
  console.log(JSON.stringify(report, null, 2));
  await page.close();
}

await browser.close();
