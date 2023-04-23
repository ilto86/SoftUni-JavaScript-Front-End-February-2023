async function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const inputDOMSelectors = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
    };

    const otherDOMSelectors = {
        loadBtn: document.getElementById('load-board-btn'),
        createBtn: document.getElementById('create-task-btn'),
        boardSection: document.getElementById('board-section'),
        todoSection: document.getElementById('todo-section'),
        inProgressSection: document.getElementById('in-progress-section'),
        codeReviewSection: document.getElementById('code-review-section'),
        doneSection: document.getElementById('done-section'),
        taskListUl: document.getElementsByClassName('task-list'),
    };

    const tasksBtns = {
        ToDo: 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        Done: 'Close',
    };

    const tasksSections = {
        ToDo: otherDOMSelectors.todoSection,
        'In Progress': otherDOMSelectors.inProgressSection,
        'Code Review': otherDOMSelectors.codeReviewSection,
        Done: otherDOMSelectors.doneSection,
    };

    let currentTask = {};

    otherDOMSelectors.loadBtn.addEventListener('click', loadAllTasksHandler);
    otherDOMSelectors.createBtn.addEventListener('click', createTaskHandler);

    async function loadAllTasksHandler(event) {
        if (event) {
            event.preventDefault();
        }

        otherDOMSelectors.taskListUl[0].innerHTML = '';
        otherDOMSelectors.taskListUl[1].innerHTML = '';
        otherDOMSelectors.taskListUl[2].innerHTML = '';
        otherDOMSelectors.taskListUl[3].innerHTML = '';

        try {
            const response = await fetch(BASE_URL);
            const allTasksRes = await response.json();
            let allTasks = Object.values(allTasksRes);
        
            for (const { title, description, status, _id } of allTasks) {
                currentTask[_id] = status;
            
                let taskBtn = tasksBtns[status];
                let section = tasksSections[status];
            
                const currentSection = section.querySelector('.task-list');
                const li = createElement('li', '', currentSection, _id, ['task']);
                createElement('h3', title, li);
                createElement('p', description, li);
                const moveBtn = createElement('button', taskBtn, li);
            
                if (status !== 'Done') {
                moveBtn.addEventListener('click', moveTaskToTheNextHandler);
                } else {
                moveBtn.addEventListener('click', closeTaskHandler);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function moveTaskToTheNextHandler(event) {
        let id = this.parentElement.id;
        let currentStatus = currentTask[id];
        let status = '';
    
        if (currentStatus == 'ToDo') {
        status = 'In Progress';
        } else if (currentStatus == 'In Progress') {
        status = 'Code Review';
        } else if (currentStatus == 'Code Review') {
        status = 'Done';
        }
    
        try {
            await fetch(BASE_URL + id, { method: 'PATCH', body: JSON.stringify({ 'status': status }) });
            await loadAllTasksHandler(event);
            } catch (error) {
                console.error(error);
            }
    }

    async function closeTaskHandler(event) {
        let id = this.parentElement.id;
    
        try {
            await fetch(BASE_URL + id, { method: 'DELETE' });
            await loadAllTasksHandler(event);
        } catch (error) {
            console.error(error);
        }
    }

    async function createTaskHandler(event) {
        const { title, description } = inputDOMSelectors;
        const payload = JSON.stringify({ 
            title: title.value, 
            description: description.value, 
            status: 'ToDo' 
        });
    
        if (title.value === '' || description.value === '') {
            alert('Must all inputs filled!');
            return;
        } else {
            try {
                const httpHeaders = { method: 'POST', body: payload };
                await fetch(BASE_URL, httpHeaders);
            
                inputDOMSelectors.title.value = '';
                inputDOMSelectors.description.value = '';
            
                await loadAllTasksHandler(event);
            } catch (error) {
                console.error(error);
            }
        }
    }

    function createElement(type, content, parentElement, id, classes, attributes) {
        const htmlElement = document.createElement(type);
    
        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }
    
        if (content && type === 'input') {
            htmlElement.value = content;
        }
    
        if (id) {
            htmlElement.id = id;
        }
    
        if (classes) {
            htmlElement.classList.add(...classes);
        }
    
        if (parentElement) {
            parentElement.appendChild(htmlElement);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }   
        }
        return htmlElement;
    }
}

attachEvents();