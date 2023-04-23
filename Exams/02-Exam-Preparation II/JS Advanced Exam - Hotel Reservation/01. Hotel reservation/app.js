window.addEventListener('load', solve);

function solve() {
    const formInputsElements = {
        firstNameInput: document.getElementById('first-name'),
        lastNameInput: document.getElementById('last-name'),
        checkInInput: document.getElementById('date-in'),
        checkOutInput: document.getElementById('date-out'),
        guestsCountInput: document.getElementById('people-count'),
    };

    const otherContainersElments = {
        nextBtn: document.getElementById('next-btn'),
        infoReservationUl: document.querySelector('.info-list'),
        confirmReservationUl: document.querySelector('.confirm-list'),
        reservationElementH1: document.getElementById('verification'),
    };

    let editItems = {};

    otherContainersElments.nextBtn.addEventListener('click', inputHandler);

    function inputHandler(e) {
        e.preventDefault();
        let allFieldsAreValid = Object.values(formInputsElements)
        .every((input) => input.value !== '');
        
        if (!allFieldsAreValid) {
            return;
        }

        const { firstNameInput, lastNameInput, checkInInput, checkOutInput, guestsCountInput } = formInputsElements;
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let checkIn = checkInInput.value;
        let checkOut = checkOutInput.value;
        let guestsCount = guestsCountInput.value;

        editItems = {
            firstNameInput: firstName,
            lastNameInput: lastName,
            checkInInput: checkIn,
            checkOutInput: checkOut,
            guestsCountInput: guestsCount
        };

        const li = createElement('li', '', otherContainersElments.infoReservationUl, null, ['reservation-content']);
        const article = createElement('article', '', li);
        createElement('h3', `Name: ${firstName} ${lastName}`, article);
        createElement('p', `From date: ${checkIn}`, article);
        createElement('p', `To date: ${checkOut}`, article);
        createElement('p', `For ${guestsCount} people`, article);
        const editBtn = createElement('button', 'Edit', li, null, ['edit-btn']);
        const continueBtn = createElement('button', 'Continue', li, null, ['continue-btn']);

        editBtn.addEventListener('click', editReservationHandler);
        continueBtn.addEventListener('click', continueReservationHandler);

        otherContainersElments.nextBtn.disabled = true;

        getCleanInputValues(
            formInputsElements.firstNameInput, formInputsElements.lastNameInput,
            formInputsElements.checkInInput, formInputsElements.checkOutInput,
            formInputsElements.guestsCountInput
        );
    }

    function editReservationHandler() {
        this.parentNode.remove();
        for (const key in editItems) {
            formInputsElements[key].value = editItems[key];
        }
        otherContainersElments.nextBtn.removeAttribute('disabled');
    }
    function continueReservationHandler() {
        console.log(otherContainersElments.confirmReservationUl);
        const li = this.parentNode;
        const editBtn = li.querySelector('.edit-btn');
        const continueBtn = li.querySelector('.continue-btn');
        const confirmBtn = createElement('button', 'Confirm', li, null, ['confirm-btn']);
        const cancelBtn = createElement('button', 'Cancel', li, null, ['cancel-btn']);
        cancelBtn.addEventListener('click', cancelReservationHandler);
        confirmBtn.addEventListener('click', confirmReservationHandler);
        otherContainersElments.confirmReservationUl.appendChild(li);
        otherContainersElments.infoReservationUl.remove();
        editBtn.remove();
        continueBtn.remove();
    }

    function cancelReservationHandler() {
        otherContainersElments.confirmReservationUl.remove();
        otherContainersElments.reservationElementH1.className = 'reservation-cancelled';
        otherContainersElments.reservationElementH1.textContent = 'Cancelled.';
        otherContainersElments.nextBtn.removeAttribute('disabled');
    }

    function confirmReservationHandler() {
        otherContainersElments.confirmReservationUl.remove();
        otherContainersElments.reservationElementH1.className = 'reservation-confirmed';
        otherContainersElments.reservationElementH1.textContent = 'Confirmed.';
        otherContainersElments.nextBtn.removeAttribute('disabled');
    }


    function getCleanInputValues(firstName, lastName, checkIn, checkOut,  guestsCount) {
        return {
        firstName: firstName.value = '',
        lastName: lastName.value = '',
        checkIn: checkIn.value = '',
        checkOut: checkOut.value = '',
        guestsCount: guestsCount.value = '',
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