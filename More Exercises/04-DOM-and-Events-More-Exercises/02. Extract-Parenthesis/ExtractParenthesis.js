function extract(content) {
    const elContent = document.getElementById(content);
    const parenthesizedText = elContent.textContent.match(/\((.*?)\)/g);

    if (parenthesizedText) {
        return parenthesizedText.map(text => text.slice(1, -1)).join('; ');
    } else {
        return '';
    }
}

// Attach the showExtractedText function to the button click event
const extractButton = document.getElementById('extractButton');
extractButton.addEventListener('click', showExtractedText);

function showExtractedText() {
    const extractedText = extract('content'); // Call the extract function
    const extractedTextElement = document.getElementById('extractedText');
    extractedTextElement.textContent = extractedText; // Display the extracted text
}

