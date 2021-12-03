import * as puppeteer from 'puppeteer';

const BASE_URL = 'https://instagram.com';

export default class Instagram {
  public browser = null;
  public page = null;

  initialize = async (options?: any) => {
    try {
      this.browser = await puppeteer.launch(options);
      this.page = await this.browser.newPage();
      this.page.setViewport({ width: 1200, height: 764 });
    } catch (error) {
      console.log(error)
    }
  }

  login = async () => {
    try {
      await this.page.goto(BASE_URL, { waitUntil: 'networkidle0' });

      const inputUsername = await this.page.$('input[name="username"]');
      const inputPassword = await this.page.$('input[name="password"]');

      await this.page.type('input[name="username"]', process.env.IG_USERNAME, { delay: 50 });
      await this.page.type('input[name="password"]', process.env.IG_PASSWORD, { delay: 50 });
    } catch (error) {
      console.log(error)
    }
  }
}
