function focused() {
    const inputElement = Array.from(document.getElementsByTagName('input'));

    for (const el of inputElement) {
        el.addEventListener('focus', focusEventHandler);
        el.addEventListener('blur', blurEventHandler);
    }

        function focusEventHandler(event) {
            let inputForm = event.target;
            let divContainer = inputForm.parentElement;
            divContainer.className = 'focused';
        }

        function blurEventHandler(event) {
            let inputForm = event.target;
            let divContainer = inputForm.parentElement;
            divContainer.className = '';
        }
}