/**
 * @name get title
 *
 * @desc Get the title of a page and print it to the console.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagetitle}
 */
const puppeteer = require('puppeteer-core');

(async () => {
  const browserURL = 'http://127.0.0.1:9222';
browser = await puppeteer.connect({browserURL, ignoreHTTPSErrors: true});
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')
  const title = await page.title()
  console.log(title)
  await browser.close()
})()
