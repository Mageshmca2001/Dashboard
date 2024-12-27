/*window.onload = function () {
    const dataPoints = [];
    let chart;

    // Helper to format time as MM/DD/YYYY HHh MMm
    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString("en-US"); // Format as MM/DD/YYYY
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${formattedDate} ${hours}h ${minutes}m`;
    }

    // Fetch data (Simulate API)
    function fetchData(callback) {
        const currentTime = new Date();
        const value = Math.floor(Math.random() * 100); // Simulated value
        callback([{ time: currentTime, value }]);
    }

    // Initialize Chart
    function initializeChart() {
        fetchData(function (data) {
            data.forEach((point) => {
                dataPoints.push({
                    x: new Date(point.time), // Use Date object
                    y: point.value,
                });
            });

            chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light2",
                title: {
                    text: "Real-Time Chart with Date & Time (1 Min Interval)",
                    fontColor: "steelblue",
                    fontFamily: "sans-serif",
                },
                axisX: {
                    title: "Time (MM/DD/YYYY HHh MMm)",
                    labelFormatter: function (e) {
                        return formatTime(e.value);
                    },
                    interval: 1,
                    intervalType: "minute",
                    labelAngle: -50,
                },
                axisY: {
                    title: "Value",
                    includeZero: false,
                },
                data: [
                    {
                        type: "line",
                        markerType: "circle",
                        markerColor: "green",
                        lineColor: "red",
                        dataPoints: dataPoints,
                    },
                ],
            });

            chart.render();
            updateChart(); // Start live updates
        });
    }

    // Update Chart Periodically (Every 1 Minute)
    function updateChart() {
        fetchData(function (data) {
            data.forEach((point) => {
                dataPoints.push({
                    x: new Date(point.time),
                    y: point.value,
                });
            });

            if (dataPoints.length > 10) {
                dataPoints.shift(); // Limit the number of points to 10
            }

            chart.render();
            setTimeout(updateChart, 60000); // Update every 1 minute
        });
    }

    // Insert a New Value
    function insertValue() {
        const currentTime = new Date();
        const value = Math.floor(Math.random() * 100); // Random value
        dataPoints.push({
            x: currentTime,
            y: value,
        });
        chart.render();
    }

    // Pop the Oldest Value
    function popValue() {
        if (dataPoints.length > 0) {
            dataPoints.shift(); // Remove the first element
            chart.render();
        }
    }

    // Refresh Data on Button Click
    document
        .getElementById("refreshButton")
        .addEventListener("click", function () {
            fetchData(function (data) {
                data.forEach((point) => {
                    dataPoints.push({
                        x: new Date(point.time),
                        y: point.value,
                    });
                });

                if (dataPoints.length > 10) {
                    dataPoints.shift(); // Maintain a fixed number of points
                }

                chart.render();
            });
        });

    // Example Buttons to Insert and Pop Values
    document
        .getElementById("insertButton")
        .addEventListener("click", insertValue);

    document
        .getElementById("popButton")
        .addEventListener("click", popValue);

    // Initialize the chart and fetch initial data
    initializeChart();
};*/''


/*const ctx = document.getElementById('barChart').getContext('2d');

    // Initialize Chart
    const barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Sales',
          data: [],
          backgroundColor: [],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          }
        },
        plugins: {
          legend: {
            display: true
          }
        }
      }
    });

    // Function to Randomly Choose Between Orange or Green for Push Color
    function getRandomColor() {
      const colors = [
        'rgba(255, 165, 0, 0.6)', // Orange
        'rgba(0, 128, 0, 0.6)'    // Green
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Function to Get Current Time in HH:MM:SS Format
    function getCurrentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

    // Function to Push and Pop Data Automatically
    function autoUpdateChart() {
      const newTimeLabel = getCurrentTime();  // Get current time for label
      const newValue = Math.floor(Math.random() * 100) + 1;

      // Add New Data (Push)
      barChart.data.labels.push(newTimeLabel);
      barChart.data.datasets[0].data.push(newValue);

      // Randomly choose color for the new bar (either orange or green)
      const newColor = getRandomColor();
      barChart.data.datasets[0].backgroundColor.push(newColor);

      // Handle Pop (if more than 10 bars)
      if (barChart.data.labels.length > 10) {
        // Temporarily change the color of the bar to green before removing
        const poppedIndex = 0; // Index of the bar to be removed
        barChart.data.datasets[0].backgroundColor[poppedIndex] = 'rgba(0, 128, 0, 0.6)'; // Green

        // Remove the bar after a brief delay
        setTimeout(() => {
          barChart.data.labels.shift(); // Remove label
          barChart.data.datasets[0].data.shift(); // Remove data
          barChart.data.datasets[0].backgroundColor.shift(); // Remove color
          barChart.update(); // Update chart after removal
        }, 500); // Delay of 500ms to show the green color
      }

      // Update Chart to Reflect Push
      barChart.update();
    }

    // Set Interval to Automatically Update the Chart every 2 seconds
    setInterval(autoUpdateChart, 2000); // Update every 2 seconds*/


    const ctx = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctx, {
    type: 'bar', // Bar chart type
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
      datasets: [{
        label: 'Meter Details',
        data: [12, 19, 3, 5, 2], // Data for the bar chart
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Border color
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true // Y-axis starts from 0
        }
      }
    }
  });