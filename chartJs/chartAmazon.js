(function() {
    $(document).ready(function() {
        $.getJSON('extractedData/scrapedDataAmazon.json', function(data) {
            var smartphones = parseData(data);
            createChart(smartphones, 'pricingTrendsChartAmazon');
        });
    });

    function parseData(data) {
        // Adjust this parsing logic as necessary for your data structure
        // Make sure the prices are correctly parsed as floats without currency symbols
        return data.map(item => ({
            ...item,
            productPrice: parseFloat(item.productPrice.replace('$', '').replace(',', '')) // Adjust if your data includes a currency symbol or commas
        }));
    }

    function createChart(smartphones, canvasId) {
        var ctx = $('#' + canvasId).get(0).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: smartphones.map(item => item.scrapeDateTime),
                datasets: [{
                    label: 'Smartphone Price on Amazon',
                    data: smartphones.map(item => item.productPrice),
                    fill: false,
                    borderColor: 'rgb(255, 205, 86)',
                    tension: 0.1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgb(240, 248, 255)' // Example color
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
})();
