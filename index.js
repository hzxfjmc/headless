const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://singapore.merimen.com/claims/index.cfm?train=1&retryid=1&skip_browsertest=1&USERID=SMTEST');
  // await page.type('#sleUserName', 'SMTEST', {delay: 100});
  await page.type('#slePassword', 'Mytesting', {delay: 100});
  
  page.click('.clsButton')
  await page.waitFor(1000);
 
  await page.type('#nricval','G12345',{delay: 100});
  page.click('input[type="submit" i]',{clickCount:2});
  const targetLink = await page.evaluate(() => {
    // return [...document.querySelectorAll('.result a')].filter(item => {
    //   return item.innerText && item.innerText.includes('Puppeteer的入门和实践');
    // }).toString()
  });
  await page.goto(targetLink);
  await page.waitFor(100000);
  browser.close();
})()