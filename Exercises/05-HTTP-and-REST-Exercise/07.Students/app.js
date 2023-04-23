function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';
  const tableBody = document.getElementsByTagName('tbody')[0];
  const firstNameInput = document.querySelector('.inputs input:nth-child(1)');
  const lastNameInput = document.querySelector('.inputs input:nth-child(2)');
  const facultyNumberInput = document.querySelector('.inputs input:nth-child(3)');
  const gradeInput = document.querySelector('.inputs input:nth-child(4)');
  const submitBtn = document.getElementById('submit');

  submitBtn.addEventListener('click', createStudentInfoHandler);

  async function createStudentInfoHandler() {
    try {
      const firstName = firstNameInput.value;
      const lastName = lastNameInput.value;
      const facultyNumber = facultyNumberInput.value;
      const grade = gradeInput.value;

      const httpHeaders = {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
      };

      const response = await fetch(BASE_URL, httpHeaders);

      firstNameInput.value = '';
      lastNameInput.value = '';
      facultyNumberInput.value = '';
      gradeInput.value = '';

    } catch {
      console.log('Error');
    }
    loadStudentsInfo();
  }

  async function loadStudentsInfo() {
    tableBody.textContent = '';
    try {
      const response = await fetch(BASE_URL);
      let data = await response.json();

      data = Object.values(data);
      for (const { grade, facultyNumber, lastName, firstName } of data) {
        let tr = document.createElement('tr');
        let firstNameTd = document.createElement('td');
        firstNameTd.textContent = firstName;
        tr.appendChild(firstNameTd);
        let lastNameTd = document.createElement('td');
        lastNameTd.textContent = lastName;
        tr.appendChild(lastNameTd);
        let facultyNumberTd = document.createElement('td');
        facultyNumberTd.textContent = facultyNumber;
        tr.appendChild(facultyNumberTd);
        let gradeTd = document.createElement('td');
        gradeTd.textContent = grade;
        tr.appendChild(gradeTd);

        tableBody.appendChild(tr);
      }
    } catch {
      console.log('Error');
    }
  }
  loadStudentsInfo();
}

attachEvents();