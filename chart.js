$(document).ready(function() {
    $.getJSON('scrapedData.json', function(data) {
        / Process the data
        const chartData = data.map(item => {
            return {
                x: new Date(item.scrapeDateTime),
                y: parseInt(item.productPrice.replace('₦ ', '').replace(',', '')),
                label: item.productName
            };
        });

        createChart(chartData);
    });
});
