

function showTable() {
var table = document.getElementById("dataTable",);
if (table.style.display === "none") {
table.style.display = "table";
} else {
table.style.display = "none";
}
} 

function updateEntries() {
// Get the selected value from the dropdown
const selectElement = document.getElementById('entries');
const selectedValue = selectElement.value;

// Perform actions based on the selected value
if (selectedValue === 'All') {
console.log('Show all entries');
// Code to show all entries
} else {
console.log(`Show ${selectedValue} entries`);
// Code to show the specified number of entries
}

// Example: Update a display area (you can customize this part)
// const displayArea = document.getElementById('displayArea');
// displayArea.innerText = `Showing ${selectedValue} entries`;
}

document.getElementById('search').addEventListener('input', function (e) {
const filter = e.target.value.toLowerCase();
const rows = document.querySelectorAll('#dataTable tbody tr');
rows.forEach(row => {
const text = row.textContent.toLowerCase();
row.style.visibility = text.includes(filter) ? "visible" : "hidden";
});
});




/*const totalEntries = 57; // Total number of entries
const entriesPerPage = 10; // Entries per page
let currentPage = 1; // Starting page

const paginationInfo = document.getElementById('pagination-info');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Update pagination info
function updatePagination() {
const start = (currentPage - 1) * entriesPerPage + 1;
const end = Math.min(currentPage * entriesPerPage, totalEntries);
paginationInfo.textContent = `Showing ${start} to ${end} of ${totalEntries} entries`;

// Disable or enable buttons based on the page number
prevButton.disabled = currentPage === 1;
nextButton.disabled = currentPage === Math.ceil(totalEntries / entriesPerPage);

// Update the page button styles
for (let i = 1; i <= 6; i++) {
const pageButton = document.getElementById(`page-${i}`);
if (i === currentPage) {
pageButton.classList.add('bg-blue-500', 'text-white');
pageButton.classList.remove('bg-white');
} else {
pageButton.classList.remove('bg-blue-500', 'text-white');
pageButton.classList.add('bg-white');
}
}
}

// Go to the previous page
prevButton.addEventListener('click', () => {
if (currentPage > 1) {
currentPage--;
updatePagination();
}
});

// Go to the next page
nextButton.addEventListener('click', () => {
if (currentPage < Math.ceil(totalEntries / entriesPerPage)) {
currentPage++;
updatePagination();
}
});

// Go to specific page
for (let i = 1; i <= 6; i++) {
const pageButton = document.getElementById(`page-${i}`);
pageButton.addEventListener('click', () => {
currentPage = i;
updatePagination();
});
}

// Initialize pagination on page load
updatePagination();*/



document.getElementById('exportbtn').addEventListener('click', function() {
var wb = XLSX.utils.table_to_book(document.getElementById('dataTable'), {
sheet: "Sheet1"
});

const filename = 'Reportsfile.xlsx';


XLSX.writeFile(wb, filename);
});



document.addEventListener('DOMContentLoaded', function() {
const rowsPerPage = 10; 
let currentPage = 1; 
const table = document.getElementById('dataTable');
const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
const totalRows = rows.length;
const totalPages = Math.ceil(totalRows / rowsPerPage);

function displayRows() {

for (let i = 0; i < totalRows; i++) {
rows[i].style.display = 'none';
}


const start = (currentPage - 1) * rowsPerPage;
const end = start + rowsPerPage;


for (let i = start; i < end && i < totalRows; i++) {
rows[i].style.display = '';
}


document.getElementById('pagination-info').innerText = `Showing ${start + 1} to ${Math.min(end, totalRows)} entries`;


document.getElementById('prev-btn').disabled = currentPage === 1;
document.getElementById('next-btn').disabled = currentPage === totalPages;
}


document.getElementById('prev-btn').addEventListener('click', function() {
if (currentPage > 1) {
currentPage--;
displayRows();
}
});

document.getElementById('next-btn').addEventListener('click', function() {
if (currentPage < totalPages) {
currentPage++;
displayRows();
}
});


displayRows();
});




