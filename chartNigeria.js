(function() {
    $(document).ready(function() {
        $.getJSON('scrapedData.json', function(data) {
            var smartphones = parseData(data);
            createChart(smartphones, 'pricingTrendsChartNigeria');
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
                    label: 'Smartphone Price in Nigeria',
                    data: smartphones.map(item => parseFloat(item.productPrice.replace('₦ ', '').replace(',', ''))),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
})();
