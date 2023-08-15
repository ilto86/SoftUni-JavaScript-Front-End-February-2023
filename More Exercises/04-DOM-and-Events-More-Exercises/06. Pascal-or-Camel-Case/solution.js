// function solve() {
//     const txt = document.querySelector('#text');
//     const outputType = document.querySelector('#naming-convention');
//     const output = document.querySelector('#result')
//     const cases = {'Camel Case': 1, 'Pascal Case': 0}
//
//     if (txt && outputType) {
//         let words = txt.value.toLowerCase().split(' ');
//
//         if (!cases.hasOwnProperty(outputType.value)) {
//             output.textContent = 'Error!'
//         } else {
//             for (let i = cases[outputType.value]; i < words.length; i++) {
//                 words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1)}`
//             }
//             output.textContent = words.join('')
//         }
//     }
// }



function solve() {
    const txt = document.querySelector('#text');
    const outputType = document.querySelector('#naming-convention');
    const output = document.querySelector('#result')
    const cases = {'Camel Case': 1, 'Pascal Case': 0, 'Snake Case': 2};

    if (txt && outputType) {
        let words = txt.value.toLowerCase().split(' ');

        if (!cases.hasOwnProperty(outputType.value)) {
            output.textContent = 'Error!';
        } else {
            if (cases[outputType.value] === 2) {
                output.textContent = words.join('_');
            } else {
                for (let i = cases[outputType.value]; i < words.length; i++) {
                    words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1)}`;
                }
                output.textContent = words.join('');
            }
        }
    }
}
