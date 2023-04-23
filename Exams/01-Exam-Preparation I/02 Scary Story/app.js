window.addEventListener("load", solve);

function solve() {
  const mainDivElement = document.getElementById('main');
  const publishButton = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  const authorFirstName = document.getElementById('first-name');
  const authorLastName = document.getElementById('last-name');
  const authorAge = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const storyGenre = document.getElementById('genre');
  const storyText = document.getElementById('story');


  publishButton.addEventListener('click', () => {
    const firstName = authorFirstName.value;
    const lastName = authorLastName.value;
    const age = authorAge.value;
    const title = storyTitle.value;
    const genre = storyGenre.value;
    const text = storyText.value;

    if (firstName === '' || lastName === '' || age === '' || title === '' || text === '') {
      return;
    }

    const previewItem = document.createElement('li');
    previewItem.className = 'story-info';
    previewItem.innerHTML = `
        <article>
          <h4>Name: ${firstName} ${lastName}</h4>
          <p>Age: ${age}</p>
          <p>Title: ${title}</p>
          <p>Genre: ${genre}</p>
          <p>${text}</p>
        </article>
        <button class="save-btn">Save Story</button>
        <button class="edit-btn">Edit Story</button>
        <button class="delete-btn">Delete Story</button>`;
    previewList.appendChild(previewItem);

    const saveButton = document.getElementsByClassName('save-btn')[0];
    const editButton = document.getElementsByClassName('edit-btn')[0];
    const deleteButton = document.getElementsByClassName('delete-btn')[0];

    authorFirstName.value = '';
    authorLastName.value = '';
    authorAge.value = '';
    storyTitle.value = '';
    storyGenre.value = '';
    storyText.value = '';
    publishButton.disabled = true;
    saveButton.disabled = false;
    editButton.disabled = false;
    deleteButton.disabled = false;
  });

  previewList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('edit-btn')) {
      let currentPreviewItem = document.getElementsByClassName('story-info')[0];
      const authorName = currentPreviewItem.querySelector('h4').textContent.split(': ')[1];
      const authAge = currentPreviewItem.querySelector('p:nth-child(2)').textContent.split(': ')[1];
      const authorTitle = currentPreviewItem.querySelector('p:nth-child(3)').textContent.split(': ')[1];
      const authorGenre = currentPreviewItem.querySelector('p:nth-child(4)').textContent.split(': ')[1];
      const authorText = currentPreviewItem.querySelector('p:nth-child(5)').textContent;
      const saveButton = document.getElementsByClassName('save-btn')[0];
      const editButton = document.getElementsByClassName('edit-btn')[0];
      const deleteButton = document.getElementsByClassName('delete-btn')[0];

      authorFirstName.value = authorName.split(' ')[0];
      authorLastName.value = authorName.split(' ')[1];
      authorAge.value = authAge;
      storyTitle.value = authorTitle;
      storyGenre.value = authorGenre;
      storyText.value = authorText;

      publishButton.disabled = false;
      saveButton.disabled = true;
      editButton.disabled = true;
      deleteButton.disabled = true;

      currentPreviewItem.remove();

    }
    
    if (target.classList.contains('delete-btn')) {
      let currentPreviewItem = document.getElementsByClassName('story-info')[0];
      currentPreviewItem.remove();
      publishButton.disabled = false;

    }
    
    if (target.classList.contains('save-btn')) {
      mainDivElement.innerHTML = '<h1>Your scary story is saved!</h1>';
    }
  });
}