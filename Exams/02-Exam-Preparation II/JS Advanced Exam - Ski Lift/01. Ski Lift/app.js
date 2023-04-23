window.addEventListener('load', solve);

function solve() {
    const formInputsElements = {
        firstNameInput: document.getElementById('first-name'),
        lastNameInput: document.getElementById('last-name'),
        peopleCountInput: document.getElementById('people-count'),
        fromDateInput: document.getElementById('from-date'),
        daysCountInput: document.getElementById('days-count'),
    };

    const otherContainersElments = {
        nextStepBtn: document.getElementById('next-btn'),
        ticketInfoUl: document.querySelector('.ticket-info-list'),
        confirmTicketUl: document.querySelector('.confirm-ticket'),
        bodyElementBody: document.getElementById('body'),
        divElementMain: document.getElementById('main'),
        
    };

    let editItems = {};

    otherContainersElments.nextStepBtn.addEventListener('click', inputHandler);

    function inputHandler(e) {
        e.preventDefault();
        let allFieldsAreValid = Object.values(formInputsElements)
        .every((input) => input.value !== '');
        
        if (!allFieldsAreValid) {
            return;
        }

        const { firstNameInput, lastNameInput, peopleCountInput, fromDateInput, daysCountInput } = formInputsElements;
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let peoplesCount = peopleCountInput.value;
        let fromDate = fromDateInput.value;
        let daysCount = daysCountInput.value;

        editItems = {
            firstNameInput: firstName,
            lastNameInput: lastName,
            peopleCountInput: peoplesCount,
            fromDateInput: fromDate,
            daysCountInput: daysCount
        };

        const li = createElement('li', '', otherContainersElments.ticketInfoUl, null, ['ticket']);
        const article = createElement('article', '', li);
        createElement('h3', `Name: ${firstName} ${lastName}`, article);
        createElement('p', `From date: ${fromDate}`, article);
        createElement('p', `For ${daysCount} days`, article);
        createElement('p', `For ${peoplesCount} people`, article);
        const editBtn = createElement('button', 'Edit', li, null, ['edit-btn']);
        const continueBtn = createElement('button', 'Continue', li, null, ['continue-btn']);

        editBtn.addEventListener('click', editTicketHandler);
        continueBtn.addEventListener('click', continueTicketHandler);

        otherContainersElments.nextStepBtn.disabled = true;

        getCleanInputValues(
            formInputsElements.firstNameInput, formInputsElements.lastNameInput,
            formInputsElements.peopleCountInput, formInputsElements.fromDateInput,
            formInputsElements.daysCountInput
        );
        
    }

    function editTicketHandler() {
        this.parentNode.remove();
        for (const key in editItems) {
            formInputsElements[key].value = editItems[key];
        }
        otherContainersElments.nextStepBtn.removeAttribute('disabled');
    }
    function continueTicketHandler() {
        console.log(otherContainersElments.confirmTicketUl);
        const li = this.parentNode;
        li.className += '-content';
        const editBtn = li.querySelector('.edit-btn');
        const continueBtn = li.querySelector('.continue-btn');
        const confirmBtn = createElement('button', 'Confirm', li, null, ['confirm-btn']);
        const cancelBtn = createElement('button', 'Cancel', li, null, ['cancel-btn']);
        cancelBtn.addEventListener('click', cancelTicketHandler);
        confirmBtn.addEventListener('click', confirmTicketHandler);
        otherContainersElments.confirmTicketUl.appendChild(li);
        otherContainersElments.ticketInfoUl.remove();
        editBtn.remove();
        continueBtn.remove();
    }

    function cancelTicketHandler() {
        this.parentNode.remove();
        otherContainersElments.nextStepBtn.removeAttribute('disabled');
    }

    function confirmTicketHandler() {
        otherContainersElments.divElementMain.remove();
        createElement('h1', 'Thank you, have a nice day!', otherContainersElments.bodyElementBody, 'thank-you');
        const backBtn = createElement('button', 'Back', otherContainersElments.bodyElementBody, 'back-btn');
        backBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    function getCleanInputValues(firstName, lastName, peoplesCount, fromDate,  daysCount) {
        return {
        firstName: firstName.value = '',
        lastName: lastName.value = '',
        peoplesCount: peoplesCount.value = '',
        fromDate: fromDate.value = '',
        daysCount: daysCount.value = '',
        };
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