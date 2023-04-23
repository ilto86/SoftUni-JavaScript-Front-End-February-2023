function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger/';
    const nameInput = document.querySelector('#controls > div:nth-child(1) > input[type=text]');
    const messageInput = document.querySelector('#controls > div:nth-child(2) > input[type=text]');
    const textAreaMessages = document.getElementById('messages');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    submitBtn.addEventListener('click', submitHandler);
    refreshBtn.addEventListener('click', refreshHandler);

    async function submitHandler() {
        try {
            let authorName = nameInput.value;
            let msgText = messageInput.value;
            let response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    author: authorName,
                    content: msgText,
                })
            });
            let data = await response.json();
            console.log(data);
        } catch {
            console.log('Error');
        }
    }
    async function refreshHandler() {
        try {
            let response = await fetch(BASE_URL);
            let data = await response.json();
            let context = Object.values(data).map(v => `${v.author}: ${v.content}`).join('\n');
            textAreaMessages.value = context;
        } catch {
            console.log('Error');
        }
    }
}

attachEvents();