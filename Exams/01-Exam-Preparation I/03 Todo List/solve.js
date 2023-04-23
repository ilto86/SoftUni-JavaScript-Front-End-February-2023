function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const inputElement = document.getElementById('title');
    const ulContainer = document.getElementById('todo-list');
    const submitBtn = document.getElementById('add-button');
    const loadBtn = document.getElementById('load-button');

    loadBtn.addEventListener('click', loadToDoHandler);
    submitBtn.addEventListener('click', createToDoHandler);

    async function loadToDoHandler(event) {
        if (event) {
            event.preventDefault();
        }
        ulContainer.innerHTML = '';

        try {
            const response = await fetch(BASE_URL);
            const todoData = await response.json();

            for (const toDoId in todoData) {
                const { _id, name } = todoData[toDoId];
                
                const li = createElement('li', '', ulContainer, _id);
                createElement('span', name, li);
                const removeBtn = createElement('button', 'Remove', li);
                const editBtn = createElement('button', 'Edit', li);

                removeBtn.addEventListener('click', removeToDoHandler);
                editBtn.addEventListener('click', editToDoPrepareHandler);
            };
        } catch (error) {
            console.log(error);
        }
    }

    async function createToDoHandler(event) {
        event.preventDefault();
        let message = inputElement.value;
        const toDo = {
            name: message,
        };

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                body: JSON.stringify(toDo)
            });
            inputElement.value = '';
            await loadToDoHandler(event);
        } catch (error) {
            console.log(error);
        }
    }

    async function removeToDoHandler() {
        const id = this.parentElement.id;
        const httpHeaders = {
            method: 'DELETE'
        };
        
        try {
            const response = await fetch(BASE_URL + id, httpHeaders);
            await loadToDoHandler();
        } catch (error) {
            console.log(error);
        }
    }

    function editToDoPrepareHandler() {
        const id = this.parentElement.id;
        const listItem = this.parentElement;
        listItem.innerHTML = `
        <input value='${listItem.querySelector('span').textContent}'/>
        <button id=${id} class="remove-button">Remove</button>
        <button id=${id} class="submit-button">Submit</button>
        `;

        listItem.querySelector('.remove-button').addEventListener('click', removeToDoHandler);
        listItem.querySelector('.submit-button').addEventListener('click', editToDoHandler);
    }

    async function editToDoHandler() {    
        const id = this.id;
        const toDoInput = this.parentElement.querySelector('input').value;
        const headers = {
            method: 'PATCH',
            body: JSON.stringify({ name: toDoInput })
        };

        try {
            const response = await fetch(BASE_URL + id, headers);
            await loadToDoHandler();
        } catch (error) {
            console.log(error);
        }
    }

    function createElement(type, content, parentElement, id, classes, attributes) {
        const htmlElement = document.createElement(type);
    
        if(content && type !== 'input' && type !== 'textarea') {
            htmlElement.textContent = content;
        }
    
        if(content && type === 'input' && type === 'textarea') {
            htmlElement.value = content;
        }
    
        if(id) {
            htmlElement.id = id;
        }
    
        if (classes) {
            htmlElement.classList.add(...classes);
        }
    
        if (parentElement) {
            parentElement.appendChild(htmlElement);
        }
    
        //{ src: 'link to img', href: 'link to site' }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]); 
            }
        } 
        return htmlElement;
    }
}

attachEvents();