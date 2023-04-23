function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const tableBody = document.getElementById('tbody');
    const productInput = document.getElementById('product');
    const countInput = document.getElementById('count');
    const priceInput = document.getElementById('price');
    const loadAllProductsBtn = document.getElementById('load-product');
    const updateProductBtn = document.getElementById('update-product');
    const addProductBtn = document.getElementById('add-product');

    let productId = null;
    
    loadAllProductsBtn.addEventListener('click', loadAllProductsHandler);
    addProductBtn.addEventListener('click', addProductHandler);

    async function loadAllProductsHandler(event) {
        if (event) {
            event.preventDefault();
        }
        tableBody.innerHTML = '';

        try {
            const response = await fetch(BASE_URL);
            const allProductsData = await response.json();

            for (const key in allProductsData) {
                const { _id, price, count, product } = allProductsData[key];
                
                const tr = createElement('tr', '', tableBody, _id);
                const tdProductName = createElement('td', product, tr, null, ['name']);
                const tdProductCount = createElement('td', count, tr, null, ['count-product']);
                const tdProductPrice = createElement('td', price, tr, null, ['product-price']);
                const tdButtons = createElement('td', '', tr, null, ['btn']);
                const updateBtn = createElement('button', 'Update', tdButtons, null, ['update']);
                const deleteBtn = createElement('button', 'Delete', tdButtons, null, ['delete']);
                
                console.log(tableBody);
                deleteBtn.addEventListener('click', deleteProductHandler);
                updateBtn.addEventListener('click', updateProductPrepareHandler);
            };
        } catch (error) {
            console.log(error);
        }
    }

    async function addProductHandler(event) {
        event.preventDefault();
        const procuctName = productInput.value;
        const procuctCount = countInput.value;
        const procuctPrice = priceInput.value;
        const product = {
            product: procuctName,
            count: procuctCount,
            price: procuctPrice,
        };

        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                body: JSON.stringify(product)
            });
            getCleanInputValues(productInput, countInput, priceInput);
            loadAllProductsHandler();
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteProductHandler() {
        const id = this.parentElement.parentElement.id;
        const httpHeaders = {
            method: 'DELETE'
        };
        
        try {
            const response = await fetch(BASE_URL + id, httpHeaders);
            loadAllProductsHandler();
        } catch (error) {
            console.log(error);
        }
    }

    function updateProductPrepareHandler() {
        productId = this.parentElement.parentElement.id;

        const tableRow = this.parentElement.parentElement;
        const procuctName = tableRow.querySelector('.name');
        const procuctCount = tableRow.querySelector('.count-product');
        const procuctPrice = tableRow.querySelector('.product-price');

        productInput.value = procuctName.textContent;
        countInput.value = procuctCount.textContent;
        priceInput.value = procuctPrice.textContent;

        addProductBtn.disabled = true;
        // addProductBtn.setAttribute('disabled', true);
        updateProductBtn.disabled = false;
        // updateProductBtn.removeAttribute('disabled');
        updateProductBtn.addEventListener('click', updateProductHandler);

    }

    async function updateProductHandler() {  
        const id = productId;
        console.log(id);
        const productName = productInput.value;
        const productCount = countInput.value;
        const productPrice = priceInput.value;
        console.log(productName);
        const product = {
            product: productName,
            count: productCount,
            price: productPrice,
        };
        console.log(product);
        const headers = {
            method: 'PATCH',
            body: JSON.stringify(product)
        };

        try {
            const response = await fetch(BASE_URL + id, headers);
            updateProductBtn.setAttribute('disabled', true);
            addProductBtn.removeAttribute('disabled');
            getCleanInputValues(productInput, countInput, priceInput);
            await loadAllProductsHandler();
        } catch (error) {
            console.log(error);
        }
    }

    function getCleanInputValues(productInput, countInput, priceInput) {
        return {
            product: productInput.value = '',
            count: countInput.value = '',
            price: priceInput.value = ''
        };
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
    
        //{ src: 'link to img', href: 'link to site' }
        if (attributes){
        for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
        }
        } 
        return htmlElement;
    }
}

attachEvents();