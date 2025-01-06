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
};*/


{/* javascript bar-diagram*/}


const ctx = document.getElementById('barChart').getContext('2d');

// Function to generate a random date and time string
function getRandomDateTime() {
const randomDate = new Date();
randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30)); // Randomly go back in days (up to 30 days)
const day = randomDate.toLocaleString('en-US', { weekday: 'short' });
const time = randomDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' });

return `${day} ${time}`;
}

// Generate an array of random dates and times for the labels




// Ensure the data-label is added when the page is loaded or resized

function createGroupedBarChart() {
const ctx = document.getElementById('barChart').getContext('2d');
const data = {
labels: ['Progress'], // Label for the group
datasets: [
{
label: 'Tested (Set 1)',
data: [40], // Value for "Tested" in Set 1
backgroundColor: 'red',
borderColor: 'darkred',
borderWidth: 1,
barThickness: 20,
},
{
label: 'Completed (Set 1)',
data: [30], // Value for "Completed" in Set 1
backgroundColor: 'green',
borderColor: 'darkgreen',
borderWidth: 1,
barThickness: 20,
},
{
label: 'Reworked (Set 1)',
data: [20], // Value for "Reworked" in Set 1
backgroundColor: 'orange',
borderColor: 'darkorange',
borderWidth: 1,
barThickness: 20,
},
{
label: 'Tested (Set 2)',
data: [50], // Value for "Tested" in Set 2
backgroundColor: 'darkred',
borderColor: 'red',
borderWidth: 1,
barThickness: 20,
},
{
label: 'Completed (Set 2)',
data: [35], // Value for "Completed" in Set 2
backgroundColor: 'darkgreen',
borderColor: 'green',
borderWidth: 1,
barThickness: 20,
},
{
label: 'Reworked (Set 2)',
data: [25], // Value for "Reworked" in Set 2
backgroundColor: 'darkorange',
borderColor: 'orange',
borderWidth: 1,
barThickness: 20,
}
]
};

const options = {
responsive: true,
plugins: {
legend: {
display: true,
position: 'top',
}
},
scales: {
x: {
beginAtZero: true,
stacked: false, // Group the bars together
barPercentage: 0.8, // Adjust the width of bars
categoryPercentage: 0.5, // Adjust the space between groups
offset: true, // Add offset for each group to create space
},
y: {
beginAtZero: true,
}
}
};

new Chart(ctx, {
type: 'bar',
data: data,
options: options
});
}