/**
 * @name keyboard
 *
 * @desc types into a text editor
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
const puppeteer = require('puppeteer-core');

(async () => {
  const browserURL = 'http://127.0.0.1:9222';
browser = await puppeteer.connect({browserURL, ignoreHTTPSErrors: true});
  const page = await browser.newPage()
  await page.goto('https://trix-editor.org/')
  await page.focus('trix-editor')
  await page.keyboard.type('Just adding a title')
  await page.screenshot({ path: 'keyboard.png' })
  await browser.close()
})()
