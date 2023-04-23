window.addEventListener('load', solve);

function solve() {
    const genreInputElment = document.getElementById('genre');
    const nameInputElment = document.getElementById('name');
    const authorInputElment = document.getElementById('author');
    const dateInputElment = document.getElementById('date');
    const addBtnInputElment = document.getElementById('add-btn');
    const totalLikesParagraphElement = document.getElementsByClassName('likes')[0].firstElementChild;
    const allHitsDivContainerElement = document.getElementsByClassName('all-hits-container')[0];
    const savedDivContainerElement = document.getElementsByClassName('saved-container')[0];

    addBtnInputElment.addEventListener('click', onPublish);
    function onPublish(e) {
        e.preventDefault();
        if (genreInputElment.value == '' || nameInputElment.value == '' || authorInputElment.value == '' || dateInputElment.value == '') {
            return;
        }

        let collectionDivElement = document.createElement('div');
        collectionDivElement.setAttribute('class', 'hits-info');
    
        let imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';
    
        let genreH2Element = document.createElement('h2');
        genreH2Element.textContent = `Genre: ${genreInputElment.value}`;
    
        let nameH2Element = document.createElement('h2');
        nameH2Element.textContent = `Name: ${nameInputElment.value}`;
    
        let authorH2Element = document.createElement('h2');
        authorH2Element.textContent = `Author: ${authorInputElment.value}`;
    
        let dateH3Element = document.createElement('h3');
        dateH3Element.textContent = `Date: ${dateInputElment.value}`;
    
    
        let saveBtnElement = document.createElement('button');
        saveBtnElement.setAttribute('class', 'save-btn');
        saveBtnElement.textContent = 'Save song';
    
        let likeBtnElement = document.createElement('button');
        likeBtnElement.setAttribute('class', 'like-btn');
        likeBtnElement.textContent = 'Like song';
    
        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.setAttribute('class', 'delete-btn');
        deleteBtnElement.textContent = 'Delete';
    
        collectionDivElement.appendChild(imgElement);
        collectionDivElement.appendChild(genreH2Element);
        collectionDivElement.appendChild(nameH2Element);
        collectionDivElement.appendChild(authorH2Element);
        collectionDivElement.appendChild(dateH3Element);
        collectionDivElement.appendChild(saveBtnElement);
        collectionDivElement.appendChild(likeBtnElement);
        collectionDivElement.appendChild(deleteBtnElement);
    
        allHitsDivContainerElement.appendChild(collectionDivElement);
    
        let savedDivElement = document.createElement('div');
        savedDivElement.setAttribute('class', 'hits-info');
        let savedImgElement = imgElement;
        let savedGenreH2Element = genreH2Element;
        let savedNameH2Element = nameH2Element;
        let savedAuthorH2Element = authorH2Element;
        let savedDateH3Element = dateH3Element;
        let savedDeleteBtnElement = deleteBtnElement;
    
        genreInputElment.value = '';
        nameInputElment.value = '';
        authorInputElment.value = '';
        dateInputElment.value = '';

        saveBtnElement.addEventListener('click', onSave);
        function onSave() {
            collectionDivElement.remove();

            savedDivElement.appendChild(savedImgElement);
            savedDivElement.appendChild(savedGenreH2Element);
            savedDivElement.appendChild(savedNameH2Element);
            savedDivElement.appendChild(savedAuthorH2Element);
            savedDivElement.appendChild(savedDateH3Element);
            savedDivElement.appendChild(savedDeleteBtnElement);

            savedDivContainerElement.appendChild(savedDivElement);
        }
    
        likeBtnElement.addEventListener('click', onEdit);
        function onEdit() {
            let textAndNumber = totalLikesParagraphElement.innerText;
            let [ _text, number ] = textAndNumber.split(': ');
            number = Number(number);

            let num = number + 1;
            totalLikesParagraphElement.textContent = `Total Likes: ${num}`;
            likeBtnElement.disabled = true;
        }
    
        deleteBtnElement.addEventListener('click', onDelete);
        function onDelete(event) {
            const currentDivElement = event.currentTarget.parentElement;

            if (currentDivElement.parentElement.className === 'saved-container') {
                savedDivElement.remove();
            } else {
                collectionDivElement.remove();
            }
        }
    }
}