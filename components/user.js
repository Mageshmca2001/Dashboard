let editingRow = null;

// Dummy data for the table
const data = [
  { id: 1735555982971, name: 'Software Engineer', date: '2024-01-01' },
  { id: 1735555982971, name: 'Test Zig', date: '2024-01-02' },
];

const renderTable = () => {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = document.createElement('tr');
    row.classList.add('border-b');
    row.innerHTML = `
      <td class="px-4 py-2 text-center text-white">${item.id}</td>
      <td class="px-4 py-2 text-center text-white">${item.name}</td>
      <td class="px-4 py-2 text-center text-white">${item.date}</td>
      <td class="px-4 py-2 text-center text-white">
        <button onclick="editRow(${item.id})" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
        <button onclick="deleteRow(${item.id})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
};

const openAddModal = () => {
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = 'Add New Entry';
  document.getElementById('name-input').value = '';
  document.getElementById('date-input').value = '';
  document.getElementById('save-btn').onclick = saveNewRow;
  editingRow = null;
};

const closeModal = () => {
  document.getElementById('modal').classList.add('hidden');
};

const saveNewRow = () => {
  const name = document.getElementById('name-input').value;
  const date = document.getElementById('date-input').value;
  const newRow = {
    id: Date.now(),
    name,
    date,
  };
  data.push(newRow);
  closeModal();
  renderTable();
};

const editRow = (id) => {
  const row = data.find(item => item.id === id);
  document.getElementById('name-input').value = row.name;
  document.getElementById('date-input').value = row.date;
  document.getElementById('modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = 'Edit Entry';
  document.getElementById('save-btn').onclick = () => updateRow(id);
  editingRow = row;
};

const updateRow = (id) => {
  const name = document.getElementById('name-input').value;
  const date = document.getElementById('date-input').value;
  const row = data.find(item => item.id === id);
  row.name = name;
  row.date = date;
  closeModal();
  renderTable();
};

const deleteRow = (id) => {
  const index = data.findIndex(item => item.id === id);
  if (index > -1) {
    data.splice(index, 1);
    renderTable();
  }
};

// Initial render
renderTable();