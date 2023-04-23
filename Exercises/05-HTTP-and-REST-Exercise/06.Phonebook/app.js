function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const phonebookContainer = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBtn = document.getElementById('btnCreate');


    loadBtn.addEventListener('click', loadPhoneBookHandler);
    createBtn.addEventListener('click', createPhoneBookHandler);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookResponse = await fetch(BASE_URL);
            let phoneBookData = await phoneBookResponse.json();

            phonebookContainer.innerHTML = '';
            phoneBookData = Object.values(phoneBookData);
            for (const { phone, person, _id } of phoneBookData) {
                const li = document.createElement('li');
                const button = document.createElement('button');
                button.textContent = 'Delete';
                button.id = _id;
                button.addEventListener('click', deletePhoneBookHandler);
                li.textContent = `${person}: ${phone}`;
                li.appendChild(button);
                phonebookContainer.appendChild(li);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function deletePhoneBookHandler(event) {
        const id = this.id;
        const httpHeaders = {
            method: 'DELETE',
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((response) => response.json())
            .then(loadPhoneBookHandler)
            .catch((error) => {
                console.log(error);
            });
    }

    function createPhoneBookHandler() {
        const person = personInput.value;
        const phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person, phone })
        };

        fetch(BASE_URL, httpHeaders)
            .then((response) => response.json())
            .then(() => {
                loadPhoneBookHandler();
                personInput.value = '';
                phoneInput.value = '';
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

attachEvents();