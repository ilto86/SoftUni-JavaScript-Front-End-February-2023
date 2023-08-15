// function attachGradientEvents() {
//     const gradient = document.getElementById('gradient');
//     const output = document.getElementById('result');
//     gradient.addEventListener('mousemove', detectMousePosition);
//     gradient.addEventListener('mouseout', hideInfo);
//
//     function detectMousePosition(e) {
//         const sizeX = gradient.clientWidth;
//         let mousePositionX = e.offsetX;
//         let positionInPercent = Math.floor(mousePositionX * 100 / sizeX);
//         output.textContent = `${positionInPercent}%`;
//     }
//
//     function hideInfo() {
//         output.textContent = '';
//     }
// }
//
// attachGradientEvents();




function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const colorSelect = document.getElementById('color-select');
    const gradientBox = document.getElementById('gradient-box');
    const output = document.getElementById('result');

    gradient.addEventListener('mousemove', detectMousePosition);
    gradient.addEventListener('mouseout', hideInfo);
    colorSelect.addEventListener('change', applySelectedColor);

    function detectMousePosition(e) {
        const sizeX = gradient.clientWidth;
        let mousePositionX = e.offsetX;
        let positionInPercent = Math.floor((mousePositionX * 100) / sizeX);
        output.textContent = `${positionInPercent}%`;

        // Set border color of gradient-box to selected color
        gradientBox.style.borderColor = colorSelect.value;

        // Set text color of result to selected color
        output.style.color = colorSelect.value;
    }

    function hideInfo() {
        output.textContent = '';
        // Reset border color of gradient-box when mouse leaves
        gradientBox.style.borderColor = 'lightgrey';
    }

    function applySelectedColor() {
        const selectedColor = colorSelect.value;
        gradient.style.setProperty('--selected-color', selectedColor);
    }
}

attachGradientEvents();

