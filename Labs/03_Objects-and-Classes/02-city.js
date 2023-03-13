// function cityInfo(city) {
//     let entries = Object.entries(city);
//     for (let [key, value] of entries) {
//         console.log(`${key} -> ${value}`);
//     }
// }

function cityInfo(input) {
    for (let key in input) {
        console.log(`${key} -> ${input[key]}`);
    }
}

cityInfo({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: '1000'
});
cityInfo({
    name: 'Plovdiv',
    area: 389,
    population: 1162358,
    country: 'Bulgaria',
    postCode: '4000' 
});