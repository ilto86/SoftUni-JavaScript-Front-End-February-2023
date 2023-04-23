function solve() {
   const inputDOMSelectors = {
      authorInput: document.getElementById('creator'),
      titleInput: document.getElementById('title'),
      categoryInput: document.getElementById('category'),
      contentInput: document.getElementById('content'),
   };

   const otherDOMSelectors = {
      createBtn: document.getElementsByClassName('btn create')[0],
      siteContentMain: document.querySelector('.site-content'),
      archiveSection: document.getElementsByClassName('archive-section')[0],
   };

   const mainSection = otherDOMSelectors.siteContentMain.querySelector('section');
   const archiveList = otherDOMSelectors.archiveSection.querySelector('ol');

   otherDOMSelectors.createBtn.addEventListener('click', createNewArticleHandler);

   function createNewArticleHandler(event) {
      event.preventDefault();
      
      let author = inputDOMSelectors.authorInput.value;
      let title = inputDOMSelectors.titleInput.value;
      let category = inputDOMSelectors.categoryInput.value;
      let content = inputDOMSelectors.contentInput.value;

      if (author === '' || title === '' || category === '' || content === '') {
         alert('Must all inputs filled!');
         return;
      }

      const article = createElement('article', '', mainSection);
      createElement('h1', title, article);
      const pCategory = createElement('p', 'Category: ', article);
      createElement('strong', category, pCategory);
      const pCreator = createElement('p', 'Creator: ', article);
      createElement('strong', author, pCreator);
      createElement('p', content, article);
      const divButtons = createElement('div', '', article, null, ['buttons']);
      const deleteBtn = createElement('button', 'Delete', divButtons, null, ['btn', 'delete']);
      const archiveBtn = createElement('button', 'Archive', divButtons, null, ['btn',  'archive']);

      deleteBtn.addEventListener('click', deleteArticleHandler);
      archiveBtn.addEventListener('click', archiveArticleHandler);
      
      clearInputs(inputDOMSelectors);
   }

   function deleteArticleHandler() {
      this.parentElement.parentElement.remove();
   }

   function archiveArticleHandler() {
      const article = this.parentElement.parentElement;
      const title = article.querySelector('h1').textContent;
      const newLi = createElement('li', title, archiveList);

      // Sort the archive list by title
      const liArray = Array.from(archiveList.children);
      liArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
      liArray.forEach(li => archiveList.appendChild(li));

      article.remove();
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
      
      //{ src: 'link to img', href: 'link to site' }
      if (attributes){
         for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]); 
         }
      } 
      return htmlElement;
   }
}
