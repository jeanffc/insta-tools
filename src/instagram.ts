import * as puppeteer from 'puppeteer';

const BASE_URL = 'https://instagram.com';

export default class Instagram {
  public browser = null;
  public page = null;

  initialize = async (options?: any) => {
    console.log('constructor')
    this.browser = await puppeteer.launch(options); // { headless: false }
    this.page = await this.browser.newPage();
    this.page.setViewport({ width: 1200, height: 764 });
    await this.page.goto('https://instagram.com', { waitUntil: 'networkidle0' });
  }
}