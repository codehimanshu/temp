/**
 * @name Duck Duck Go search
 */

const puppeteer = require('puppeteer-core')

(async () => {
  const browserURL = 'http://127.0.0.1:9222';
browser = await puppeteer.connect({browserURL, ignoreHTTPSErrors: true});
  const page = await browser.newPage()
  await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })  
  await page.type('#search_form_input_homepage', 'Puppeteer')
  const searchValue = await page.$eval('#search_form_input_homepage', el => el.value)
  console.log(searchValue)
  await browser.close()
})()
