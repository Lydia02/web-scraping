const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver'); 
async function scrapeSmartphones() {
    let options = new chrome.Options();
    // Uncomment the next line to run Chrome in headless mode
    // options.addArguments('--headless');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        await driver.get('https://www.jumia.com.ng/smartphones/');
        await driver.wait(until.elementLocated(By.css('.-paxs.row._no-g._4cl-3cm-shs')), 10000); // Update this selector

        // Example: Scrape the first product's name and price
        let productName = await driver.findElement(By.css('.info .name')).getText();
        let productPrice = await driver.findElement(By.css('.info .prc')).getText();
        console.log(`Product Name: ${productName}, Price: ${productPrice}`);
        // Extend this logic to scrape more products or details as needed
    } catch (error) {
        console.error('Scraping failed:', error);
    } finally {
        await driver.quit();
    }
}

(async function main() {
    await scrapeSmartphones();
})();
