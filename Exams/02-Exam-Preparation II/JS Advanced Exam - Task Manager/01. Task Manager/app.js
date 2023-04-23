function solve() {
    const inputDOMSelectors = {
        taskInput: document.getElementById('task'),
        descriptionInput: document.getElementById('description'),
        dateInput: document.getElementById('date'),
    };

    const otherDOMSelectors = {
        addTaskBtn: document.getElementById('add'),
        openSection: document.querySelector('.orange'),
        // inProgressSection: document.querySelector('.yellow'),
        inProgressSection: document.getElementById('in-progress'),
        completeSection: document.querySelector('.green'),
    };

    otherDOMSelectors.addTaskBtn.addEventListener('click', createTaskHandler);

    function createTaskHandler(event) {
        event.preventDefault();

        let task = inputDOMSelectors.taskInput.value;
        let description = inputDOMSelectors.descriptionInput.value;
        let date = inputDOMSelectors.dateInput.value;

        if (task === '' || description === '' || date === '') {
            alert('Must all inputs filled!');
            return;
        }

        const divOpenSection = otherDOMSelectors.openSection.parentElement.nextElementSibling;
        
        const articleTask = createElement('article', '', divOpenSection);
        createElement('h3', task, articleTask);
        createElement('p', `Description: ${description}`, articleTask);
        createElement('p', `Due Date: ${date}`, articleTask);
        const divButtons = createElement('div', '', articleTask, null, ['flex']);
        const startBtn = createElement('button', 'Start', divButtons, null, ['green']);
        const deleteBtn = createElement('button', 'Delete', divButtons, null, ['red']);

        clearInputs(inputDOMSelectors);

        startBtn.addEventListener('click', inProgressHandler);
        deleteBtn.addEventListener('click', deleteTaskHandler);
    }

    function deleteTaskHandler() {
        this.parentNode.parentNode.remove();
    }

    function inProgressHandler() {
        const articelSection = this.parentElement.parentElement;
        const divButtons = articelSection.querySelector('.flex');
        const finishmBtn = createElement('button', 'Finish', divButtons, null, ['orange']);
        
        finishmBtn.addEventListener('click', completeTaskHandler);
        otherDOMSelectors.inProgressSection.appendChild(articelSection);
        this.remove();
    }

    function completeTaskHandler() {
        const divcompleteSection = this.parentElement.parentElement;
        const divButtons = this.parentElement;
        divButtons.remove();
        const completeSection = otherDOMSelectors.completeSection.parentElement.nextElementSibling;
        completeSection.appendChild(divcompleteSection);
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
        
        //{ src: 'link to img', href: 'link to site' }
        if (attributes){
            for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
            }
        } 
        return htmlElement;
    }
}