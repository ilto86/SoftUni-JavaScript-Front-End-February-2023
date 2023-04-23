function deleteByEmail() {
    const result = document.getElementById('result');
    const input = document.querySelector('input[name="email"]');
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(even)'));

    let emailValue = input.value;
    let foundElement = evenTds.find((td) => td.textContent === emailValue);
    if (foundElement) {
        foundElement.parentNode.remove();
        // foundElement.parentElement.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}

// Notes:
    // let email = emailElement.value;
    // console.log(emailElement);
    // console.log(email);

// // Applies for NodeList and HTMLCollecion
    // for (const tdElement of emailCellElements) {
    //     // console.log(tdElement.textContent);
    // }

// // Applies only for NodeList
    // emailCellElements.forEach(0);

// // The old way of deleting
    // targetElement.parentNode.removeChild(targetElement);

