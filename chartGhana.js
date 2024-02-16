(function() {
    $(document).ready(function() {
        $.getJSON('scrapedDataGhana.json', function(data) {
            var smartphones = parseData(data);
            createChart(smartphones, 'pricingTrendsChartGhana');
        });
    });

    function parseData(data) {
        // Adjust this parsing logic as necessary for your data structure
        return data;
    }

    function createChart(smartphones, canvasId) {
        var ctx = $('#' + canvasId).get(0).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: smartphones.map(item => item.scrapeDateTime),
                datasets: [{
                    label: 'Smartphone Price in Ghana',
                    data: smartphones.map(item => parseFloat(item.productPrice.replace('GH₵ ', '').replace(',', ''))),
                    fill: false,
                    borderColor: 'rgb(255, 205, 86)',
                    tension: 0.1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            // Change the color here
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
