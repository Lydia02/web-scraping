$(document).ready(function() {
    $.getJSON('scrapedData.json', function(data) {
        // Processing  the data used for the chart
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
