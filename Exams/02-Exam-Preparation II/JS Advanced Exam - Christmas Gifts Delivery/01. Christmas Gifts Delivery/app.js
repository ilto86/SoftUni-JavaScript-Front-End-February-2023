function solution() {
    const inputDOMSelectors = {
        giftInput: document.querySelector('input'),
    };

    const otherDOMSelectors = {
        addgiftBtn: document.querySelector('button'),
        cardSections: document.querySelectorAll('.card')
    };

    const listOfGifts = otherDOMSelectors.cardSections[1].querySelector('ul');
    const sentGifts = otherDOMSelectors.cardSections[2].querySelector('ul');
    const discardedGifts = otherDOMSelectors.cardSections[3].querySelector('ul');

    otherDOMSelectors.addgiftBtn.addEventListener('click', addGiftsHandler);

    function addGiftsHandler() {
        let gift = inputDOMSelectors.giftInput.value;

        if (gift === '') {
            alert('Must all inputs filled!');
            return;
        }

        const newGift = createElement('li', gift, listOfGifts, null, ['gift']);
        const sendBtn = createElement('button', 'Send', newGift, 'sendButton');
        const discardBtn = createElement('button', 'Discard', newGift, 'discardButton');

        sendBtn.addEventListener('click', sentGiftsHandler);
        discardBtn.addEventListener('click', discardedGiftsHandler);
        
        clearInputs(inputDOMSelectors);
        
        const gifts = Array.from(listOfGifts.querySelectorAll('.gift'));
        gifts.sort((a, b) => a.textContent.localeCompare(b.textContent));

        listOfGifts.innerHTML = '';

        gifts.forEach(gift => listOfGifts.appendChild(gift));
    }

    function sentGiftsHandler() {
        const fromListOfGiftsToSentGifts = this.parentElement;
        sentGifts.appendChild(fromListOfGiftsToSentGifts);

        const buttons = Object.values(this.parentElement.querySelectorAll('button'));
        buttons.forEach(button => button.remove());
    }

    function discardedGiftsHandler() {
        const fromListOfGiftsToDiscardedGifts = this.parentNode;
        discardedGifts.appendChild(fromListOfGiftsToDiscardedGifts);

        const buttons = Array.from(this.parentNode.querySelectorAll('button'));
        buttons.forEach(button => button.remove());
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