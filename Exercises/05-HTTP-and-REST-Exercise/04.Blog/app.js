function attachEvents() {
    const POSTS_URL = 'http://localhost:3030/jsonstore/blog/posts/';
    const COMMENTS_URL = 'http://localhost:3030/jsonstore/blog/comments/';

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const selectElement = document.getElementById('posts');

    const viewPostsBtn = document.getElementById('btnViewPost');
    const postDetailsH1 = document.getElementById('post-title');
    const postContentParagraph = document.getElementById('post-body');
    const commentsUlList = document.getElementById('post-comments');
    console.log(loadPostsBtn);
    console.log(viewPostsBtn);
    loadPostsBtn.addEventListener('click', loadPostsHandler);
    viewPostsBtn.addEventListener('click', viewPostsHandler);

    const postBody = {};

    function loadPostsHandler(e) {
        console.log(e.currentTarget);
        fetch(`${POSTS_URL}`)
        .then(res => res.json())
        .then(postsData => {
            Object.entries(postsData)
            .forEach(([ postId, postData ]) => {
                const option = document.createElement('option');
                option.value = postId;
                option.textContent = postData.title;
                selectElement.appendChild(option);

                postBody[postId] = {
                    'title': postData.title,
                    'body': postData.body
                    };
            });
        })
        .catch(() => console.log('Error'));
    }

    function viewPostsHandler(e) {
        console.log(e.currentTarget);
        const postId = selectElement.value;
        Promise.all([
            fetch(`${POSTS_URL}${postId}`)
            .then(res => res.json()),
            fetch(`${COMMENTS_URL}`)
            .then(res => res.json())
        ])
        .then(([ _selectedPostData, viewCommentsData ]) => {
            const filteredComments = Object.values(viewCommentsData)
            .filter((comment) => comment.postId === postId);

            postDetailsH1.textContent = postBody[postId].title;
            postContentParagraph.textContent = postBody[postId].body;
            commentsUlList.innerHTML = '';
            filteredComments.forEach((comment) => {
                const liElement = document.createElement('li');
                liElement.textContent = comment.text;
                commentsUlList.appendChild(liElement);
            });
        })
        .catch(() => console.log('Error'));
    }
}

attachEvents();