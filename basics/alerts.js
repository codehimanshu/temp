/**
 * @name alerts
 *
 * @desc Create an alert dialog and close it again.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
 */
const puppeteer = require('puppeteer-core');

(async () => {
  const browserURL = 'http://127.0.0.1:9222';
  const browser = await puppeteer.connect({browserURL, ignoreHTTPSErrors: true});
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')
  page.on('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.dismiss()
  })
  await page.evaluate(() => alert('This message is inside an alert box'))
  await browser.close()
})()
