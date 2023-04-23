function extract(content) {
    const target = document.getElementById(content).innerText;
    let extracted = target.match(/(?<=\()[^\)]+(?=\))/g);
    return extracted.join('; ');
}