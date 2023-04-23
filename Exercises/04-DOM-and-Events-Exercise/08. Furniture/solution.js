function solve() {
  // const table = document.getElementsByTagName('tbody');
  const tbody = document.querySelector('.table > tbody');

  // const generateTextAreaElement = document.querySelector('#exercise > textarea:nth-child(2)');
  const [ generateTextArea, buyTextArea ] = Array.from(document.getElementsByTagName('textarea'));

  // const generateButtonElement = document.querySelector('#exercise > button:nth-child(3)');
  const [ generateButton, buyButton ] = Array.from(document.getElementsByTagName('button'));

  generateButton.addEventListener('click', generateHandler);
  buyButton.addEventListener('click', buyHandler);
  
  function generateHandler(e) {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement('tr', '', tbody);
      const firstColumnTd = createElement('td', '', tableRow);
      createElement('img', '', firstColumnTd, '', '', { src: img });
      const secondColumnTd = createElement('td', '', tableRow);
      createElement('p', name, secondColumnTd);
      const thirdColumnTd = createElement('td', '', tableRow);
      createElement('p', price, thirdColumnTd);
      const fourthColumnTd = createElement('td', '', tableRow);
      createElement('p', decFactor, fourthColumnTd);
      const fifthColumnTd = createElement('td', '', tableRow);
      createElement('input', '', fifthColumnTd, '', '', { type: 'checkbox' });
    }
  }

  function buyHandler () {
    const allCheckedInputs = Array.from(document.querySelectorAll('tbody tr input:checked'));
    let boughtItems = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const input of allCheckedInputs) {
      // const tableRow = input.parentElement.parentElement;
      const tableRow = input.closest('tr');
      console.log(tableRow);

      const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children);
      
      // let item = secondColumn.children[0].textContent;
      let item = tableRow.querySelector('td:nth-child(2) > p').textContent;
      boughtItems.push(item);

      // let currentPrice = Number(thirdColumn.children[0].textContent);
      let currentPrice = Number(tableRow.querySelector('td:nth-child(3) > p').textContent);
      totalPrice += currentPrice;
      
      // let currentDecFactor = Number(fourthColumn.children[0].textContent);
      let currentDecFactor = Number(tableRow.querySelector('td:nth-child(4) > p').textContent);
      totalDecFactor += currentDecFactor;
    }
    buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`;
    buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextArea.value += `Average decoration factor: ${totalDecFactor / allCheckedInputs.length}`;
  }

  // type = string
  // content = string (text content)
  // classNames = array of strings
  // attributes = object
  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== 'input' && type !== 'textarea') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (content && type === 'textarea') {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (id) {
      htmlElement.id = id;
    }

    // ['list', 'item']
    if (classes) {
      htmlElement.classList.add(...classes);
    }

    // { src: 'link to image', href: 'link to site', type: 'checkbox', .... }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
        }
      }
      return htmlElement;
  }
}