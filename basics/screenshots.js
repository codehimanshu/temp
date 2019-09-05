/**
 * @name screenshots
 *
 * @desc Snaps a basic screenshot of the full New York Time homepage and saves it a .png file.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#screenshot}
 */

const puppeteer = require('puppeteer-core');

(async () => {
  const browserURL = 'http://127.0.0.1:9222';
browser = await puppeteer.connect({browserURL, ignoreHTTPSErrors: true});
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://www.nytimes.com/')
  await page.screenshot({ path: 'nytimes.png', fullPage: true })
  await browser.close()
})()
