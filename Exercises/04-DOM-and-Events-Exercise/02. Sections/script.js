function create(words) {
   const contentDiv = document.getElementById('content');

   for (const word of words) {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      
      newParagraph.textContent = word;
      newParagraph.style.display = 'none';

      // Click Event
      newDiv.addEventListener('click', () => {
         newParagraph.style.display = 'block';
      });

      // Attaching to DOM Tree
      newDiv.appendChild(newParagraph);
      contentDiv.appendChild(newDiv);
   }
}