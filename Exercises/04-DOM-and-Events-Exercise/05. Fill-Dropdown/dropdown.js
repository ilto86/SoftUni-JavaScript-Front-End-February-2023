function addItem() {
    const select = document.getElementById('menu');
    const newItemTextInput = document.getElementById('newItemText');
    const newItemValueInput = document.getElementById('newItemValue');

    // select.addEventListener('input', (event) => {
    //     console.log(event.currentTarget);
    // });
    
    const newItemTextValue = newItemTextInput.value;
    const newItemValue = newItemValueInput.value;

    const option = document.createElement('option');
    option.textContent = newItemTextValue;
    option.value = newItemValue;
    select.appendChild(option);
    
    // // That's don't work
    // newItemTextValue = '';
    // newItemValue = '';

    // That's work
    newItemTextInput.value = '';
    newItemValueInput.value = '';
}