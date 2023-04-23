window.addEventListener("load", solve);

function solve() {
    const inputDOMSelectors = {
        taskTitleInput: document.getElementById('task-title'),
        taskCategoryInput: document.getElementById('task-category'),
        taskContentInput: document.getElementById('task-content'),
    };

    const otherDOMSelectors = {
        publishBtn: document.getElementById('publish-btn'),
        reviewList: document.getElementById('review-list'),
        publishedList: document.getElementById('published-list'),
    };

    const taskState = {
        taskTitleInput: null,
        taskCategoryInput: null,
        taskContentInput: null,
    };

    otherDOMSelectors.publishBtn.addEventListener('click', publishTaskHandler);

    function publishTaskHandler(event) {
        event.preventDefault();

        let taskTitle = inputDOMSelectors.taskTitleInput.value;
        let taskCategory = inputDOMSelectors.taskCategoryInput.value;
        let taskContent = inputDOMSelectors.taskContentInput.value;

        if (taskTitle === '' || taskCategory === '' || taskContent === '') {
            alert('Must all inputs filled!');
            return;
        }

        const li = createElement('li', '', otherDOMSelectors.reviewList, null, ['rpost']);
        const article = createElement('article', '', li);
        createElement('h4', taskTitle, article);
        createElement('p', `Category: ${taskCategory}`, article);
        createElement('p', `Content: ${taskContent}`, article);
        const editBtn = createElement('button', 'Edit', li, null, ['action-btn', 'edit']);
        const postBtn = createElement('button', 'Post', li, null, ['action-btn', 'post']);

        editBtn.addEventListener('click', editTaskHandler);
        postBtn.addEventListener('click', postTaskHandler);

        for (const key in inputDOMSelectors) {
            taskState[key] = inputDOMSelectors[key].value;
        }

        clearInputs(inputDOMSelectors);
    }

    function postTaskHandler() {
        const taskReference = this.parentNode; // this is an object reference
        const editBtn = taskReference.querySelector('.edit');
        const postBtn = taskReference.querySelector('.post');

        otherDOMSelectors.publishedList.appendChild(taskReference);
        editBtn.remove();
        postBtn.remove();
    }

    function editTaskHandler() {
        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = taskState[key];
        }
        
        otherDOMSelectors.reviewList.innerHTML = '';
    }

    function clearInputs(inputs) {
        for (let inputName in inputs) {
            inputs[inputName].value = '';
        }
    }

    function createElement(type, content, parentElement, id, classes, attributes) {
        const htmlElement = document.createElement(type);
        
        if(content && type !== 'input'){
            htmlElement.textContent = content;
        }
        
        if(content && type === 'input'){
            htmlElement.value = content;
        }
    
        if(id){
            htmlElement.id = id;
        }
        
        if (classes){
            htmlElement.classList.add(...classes);
        }
        
        if (parentElement){
            parentElement.appendChild(htmlElement);
        }
        
        if (attributes){
            for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
            }
        } 
        return htmlElement;
    }
}