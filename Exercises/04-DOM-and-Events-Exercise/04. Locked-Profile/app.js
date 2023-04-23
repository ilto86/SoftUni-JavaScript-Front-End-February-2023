function lockedProfile() {
    const buttonsElement = Array.from(document.getElementsByTagName('button'));

    buttonsElement.forEach((button) => {
        button.addEventListener('click', toggleInformation);
    });

    function toggleInformation(event) {
        // Here this is the button
        const currentProfile = this.parentElement;
        const unlockRadioInput = currentProfile.querySelectorAll('input')[1];
        const additionalInformationDiv = currentProfile.querySelector('div');
        console.log(unlockRadioInput);
        console.log(additionalInformationDiv);

        if (unlockRadioInput.checked) {
            if (this.textContent === 'Show more') {
                additionalInformationDiv.style.display = 'block';
                this.textContent = 'Hide it';
            } else {
                additionalInformationDiv.style.display = 'none';
                this.textContent = 'Show more';
            }
        }
    }
}