function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const inputDOMSelectors = {
        title: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name')
    };
    
    const otherDOMSelectors = {
        loadBtn: document.getElementById('load-course'),
        addBtn: document.getElementById('add-course'),
        editBtn: document.getElementById('edit-course'),
        divList: document.getElementById('list')
    };

    let currentCourse = [];
    let courseToEdit = {};
    const chooseType = ['Long', 'Medium', 'Short'];

    
    otherDOMSelectors.loadBtn.addEventListener('click', loadAllCoursesHandler);
    otherDOMSelectors.addBtn.addEventListener('click', addCourseHandler);
    otherDOMSelectors.editBtn.addEventListener('click', editCourseHandler);

    function loadAllCoursesHandler() {
        otherDOMSelectors.divList.innerHTML = '';
        fetch(BASE_URL)
        .then((res) => res.json())
        .then((allCoursesRes) => {
            currentCourse = Object.values(allCoursesRes);
            for (const { title, type, description, teacher, _id } of currentCourse) {
                const div = createElement('div', '', otherDOMSelectors.divList, null, ['container']);
                div.id = _id;
                console.log(currentCourse);
                createElement('h2', title, div);
                createElement('h3', teacher, div);
                createElement('h3', type, div);
                createElement('h4', description, div);
                const editBtn = createElement('button', 'Edit Course', div, null, ['edit-btn']);
                const finishBtn = createElement('button', 'Finish Course', div, null, ['finish-btn']);
                editBtn.addEventListener('click', loadEditFormHandler);
                finishBtn.addEventListener('click', finishCourseHandler);
            }
        });
    }

    function loadEditFormHandler() {
        const id = this.parentElement.id;
        courseToEdit = currentCourse.find((c) => c._id === id);

        for (const key in inputDOMSelectors) {
            inputDOMSelectors[key].value = courseToEdit[key];
        }
        otherDOMSelectors.addBtn.setAttribute('disabled', true);
        otherDOMSelectors.editBtn.removeAttribute('disabled');
    }

    
    function editCourseHandler(event) {
        event.preventDefault();
        const { title, type, description, teacher } = inputDOMSelectors;
        const payload = JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value,
        });
        const httpHeaders = {
            method: 'PUT',
            body: payload
        };
    
        fetch(`${BASE_URL}${courseToEdit._id}`, httpHeaders)
        .then(() => {
            loadAllCoursesHandler();
            otherDOMSelectors.addBtn.removeAttribute('disabled');
            otherDOMSelectors.editBtn.setAttribute('disabled', true);
            clearInputs(inputDOMSelectors);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    function finishCourseHandler() {
        const id = this.parentElement.id;
        const httpHeaders = {
            method: 'DELETE'
        };
    
        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllCoursesHandler())
        .catch((err) => {
            console.error(err);
        });
    }

    function addCourseHandler(event) {
        event.preventDefault();
        const { title, type, description, teacher } = inputDOMSelectors;
        if (title === '' || type === '' || description === '' || teacher === '') {
            return;
        }

        if (chooseType.includes(type.value)) {
            const payload = JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value,
            });
            const httpHeaders = {
                method: 'POST',
                body: payload
            };
        
            fetch(BASE_URL, httpHeaders).then(() => {
                loadAllCoursesHandler();
                clearInputs(inputDOMSelectors);
            })
            .catch((err) => {
                console.error(err);
            });
        }
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
        
        if (attributes){
            for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
            }
        } 
        return htmlElement;
    }
}

solve();