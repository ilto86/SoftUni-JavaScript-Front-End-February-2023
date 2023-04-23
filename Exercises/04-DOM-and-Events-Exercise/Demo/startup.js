const button = document.getElementsByTagName('button')[0];
const result = document.getElementById('result');

result.classList.add('text', 'typography');
// button.addEventListener('click', handleClick);

button.addEventListener('click', toggle);

// function handleClick(event) {
//     result.style.display = 'block';
// }

function toggle(event) {
    console.log(event.target.parentNode.style.backgroundColor = 'navy');
    if (result.style.display === 'none') {
        result.style.display = 'block';
        button.textContent = 'Hide Me!';
    } else {
        result.style.display = 'none';
        button.textContent = 'Click Me!';
    }
}