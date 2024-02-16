$(document).ready(function() {
    // Load and parse the JSON data
    $.getJSON('scrapedData.json', function(data) {
        const chartData = data.map(item => ({
            x: new Date(item.scrapeDateTime),
            y: parseInt(item.productPrice.replace('₦ ', '').replace(',', '')),
            label: item.productName
        }));

        // Create chart
        createChart(chartData);
    });
});

function createChart(chartData) {
    const ctx = document.getElementById('priceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line', // or 'bar' for bar charts
        data: {
            datasets: [{
                label: 'Smartphone Price Over Time',
                data: chartData,
                backgroundColor: 'rgba(0, 119, 204, 0.3)',
                borderColor: 'rgba(0, 119, 204, 0.8)',
                fill: false,
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price (₦)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy',
                    }
                }
            }
        }
    });
}
