async function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/';
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const loader = document.getElementById('loader');
    const usernameValue = username.value;
    const repoValue = repo.value;

    try {
        loader.style.display = 'block';
        const allCommitsRes = await fetch(`${BASE_URL}${usernameValue}/${repoValue}/commits`);
        const data = await allCommitsRes.json();
        loader.style.display = 'none';
        data.forEach(({ commit }) => {
            const li = document.createElement('li');
            li.textContent = `${commit.author.name}: ${commit.message}`;
            commits.appendChild(li);
        });
    } catch(error) {
        // console.error(error);
        const li = document.createElement('li');
        li.textContent = `Error: ${error.status} ${error.message}`;
        commits.appendChild(li);
    }
}