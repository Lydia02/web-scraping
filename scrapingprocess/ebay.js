const { Builder, By, until } = require('selenium-webdriver');
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
        await driver.get('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p4432023.m570.l1313&_nkw=smartphone&_sacat=0');
        const scrapeDateTime = new Date().toISOString();

        // Wait for the products to be loaded and visible
        await driver.wait(until.elementLocated(By.css('.s-item__title')), 10000);

        // Find elements for product names and prices
        let productNames = await driver.findElements(By.css('.s-item__title'));
        let productPrices = await driver.findElements(By.css('.s-item__price')); // Corrected CSS selector

        // Assuming each product has a corresponding price
        for (let i = 0; i < productNames.length; i++) {
            let productName = await productNames[i].getText();
            let productPrice = "Price not available"; // Default value
            if (i < productPrices.length) {
                productPrice = await productPrices[i].getText();
            }
            products.push({ productName, productPrice, scrapeDateTime }); // Add the product to the array
        }
    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        await driver.quit(); // Ensure the driver quits regardless of success or failure

        // Write the array to a file
        fs.writeFile('extractedData\scrapedDataEbay.json', JSON.stringify(products, null, 2), (err) => {
            if (err) {
                console.error('Error writing data to file:', err);
            } else {
                console.log('Data successfully saved to scrapedDataEbay.json');
            }
        });
    }
}

(async function main() {
    await scrapeSmartphones();
})();
