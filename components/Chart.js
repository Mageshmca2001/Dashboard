window.onload = function () {
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
                    title: "Time (12/28/2024 11:03)",
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
};