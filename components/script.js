
function showTable() {
    var table = document.getElementById("dataTable");
    if (table.style.display === "none") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}



const totalEntries = 57; // Total number of entries
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
  updatePagination();



document.getElementById('exportbtn').addEventListener('click', function() {
    var wb = XLSX.utils.table_to_book(document.getElementById('Table'), {
        sheet: "Sheet1"
    });

    const filename = 'Reportsfile.xlsx';
    
   
    XLSX.writeFile(wb, filename);
});
