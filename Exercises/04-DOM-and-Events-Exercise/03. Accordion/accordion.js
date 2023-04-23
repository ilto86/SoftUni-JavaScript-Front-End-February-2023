function toggle() {
    let spanBtnElement = document.getElementsByClassName('button')[0];
    let divExtraElement = document.getElementById('extra');
    
    if (spanBtnElement.textContent === 'More') {
        spanBtnElement.textContent = 'Less';
        divExtraElement.style.display = 'block';
    } else {
        spanBtnElement.textContent = 'More';
        divExtraElement.style.display = 'none';
    }
}