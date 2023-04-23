window.addEventListener('load', solve);

function solve() {
    const inputDOMSelectors = {
        titleInput: document.getElementById('title'),
        descriptionInput: document.getElementById('description'),
        labelInput: document.getElementById('label'),
        pointsInput: document.getElementById('points'),
        assigneeInput: document.getElementById('assignee')
    };

    const otherDOMSelectors = {
        createTaskBtn: document.getElementById('create-task-btn'),
        deleteTaskBtn: document.getElementById('delete-task-btn'),
        totalPointsParagraph: document.getElementById('total-sprint-points'),
        tasksSection: document.getElementById('tasks-section'),
        taskId: document.getElementById('task-id')
    };

    let idCounter = 1;
    let totalPoints = null;

    const labelIcons = {
        'Feature': '&#8865',
        'Low Priority Bug': '&#9737',
        'High Priority Bug': '&#9888'
    };

    const labelStatus = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    };

    
    otherDOMSelectors.createTaskBtn.addEventListener('click', createTaskHandler);

    function createTaskHandler(event) {
        event.preventDefault();

        let title = inputDOMSelectors.titleInput.value;
        let description = inputDOMSelectors.descriptionInput.value;
        let label = inputDOMSelectors.labelInput.value;
        let points = inputDOMSelectors.pointsInput.value;
        let assignee = inputDOMSelectors.assigneeInput.value;

        if (title === '' || description === '' || label === '' || points === '' || assignee === '') {
            alert('Must all inputs filled!');
            return;
        }

        let statusClass = labelStatus[label];
        let statusIcon = labelIcons[label];

        totalPoints += Number(points);
        otherDOMSelectors.totalPointsParagraph.textContent = `Total Points ${totalPoints}pts`;

        const article = createElement('article', '', otherDOMSelectors.tasksSection, `task-${idCounter}`, ['task-card']);
        
        const divTaskCardLabel = createElement('div', '', article, null, ['task-card-label', `${statusClass}`]);
        divTaskCardLabel.innerHTML = `${label} ${statusIcon}`;
        createElement('h3', title, article, null, ['task-card-title']);
        createElement('p', description, article, null, ['task-card-description']);
        createElement('div', `Estimated at ${points} pts`, article, null, ['task-card-points']);
        createElement('div', `Assigned to: ${assignee}`, article, null, ['task-card-assignee']);
        const actionBtn = createElement('div', '', article, null, ['task-card-actions']);
        const deleteBtn = createElement('button', 'Delete', actionBtn);
        
        idCounter += 1;

        clearInputs(inputDOMSelectors);
    
        deleteBtn.addEventListener('click', deleteBtnHandler);
    }


    function deleteBtnHandler() {
        const taskToDelete = this.parentElement.parentElement;

        let statusLabel = taskToDelete.querySelector('.task-card-label');
        let title = taskToDelete.querySelector('.task-card-title').textContent;
        let description = taskToDelete.querySelector('.task-card-description').textContent;
        let label = statusLabel.textContent.slice(0, -2);

        otherDOMSelectors.taskId.value = taskToDelete.id.split('-')[1];

        let estimatedPoints = taskToDelete.querySelector('.task-card-points').textContent;
        let points = Number(estimatedPoints.split(' ')[2]);

        let assignedTo = taskToDelete.querySelector('.task-card-assignee').textContent;
        let assignee = assignedTo.split(' ').splice(2, 2).join(' ');

        inputDOMSelectors.titleInput.value = title;
        inputDOMSelectors.descriptionInput.value = description;
        inputDOMSelectors.labelInput.value = label;
        inputDOMSelectors.pointsInput.value = points;
        inputDOMSelectors.assigneeInput.value = assignee;

        disabledInputs({
            'titleInput': inputDOMSelectors.titleInput,
            'descriptionInput': inputDOMSelectors.descriptionInput,
            'labelInput': inputDOMSelectors.labelInput,
            'pointsInput': inputDOMSelectors.pointsInput,
            'assigneeInput': inputDOMSelectors.assigneeInput,
        }, true);

        disabledInputs({'deleteTaskBtn': otherDOMSelectors.deleteTaskBtn}, false);
        disabledInputs({'createTaskBtn': otherDOMSelectors.createTaskBtn,}, true);

        otherDOMSelectors.deleteTaskBtn.addEventListener('click',  () => {
            taskToDelete.remove();

            let subtractPoints = inputDOMSelectors.pointsInput.value;
            totalPoints -= Number(subtractPoints);
            otherDOMSelectors.totalPointsParagraph.textContent = `Total Points ${totalPoints}pts`;

            clearInputs(inputDOMSelectors);

            disabledInputs({
                'titleInput': inputDOMSelectors.titleInput,
                'descriptionInput': inputDOMSelectors.descriptionInput,
                'labelInput': inputDOMSelectors.labelInput,
                'pointsInput': inputDOMSelectors.pointsInput,
                'assigneeInput': inputDOMSelectors.assigneeInput,
            }, false);

            disabledInputs({'deleteTaskBtn': otherDOMSelectors.deleteTaskBtn}, true);
            disabledInputs({'createTaskBtn': otherDOMSelectors.createTaskBtn,}, false);
        });
    }

    function clearInputs(inputs) {
        for (let inputName in inputs) {
            inputs[inputName].value = '';
        }
    }

    function disabledInputs(inputs, isDisabled) {
        for (const input of Object.values(inputs)) {
            input.disabled = isDisabled;
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