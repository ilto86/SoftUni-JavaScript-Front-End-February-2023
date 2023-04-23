function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const fetchAllRepos = fetch(BASE_URL, { method: 'GET' });   // Promise
   const resultContainer = document.getElementById('res');
   
   fetchAllRepos
   .then((res) => {
      console.log(`This 'res' is stream ${typeof res}, Who return Response`);
      console.log(`This 'res.staus' return HTTP Status: ${res.status}`);
      console.log(res);
      return res.text();
   })
   .then((data) => {
      resultContainer.textContent = data;
   }).catch((err) => {
      console.error(err);
   });

}