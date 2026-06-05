// Capture + test fermeture du menu mobile (X et tap sur le fond)
const pw = await import('file:///C:/Users/sahyan/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs');

const browser = await pw.webkit.launch();
const page = await browser.newPage({ viewport: { width: 360, height: 780 }, hasTouch: true });
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);

const isOpen = () => page.evaluate(() => document.getElementById('mobile-menu')?.classList.contains('is-open'));

// 1. ouvrir
await page.tap('#nav-toggle');
await page.waitForTimeout(500);
console.log('ouvert via burger :', await isOpen());
await page.screenshot({ path: 'scripts/menu-open.png' });

// 2. fermer via le X (le même bouton, maintenant au-dessus de l'overlay)
await page.tap('#nav-toggle');
await page.waitForTimeout(500);
console.log('fermé via X :', !(await isOpen()));

// 3. rouvrir puis fermer en tapant le fond de l'overlay
await page.tap('#nav-toggle');
await page.waitForTimeout(500);
await page.tap('#mobile-menu', { position: { x: 180, y: 60 } });
await page.waitForTimeout(500);
console.log('fermé via tap fond :', !(await isOpen()));

await browser.close();
