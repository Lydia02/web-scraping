### WebScraping Smartphone Pricing Trends Analysis.

## Introduction 

 WebScrapeVis is the comprehensive solution for scraping, analyzing, and visualizing smartphone pricing data from online retailers. By leveraging the power of Selenium WebDriver for robust web scraping and utilizing jQuery and Chart.js for dynamic data visualization, WebScrapeVis offers valuable insights into market trends and the pricing strategies. For this project, data was scraped from Ebay, Amazon and Jumia Nigeria websites.

#### Link to the Presentation slides

https://docs.google.com/presentation/d/1hujBbkSpju1Ya6T6bBkqL5QTimKBcsv9GgTJ3sgKHoU/edit?usp=sharing

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

Ensure Node.js is installed on your system, then follow these steps:

1. Clone the WebScrapeVis repository to your machine.
2. Open a terminal or command prompt, navigate to the project directory, and run `npm install` to install dependencies.

## Usage

- **Web Scraping**: Execute the following to collect smartphone pricing data. Data is saved in their respective json files.

  ```bash
  node jumia.js
  node ebay.js
  node amazon.js
  ```

- **Data Visualization**: Access `index.html` with a web browser to view interactive pricing trend graphs.

## Features

- Automated web scraping of smartphone prices.
- Interactive and informative visualizations of pricing trends.
- Error handling for web scraping challenges.
- A presentation framework for data analysis insights.

## Dependencies

- ![Node.js](images/nodejs-icon.svg) **Node.js**

- ![Selenium WebDriver](images/selenium%20logo.png) **Selenium WebDriver**

- ![Chart.js](<images/chartjs%20(1).png>) **Chart.js**

- ![jQuery](images/jquery-official.svg) **jQuery**

## Configuration

This project requires no additional configuration for basic usage. To customize scraping or visualization, modify  `chartjumia.js`, `chartEbay.js` and `chartAmazon.js`.

## Documentation

This README is the primary documentation source. The codebase includes comments for clarity and understanding.

## Testing

To test the visualization:

1. Ensure `scrapedDataJumia.json`, `scrapedDataEbay.json`, `scrapedDataAmazon.json` exists and contains valid data.
2. Run `index.html` in a modern web browser.
3. Interact with the visualizations to test functionalities like zooming and panning.

## Running on a Live Server

After setting up the project locally, you can run it on a live server to interact with the web application in real-time. This process will serve your project files on a local web server, making it easily accessible through a web browser.

### Using Visual Studio Code Live Server

If you are using Visual Studio Code (VS Code) as your IDE, you can use the Live Server extension to quickly start a server.

1. **Install Live Server Extension**:

   - Open VS Code and navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
   - Search for "Live Server" and click on the installing button.

2. **Open the Project**:

   - Open the project folder in VS Code by going to File > Open Folder and selecting the `alu-web-scraping` directory.

3. **Start Live Server**:

   - Right-click on the `index.html` file in the VS Code explorer and select "Open with Live Server", or click on the "Go Live" button at the bottom right of the VS Code window.
   - Your default web browser will open, and the project will be served from a local URL, typically `http://127.0.0.1:5500`.

     ### Accessing the Web Application

- Open your web browser and go to the URL provided by Live Server or `http-server`. You should now see the project running and can interact with the web application.
- Navigate through the application sections to test the project's features.

This setup enables real-time interaction with the project, allowing you to view the visualized data.


<img width="944" alt="cssfine" src="https://github.com/Lydia02/alu-web-scraping/assets/37791436/aa71539f-3ca6-47fe-9185-8a7ead30f016">

## Troubleshooting

- **Web Scraping**: If errors occur, verify the target website's structure, your internet connection, and Selenium WebDriver setup.
- **Visualization**: Ensure `scrapedDataJumia.json`, `scrapedDataEbay.json`, `scrapedDataAmazon.json` is properly formatted and all dependencies are installed correctly.

## Contributors

| Contributors | Contributors |
| --- | --- |
| Chiedu Unekwe | Ojoawo Lydia |
| Chol Daniel Deng Dau | Kanisa Thiak |
| Divine Nubuhoro | Bugingo Cysron |
| Nagasaro Ghislaine I. | Placide Imanzi |
| Grace Munezero | Azeez Dam |
| Nhial Majok Riak Maketh | Ganza Owen Yhaan |
| Leslie Isaro | Amandine Irakoze |
| Alain Michael Muhirwa | Okeke Kosisochukwu |
| Ndizeye lesly | Karambizi Chance |
| Nicolle Nyasha Marizani | Amelie umutoni |
| DengOmar Keita | Ajang Chol Aguer |
| Daniel Marial Reng Kudum | Ogbuagu Bridget Chimdinma |
| Umutoni Kevine | David Niyonshuti |
| Patrick Mukunzi | Nyinawabagesera Jacqueline |
| Akoto-Nimoh Christine Serwaa | Joyce Moses Brown |
|  Simeon Azeh Kongnyuy | Nduka-aku Oluchi Rejoice |
| Armand Kayiranga | Dennis Mwai |



#### Link to the presentation slides

https://docs.google.com/presentation/d/1hujBbkSpju1Ya6T6bBkqL5QTimKBcsv9GgTJ3sgKHoU/edit?usp=sharing

  ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detail


## Happy Coding 🎉

