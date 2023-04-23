const htmlElement = document.getElementsByTagName('html')[0];
console.log(htmlElement.innerHTML);


// // First with TagName only
// const inputElement = document.getElementsByTagName('input');
// console.log(`This is only inputElement with ByTagName => ${inputElement}`);
// // HTMLCollection [input#text-input, text-input: input#text-input] or [object HTMLCollection]

// console.log(`This is with inputElement.value => ${inputElement.value}`);
// // undefined


// // Second with TagName and first element
// const firstInputElement = document.getElementsByTagName('input')[0]; 
// console.log(`This is firstInputElement with ByTagName and [0] => ${firstInputElement}`);
// // <input id="text-input" type="text" value="This is what we are give in input forms"> or [object HTMLInputElement]

// console.log(`This is with firstInputElement.value => ${firstInputElement.value}`);
// // This is what we are give in input forms


// // Third with Id only
// const textInputElement = document.getElementById('text-input');
// console.log(`This is only textInputElement with ByID => ${textInputElement}`);
// // <input id="text-input" type="text" value="This is what we are give in input forms"> or [object HTMLInputElement]

// console.log(`This is with textInputElement.value => ${textInputElement.value}`);
// // This is what we are give in input forms





const liElements = document.getElementsByTagName('li');

// const thirdLi = liElements[2];
// thirdLi.textContent += ' This is a DOM Manipulation';
// thirdLi.style.color = 'red';
// console.log(liElements);
// console.log(thirdLi);

let count = 0;
for (const li of liElements) {
    count ++;
    // console.dir(li); // all references/HTML Attributes
    // console.log(li.getAttribute('id')); // one two three
    // console.dir(li.id); // one two three
    // li.setAttribute('class', 'list-item');  // add class="list-item" to every li Tag

    li.textContent += ` ${count}: Dom Manipulation`;  // concatenate to every li Tag this text " count: Dom Manipulation"
    console.log(`This is with li.InnerHTML => ${li.innerHTML}`);
    console.log(`This is with li.textContent => ${li.textContent}`);
    console.log(`This is with li.innerText => ${li.innerText}`);
    
    li.style.color = 'darkblue';
    console.log(`This is with li.style.color => ${li.style.color}`);
    
    console.log(`This is with li.value => ${li.value}`);
    
    li.textContent = `${count}: Changed`;
    console.log(`This is only li Tag => ${li}`);  // This is only li Tag => [object HTMLLIElement]

    li.innerHTML += `<p>${count}: Custom Paragraph</p>`; // added to every 'li Tag' this 'p Tag' with text "count: Custom Paragraph"
    li.children[0].style.backgroundColor = 'red'; // make every "p tag" background-color: red
}

// liElements.one.children[0].style.backgroundColor = 'red'; // make first "li tag" with id="one" children "p tag" background-color on red
