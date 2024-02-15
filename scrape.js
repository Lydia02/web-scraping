const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');

async function scrapeSmartphones() {
    let options = new chrome.Options();
    // Uncomment the next line to run Chrome in headless mode for production use
    // options.addArguments('--headless');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://www.jumia.com.ng/smartphones/');
        // Wait for the product listings to be loaded
        await driver.wait(until.elementLocated(By.css('.-paxs.row._no-g._4cl-3cm-shs')), 15000);

        // Find all product elements on the page
        let productElements = await driver.findElements(By.css('.c-prd'));
        const scrapeDateTime = new Date().toISOString(); // Get current date and time

        for (let productElement of productElements) {
            try {
                let productName = await productElement.findElement(By.css('.name')).getText();
                let productPrice = await productElement.findElement(By.css('.prc')).getText();
                console.log(`Product Name: ${productName}, Price: ${productPrice}, Scraped At: ${scrapeDateTime}`);
            } catch (error) {
                console.error('Error extracting product info:', error);
            }
        }
    } catch (error) {
        if (error.name === 'TimeoutError') {
            console.error('Timeout error: The page took too long to load or an element took too long to be located.');
        } else {
            console.error('Scraping failed:', error);
        }
    } 
    // finally {
    //     // await driver.quit();
    // }
}

(async function main() {
    await scrapeSmartphones();
})();
