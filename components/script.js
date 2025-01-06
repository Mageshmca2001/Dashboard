

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

    // Create page numbers container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-numbers';
    document.getElementById('prev-btn').parentNode.insertBefore(
        paginationContainer,
        document.getElementById('next-btn')
    );

    // Function to create page number buttons
    function createPageNumbers() {
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= 6; i++) {
            if (i <= totalPages) {
                const pageBtn = document.createElement('button');
                pageBtn.innerText = i;
                pageBtn.className = 'page-number';
                if (i === currentPage) {
                    pageBtn.classList.add('active');
                }
                pageBtn.addEventListener('click', function() {
                    currentPage = i;
                    displayRows();
                    updatePageNumbers();
                });
                paginationContainer.appendChild(pageBtn);
            }
        }
    }

    function updatePageNumbers() {
        const pageButtons = document.getElementsByClassName('page-number');
        for (let button of pageButtons) {
            button.classList.remove('active');
            if (parseInt(button.innerText) === currentPage) {
                button.classList.add('active');
            }
        }
    }

    function displayRows() {
        for (let i = 0; i < totalRows; i++) {
            rows[i].style.display = 'none';
        }

        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        for (let i = start; i < end && i < totalRows; i++) {
            rows[i].style.display = '';
        }

        document.getElementById('pagination-info').innerText = 
            `Showing ${start + 1} to ${Math.min(end, totalRows)} of ${totalRows} entries`;

        document.getElementById('prev-btn').disabled = currentPage === 1;
        document.getElementById('next-btn').disabled = currentPage === totalPages;
    }

    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayRows();
            updatePageNumbers();
        }
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            displayRows();
            updatePageNumbers();
        }
    });

    // Initial setup
    createPageNumbers();
    displayRows();
});





// Get the necessary elements
const entriesSelect = document.getElementById('entries');
const dataTable = document.getElementById('dataTable');
const tableBody = dataTable.getElementsByTagName('tbody')[0];
const rows = tableBody.getElementsByTagName('tr');

// Show table once JavaScript is loaded
dataTable.style.display = 'table';

// Function to show selected number of entries
function showEntries() {
    const selectedValue = entriesSelect.value;
    const totalRows = rows.length;
    
    // Show all rows if "All" is selected
    if (selectedValue === 'All') {
        for (let i = 0; i < totalRows; i++) {
            rows[i].style.display = '';
        }
        return;
    }
    
    // Convert selected value to number
    const numEntries = parseInt(selectedValue);
    
    // Show/hide rows based on selection
    for (let i = 0; i < totalRows; i++) {
        if (i < numEntries) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

// Add event listener to select element
entriesSelect.addEventListener('change', showEntries);

// Initialize table with default selection
showEntries();