import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  const ua = 'Mozilla/8.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
  await page.setUserAgent(ua)

  await page.goto('https://madridcentralpadel.com/Booking/Grid.aspx?id=5')

  const scrappeData = await page.evaluate(() => {
    const freeEvents = [...document.querySelectorAll('.evento')].filter(event => event.getAttribute('fill' === '#9ACD32'))

    return freeEvents
  })

  console.log(scrappeData)
}) ()