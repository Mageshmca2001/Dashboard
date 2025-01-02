function showModal() {
  document.getElementById("createUserModal").classList.remove("hidden");
}

// Hide the modal when the "Cancel" button is clicked
function hideModal() {
  document.getElementById("createUserModal").classList.add("hidden");
}

// Function to handle the creation of a user
function createUser() {
  const username = document.getElementById("username").value;
  const role = document.getElementById("role").value;
  const createdDate = document.getElementById("createdDate").value;

  // Validate the input fields
  if (!username || !role || !createdDate) {
      alert("Please fill in all the fields.");
      return;
  }

  // Hide the modal after creating the user
  hideModal();

  // Add the new user to the table
  addUserToTable(username, role, createdDate);
}

// Function to add the user data to the table
function addUserToTable(username, role, createdDate) {
  const tableBody = document.getElementById("userTableBody");
  const rowCount = tableBody.rows.length + 1; // S.No will be row count
  const row = document.createElement("tr");

  row.innerHTML = `
      <td class="border px-4 py-2 text-center">${rowCount}</td>
      <td class="border px-4 py-2 text-center">${username}</td>
      <td class="border px-4 py-2 text-center">${createdDate}</td>
      <td class="border px-4 py-2 text-center">${role}</td>
      <td class="border px-4 py-2 text-center">Active</td>
      <td class="border px-4 py-2 text-center">
          <button class="text-blue-500 hover:underline">Edit</button>
          <button class="text-red-500 hover:underline ml-2">Delete</button>
      </td>
  `;
  tableBody.appendChild(row);
}