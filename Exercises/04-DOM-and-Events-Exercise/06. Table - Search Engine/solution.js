function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRowsElement = document.querySelectorAll('tbody tr');
   const searchField = document.getElementById('searchField');

   function onClick () {
      for (const tr of tableRowsElement) {
         tr.classList.remove('select');
         
         if(tr.textContent.includes(searchField.value)) {
            tr.className = 'select';
         }
      }
      searchField.value = '';
   }
}