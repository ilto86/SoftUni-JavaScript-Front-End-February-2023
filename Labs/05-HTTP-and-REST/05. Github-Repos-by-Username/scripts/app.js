function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/';
	const username = document.getElementById('username');
	const ulRepo = document.getElementById('repos');
	const usernameValue = username.value;

	fetch(`${BASE_URL}${usernameValue}/repos`)
	.then((response) => response.json())
	.then((arrayData) => {
		// console.log(arrayData);
		ulRepo.innerHTML = '';
		arrayData.forEach(({ full_name, html_url }) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.textContent = full_name;
			a.setAttribute('href', `${html_url}`);
			li.appendChild(a);
			ulRepo.appendChild(li);
		});
	})
	.catch((error) => {
		// console.error(error);
		const li = document.createElement('li');
		li.textContent = `Error: ${error.status} ${error.message}`;
		ulRepo.appendChild(li);
	});
}