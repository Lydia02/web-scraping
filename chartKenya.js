(function() {
    $(document).ready(function() {
        $.getJSON('scrapedDataKenya.json', function(data) {
            var smartphones = parseData(data);
            createChart(smartphones, 'pricingTrendsChartKenya');
        });
    });

    function parseData(data) {
        // Parsing logic here
        return data;
    }

    function createChart(smartphones, canvasId) {
        var ctx = $('#' + canvasId).get(0).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: smartphones.map(item => item.scrapeDateTime),
                datasets: [{
                    label: 'Smartphone Price in Kenya',
                    data: smartphones.map(item => parseFloat(item.productPrice.replace('KSh ', '').replace(',', ''))),
                    fill: false,
                    borderColor: 'rgb(255, 159, 64)',
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
