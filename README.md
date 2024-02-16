# WebScrapeVis: Smartphone Pricing Trends Analysis

## Introduction

WebScrapeVis is a comprehensive solution for scraping, analyzing, and visualizing smartphone pricing data from online retailers. By leveraging the power of Selenium WebDriver for robust web scraping and utilizing jQuery and Chart.js for dynamic data visualization, WebScrapeVis offers valuable insights into market trends and pricing strategies.

## Table of Contents

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

- Node.js
- Selenium WebDriver
- Chart.js
- jQuery

## Configuration

This project requires no additional configuration for basic usage. To customize scraping or visualization, modify `scrape.js` and `datavisualization.js`.

## Documentation

This README is the primary documentation source. The codebase includes comments for clarity and understanding.

## Testing

To test the visualization:

1. Ensure `scrapedData.json` exists and contains valid data.
2. Open `index.html` in a modern web browser.
3. Interact with the visualizations to test functionalities like zooming and panning.

## Running on a Live Server

After setting up the project locally, you can run it on a live server to interact with the web application in real-time. This process will serve your project files on a local web server, making it easly accessible through a web browser.

### Using Visual Studio Code Live Server

If you are using Visual Studio Code (VS Code) as your IDE, you can use the Live Server extension to quickly start a server.

1. **Install Live Server Extension**:
   - Open VS Code and navigate to the Extensions view by clicking on the square icon on the sidebar or pressing `Ctrl+Shift+X`.
   - Search for "Live Server" and click on the install button.

2. **Open the Project**:
   - Open the project folder in VS Code by going to File > Open Folder and selecting the `alu-web-scraping` directory.

3. **Start Live Server**:
   - Right-click on the `index.html` file in the VS Code explorer and select "Open with Live Server", or click on the "Go Live" button at the bottom right of the VS Code window.
   - Your default web browser will open, and the project will be served from a local URL, typically `http://127.0.0.1:5500`.
  
     ### Accessing the Web Application

- Open your web browser and go to the URL provided by Live Server or `http-server`. You should now see the project running and can interact with the web application.
- Navigate through the application sections to test different Regex patterns and data types as per the project's features.

This setup enables real-time interaction with the project, allowing you to view changes live as you modify files or experiment with different Regular Expressions.

 <img width="690" alt="piechart" src="https://github.com/Lydia02/alu-web-scraping/assets/37791436/67bf45e5-c36e-4833-ad23-00d127826caf">


## Troubleshooting

- **Web Scraping**: If errors occur, verify the target website's structure, your internet connection, and Selenium WebDriver setup.
- **Visualization**: Ensure `scrapedData.json` is properly formatted and all dependencies are installed correctly.

## Contributors

ALU January 2024 Cohort 1 and 2

## License

Define the license under which the project is released.
