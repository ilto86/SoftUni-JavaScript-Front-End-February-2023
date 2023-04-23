function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const loadBooks = document.getElementById('loadBooks');
  const booksContainer = document.querySelector('table > tbody');
  // const authorInput = document.querySelector('input:nth-child(3)');
  // const titleInput = document.querySelector('input:nth-child(5)');
  const [ titleInput, authorInput ] = Array.from(document.querySelectorAll('#form > input'));
  const submitBtn = document.querySelector('#form > button');
  const formHeader = document.querySelector('#form > h3');

  let allBooksData = {};
  let editBookId = null;

  loadBooks.addEventListener('click', loadAllBooksHandler);
  submitBtn.addEventListener('click', submitFormHandler);

  async function loadAllBooksHandler() {
    booksContainer.innerHTML = '';
    const booksRes = await fetch(BASE_URL);
    const booksData = await booksRes.json();
    // console.log(booksData);

    allBooksData = booksData;

    for (const bookId in booksData) {
      const { author, title } = booksData[bookId];

      const tableRow = document.createElement('tr');
      const titleColumn = document.createElement('td');
      const authorColumn = document.createElement('td');
      const buttonsColumn = document.createElement('td');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');

      titleColumn.textContent = title;
      authorColumn.textContent = author;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';
      editBtn.id = bookId;
      deleteBtn.id = bookId;

      editBtn.addEventListener('click', loadEditFormHandler);
      deleteBtn.addEventListener('click', deleteBookHandler);

      // DOM Manipulations
      tableRow.appendChild(titleColumn);
      tableRow.appendChild(authorColumn);
      buttonsColumn.appendChild(editBtn);
      buttonsColumn.appendChild(deleteBtn);
      tableRow.appendChild(buttonsColumn);
      booksContainer.appendChild(tableRow);
    }
  }

  function loadEditFormHandler() {
    editBookId = this.id;
    formHeader.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';
    const bookById = allBooksData[this.id];
    titleInput.value = bookById.title;
    authorInput.value = bookById.author;
  }

  async function submitFormHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title, author })
    };
    let url = BASE_URL;

    if (formHeader.textContent === 'Edit FORM') {
      httpHeaders.method = 'PUT';
      url += editBookId;
    }

    const resData = await fetch(url, httpHeaders);
    // console.log(`this is HTTP Respone: ${resData} =>`);
    // console.log(resData);
    // console.log('with this json data [object Object(JSON)] =>');
    // console.log(await resData.json());
    loadAllBooksHandler();
    if (formHeader.textContent === 'Edit FORM') {
      formHeader.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  async function deleteBookHandler() {
    const id = this.id;
    const httpHeaders = {
      method: 'DELETE'
    };

    await fetch(BASE_URL + id, httpHeaders);
    loadAllBooksHandler();
  }
}

attachEvents();