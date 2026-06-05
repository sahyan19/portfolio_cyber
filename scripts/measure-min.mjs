// Mesure le min-content réel des blocs du hero et du terminal
const pw = await import('file:///C:/Users/sahyan/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs');

const URL = process.argv[2] ?? 'http://localhost:4321/';
const browser = await pw.webkit.launch();
const page = await browser.newPage({ viewport: { width: 360, height: 844 }, hasTouch: true });
await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

const result = await page.evaluate(() => {
  const out = [];
  const targets = [
    ...document.querySelectorAll('.hero-enter > *'),
    document.querySelector('.hero-enter'),
    document.querySelector('.terminal'),
    document.querySelector('.terminal-input-line'),
    document.querySelector('.terminal-prompt'),
    document.querySelector('.terminal-hint'),
    ...document.querySelectorAll('.terminal-hint > *'),
  ].filter(Boolean);
  for (const el of targets) {
    const old = el.getAttribute('style');
    el.style.width = 'min-content';
    const w = Math.round(el.getBoundingClientRect().width);
    if (old === null) el.removeAttribute('style'); else el.setAttribute('style', old);
    out.push({
      sel: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}.${typeof el.className === 'string' ? el.className.split(' ').join('.') : ''}`,
      minContent: w,
      text: (el.textContent || '').trim().slice(0, 50),
    });
  }
  return out;
});

console.table ? console.table(result) : console.log(result);
console.log(JSON.stringify(result, null, 2));
await browser.close();
