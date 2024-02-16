const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const fs = require('fs'); // Import fs module

async function scrapeSmartphones() {
    let options = new chrome.Options();
    // Uncomment the next line to run Chrome in headless mode for production use
    // options.addArguments('--headless');

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    let products = []; // Initialize an empty array to hold the data

    try {
        await driver.get('https://www.jumia.com.gh/phones-tablets/');
        await driver.wait(until.elementLocated(By.css('.-paxs.row._no-g._4cl-3cm-shs')), 15000);

        let productElements = await driver.findElements(By.css('.c-prd'));
        const scrapeDateTime = new Date().toISOString();

        for (let productElement of productElements) {
            try {
                let productName = await productElement.findElement(By.css('.name')).getText();
                let productPrice = await productElement.findElement(By.css('.prc')).getText();
                products.push({productName, productPrice, scrapeDateTime}); // Add the product to the array
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
    } finally {
        await driver.quit(); // Ensure the driver quits regardless of success or failure
        // Write the array to a file
        fs.writeFile('scrapedDataGhana.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                console.error('Error writing data to file:', err);
                return;
            }
            console.log('Data successfully saved to scrapedData.json');
        });
    }
}

(async function main() {
    await scrapeSmartphones();
})();
