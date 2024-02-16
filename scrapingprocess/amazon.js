const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const fs = require('fs');
const readline = require('readline');


async function scrapeSmartphones() {
    let options = new chrome.Options();
    // Uncomment the next line to run Chrome in headless mode for production use
    // options.addArguments('--headless');
    // Create a readline interface for manual CAPTCHA solving
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    async function manualCaptchaSolving() {
        return new Promise(resolve => {
            rl.question('CAPTCHA detected. Please solve the CAPTCHA manually in the browser. Press Enter when done...\n', () => {
                resolve();
            });
        });
    }
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    let products = [];

    try {
        await driver.get('https://www.amazon.com');
        await driver.findElement(By.name('field-keywords')).sendKeys('smartphone', Key.RETURN);
// Wait for search results to load
        await driver.sleep(15000);
        // Wait for the search results to load, ensuring reliability in dynamic content loading
        // await driver.wait(until.elementLocated(By.css('.s-main-slot.s-result-list.s-search-results.sg-row')), 10000);
        // console.log('Search results loaded.');

        // More reliable element selection for product names and prices
        let productNames = await driver.findElements(By.css('.a-size-medium.a-color-base.a-text-normal'));
        console.log(`Found ${productNames.length} product names.`);

        let productPrices = await driver.findElements(By.css('.a-price-whole'));
        console.log(`Found ${productPrices.length} product prices.`);

        const scrapeDateTime = new Date().toISOString();

        for (let i = 0; i < productNames.length; i++) {
            let productName = await productNames[i].getText();
            let productPrice = i < productPrices.length ? await productPrices[i].getText() : 'Price not available';
            
            // Ensures only products with names are added, enhancing data quality
            if (productName) {
                products.push({ productName, productPrice, scrapeDateTime });
            }
        }

        // Conditional log based on product findings
        if (products.length > 0) {
            console.log('Products found, saving data...');
        } else {
            console.log('No products found, check selectors.');
        }
    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        await driver.quit();
        saveDataToFile(products); // Separated data saving to a function for clarity
    }
}

// Separated function for saving data to file
function saveDataToFile(products) {
    fs.writeFile('extractedData\scrapedDataAmazon.json', JSON.stringify(products, null, 2), (err) => {
        if (err) {
            console.error('Error writing data to file:', err);
        } else {
            console.log('Data successfully saved to scrapedDataAmazon.json');
        }
    });
}

(async function main() {
    await scrapeSmartphones();
})();
