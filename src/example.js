// require('dotenv').config();
import { } from 'dotenv/config'
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1200, height: 764 });
  await page.goto('https://instagram.com', { waitUntil: 'networkidle0' });

  const inputUsername = await page.$('input[name="username"]');
  const inputPassword = await page.$('input[name="password"]');

  await page.type('input[name="username"]', process.env.IG_USERNAME, { delay: 50 });
  await page.type('input[name="password"]', process.env.IG_PASSWORD, { delay: 50 });

  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }),
  ]);

  // try {
  //   await page.waitForSelector('', { timeout: 5000 })
  //   // ...
  // } catch (error) {
  //   console.log("The element didn't appear.")
  // }
  // Salvar informações

  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();