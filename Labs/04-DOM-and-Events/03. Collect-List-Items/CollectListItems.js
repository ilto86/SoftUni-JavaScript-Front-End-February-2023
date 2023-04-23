function extractText() {
    const liElements = Array.from(document.querySelectorAll('#items > li'));
    const result = document.getElementById('result');
    console.log(liElements);

    liElements.forEach((li) => {
        console.log(li);
        result.textContent += li.textContent + '\n';
    });
}