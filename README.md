### WebScraping Smartphone Pricing Trends Analysis.

## Introduction

 WebScrapeVis is the comprehensive solution for scraping, analyzing, and visualizing smartphone pricing data from online retailers. By leveraging the power of Selenium WebDriver for robust web scraping and utilizing jQuery and Chart.js for dynamic data visualization, WebScrapeVis offers valuable insights into market trends and the pricing strategies.

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

- **Web Scraping**: Execute `scrape.js` to collect smartphone pricing data. Data is saved in `scrapedData.json`.

  ```bash
  node scrape.js
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

This project requires no additional configuration for basic usage. To customize scraping or visualization, modify `scrape.js`, `chartKenya.js`, `chartGhana.js` and `chartNigeria.js`.

## Documentation

This README is the primary documentation source. The codebase includes comments for clarity and understanding.

## Testing

To test the visualization:

1. Ensure `scrapedData.json` exists and contains valid data.
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
- Navigate through the application sections to test different Regex patterns and data types as per the project's features.

This setup enables real-time interaction with the project, allowing you to view changes live as you modify files or experiment with different Regular Expressions.

 <img width="908" alt="finalpie" src="https://github.com/Lydia02/alu-web-scraping/assets/37791436/ce1f7416-b51f-46c5-a6ed-6feaaeee42d3">

## Troubleshooting

- **Web Scraping**: If errors occur, verify the target website's structure, your internet connection, and Selenium WebDriver setup.
- **Visualization**: Ensure `scrapedData.json` is properly formatted and all dependencies are installed correctly.

## Contributors

ALU Software Engineering January 2024 cohort 1&2

#### Link to the presentation slides

https://docs.google.com/presentation/d/1hujBbkSpju1Ya6T6bBkqL5QTimKBcsv9GgTJ3sgKHoU/edit?usp=sharing

  ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detail

## Happy Coding 🎉

