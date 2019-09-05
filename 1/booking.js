/**
 * @name Booking.com search
 *
 * @desc Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.
 */
const puppeteer = require('puppeteer-core')
const screenshot = 'booking_results.png'
try {
  (async () => {
    const browserURL = 'http://127.0.0.1:9222';
browser = await puppeteer.connect({browserURL, ignoreHTTPSErrors: true});
    const page = await browser.newPage()
    await page.goto('https://booking.com')
    await page.type('#ss', 'Berlin')
    await page.click('.sb-searchbox__button')
    await page.waitForSelector('#hotellist_inner')
    await page.screenshot({ path: screenshot })
    const hotels = await page.$$eval('span.sr-hotel__name', anchors => {
      return anchors.map(anchor => anchor.textContent.trim()).slice(0, 10)
    })
    console.log(hotels)
    await browser.close()
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}