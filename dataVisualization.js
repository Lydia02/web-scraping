$(document).ready(function() {
    $.getJSON('scrapedData.json', function(data) {
        // Assume data is an array of objects like the given example
        var smartphones = parseData(data);
        createChart(smartphones);
    });
});

function parseData(data) {
    // Transform data into a suitable format for charting
    // For simplicity, this example assumes data is directly usable after parsing
    return data;
}
function createChart(smartphones) {
    var ctx = $('#pricingTrendsChart').get(0).getContext('2d');
    var chart = new Chart(ctx, {
        // Chart configuration goes here
        type: 'line', // or 'bar' for bar charts
        data: {
            labels: smartphones.map(item => item.scrapeDateTime), // Extract date/time for x-axis
            datasets: [{
                label: 'Smartphone Price',
                data: smartphones.map(item => parseFloat(item.productPrice.replace('₦ ', '').replace(',', ''))), // Extract price for y-axis, removing currency symbols and commas
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
            },
            tooltips: {
                enabled: true,
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });
}

