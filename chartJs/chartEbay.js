(function() {
    $(document).ready(function() {
        $.getJSON('extractedData/scrapedDataEbay.json', function(data) {
            var smartphones = parseData(data);
            createChart(smartphones, 'pricingTrendsChartEbay');
        });
    });

    function parseData(data) {
        return data.map(item => {
            item.productPrice = parseFloat(item.productPrice.replace('$', '').replace(',', ''));
            return item;
        });
    }

    function createChart(smartphones, canvasId) {
        var ctx = $('#' + canvasId).get(0).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: smartphones.map(item => item.scrapeDateTime),
                datasets: [{
                    label: 'Smartphone Price on Ebay',
                    data: smartphones.map(item => item.productPrice),
                    fill: false,
                    borderColor: 'rgb(255, 159, 64)',
                    tension: 0.1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: 'rgb(240, 248, 255)'
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
