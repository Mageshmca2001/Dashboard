// Sample users array to manage the user data
let users = [
{ id: 1, name: "B.Magesh", createdDate: "02.12.2024", role: "Software Engineering", status: "Active" },
{ id: 2, name: "U.Kamalesh waran", createdDate: "02.12.2024", role: "Software Engineering", status: "Active" },
{ id: 3, name: "M.Balaji", createdDate: "02.12.2024", role: "Software Engineering", status: "Active" },
{ id: 4, name: "J.jackson", createdDate: "02.12.2024", role: "Software Engineering", status: "Active" },
{ id: 5, name: "I.Monisha", createdDate: "02.12.2024", role: "Software Engineering", status: "Active" }

];

// Function to render the user table
function renderTable() {
const tbody = document.querySelector("#dataTable tbody");
tbody.innerHTML = ""; // Clear existing rows

users.forEach((user, index) => {
const row = document.createElement("tr");

row.innerHTML = `
<td class="border border-gray-300 text-center px-4 py-2">${index + 1}</td>
<td class="border border-gray-300 text-center px-4 py-2">${user.name}</td>
<td class="border border-gray-300 text-center px-4 py-2">${user.createdDate}</td>
<td class="border border-gray-300 text-center px-4 py-2">${user.role}</td>
<td class="border border-gray-300 text-center px-4 py-2">${user.status}</td>
<td class="border border-gray-300 text-center px-4 py-2 flex justify-center items-center space-x-2">
<button onclick="editUser(${user.id})" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center">
<i class="fas fa-edit mr-2"></i> Edit
</button>
<button onclick="deleteUser(${user.id})" class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center">
<i class="fas fa-trash mr-2"></i> Delete
</button>
</td>
`;

tbody.appendChild(row);
});
}

// Function to add a new user
function addUser() {
const name = prompt("Enter user name:");
const role = prompt("Enter user role:");
const status = prompt("Enter user status (Active/Inactive):");
const createdDate = new Date().toLocaleDateString("en-GB");

if (name && role && status) {
const newUser = {
id: users.length ? users[users.length - 1].id + 1 : 1,
name,
createdDate,
role,
status,
};
users.push(newUser);
renderTable();
} else {
alert("All fields are required!");
}
}

// Function to edit an existing user
function editUser(id) {
const user = users.find((u) => u.id === id);
if (!user) return alert("User not found!");

const name = prompt("Edit user name:", user.name);
const role = prompt("Edit user role:", user.role);
const status = prompt("Edit user status (Active/Inactive):", user.status);

if (name && role && status) {
user.name = name;
user.role = role;
user.status = status;
renderTable();
} else {
alert("All fields are required!");
}
}

// Function to delete a user
function deleteUser(id) {
if (confirm("Are you sure you want to delete this user?")) {
users = users.filter((u) => u.id !== id);
renderTable();
}
}

// Attach add user button to the function
const addButton = document.querySelector("button.bg-green-500");
addButton.addEventListener("click", addUser);

// Initial render
renderTable();
