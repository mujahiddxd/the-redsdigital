const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  console.log("Taking screenshot of Aetee's Bakehouse...");
  await page.goto('https://aeteesbakehouse.com/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/aeteesbakehouse.png' });
  
  console.log("Taking screenshot of Chimanlals...");
  await page.goto('https://chimanlals-dep.vercel.app/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/chimanlals.png' });
  
  await browser.close();
  console.log("Screenshots saved.");
})();
