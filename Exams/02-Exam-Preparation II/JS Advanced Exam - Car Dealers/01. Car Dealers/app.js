window.addEventListener('load', solve);

function solve() {
  const makeInput = document.getElementById('make');
  const modelInput = document.getElementById('model');
  const productionYearInput = document.getElementById('year');
  const fuelTypeInput = document.getElementById('fuel');
  const originalPriceInput = document.getElementById('original-cost');
  const sellingPriceInput = document.getElementById('selling-price');
  const tableBody = document.getElementById('table-body');
  const carList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');

  let totalProfit = 0;

  const publishBtn = document.getElementById('publish');

  publishBtn.addEventListener('click', publishCarHandler);

  function publishCarHandler(event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = productionYearInput.value;
    let fuelType = fuelTypeInput.value;
    let originalPrice = Number(originalPriceInput.value);
    let sellingPrice = Number(sellingPriceInput.value);

    if (originalPrice > sellingPrice
      || make === ''
      || model === ''
      || year === ''
      || fuelType === ''
      || originalPrice === ''
      || sellingPrice === '') {
      alert('Must all inputs fill or original price is bigger than selling price!');
      return;
    }

    const tr = createElement('tr', '', tableBody, '', ['row']);
    createElement('td', make, tr);
    createElement('td', model, tr);
    createElement('td', year, tr);
    createElement('td', fuelType, tr);
    createElement('td', originalPrice, tr);
    createElement('td', sellingPrice, tr);
    const buttons = createElement('td', '', tr);

    const editBtn = createElement('button', 'Edit', buttons, '', ['action-btn', 'edit']);
    const sellBtn = createElement('button', 'Sell', buttons, '', ['action-btn', 'sell']);

    makeInput.value = '';
    modelInput.value = '';
    productionYearInput.value = '';
    fuelTypeInput.value = '';
    originalPriceInput.value = '';
    sellingPriceInput.value = '';

    editBtn.addEventListener('click', editCarHandler);
    sellBtn.addEventListener('click', sellCarHandler);

    function editCarHandler() {
      makeInput.value = make;
      modelInput.value = model;
      productionYearInput.value = year;
      fuelTypeInput.value = fuelType;
      originalPriceInput.value = originalPrice;
      sellingPriceInput.value = sellingPrice;

      tr.remove();
    }

    function sellCarHandler() {
      const li = createElement('li', '', carList, '', ['each-list']);
      createElement('span', `${make} ${model}`, li);
      createElement('span', year, li);
      createElement('span', `${sellingPrice - originalPrice}`, li);
      totalProfit += (sellingPrice - originalPrice);
      
      profit.textContent = totalProfit.toFixed(2);

      tr.remove();
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
  
    //{ src: 'link to img', href: 'link to site' }
    if (attributes){
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]); 
      }
    } 
    return htmlElement;
  }
}