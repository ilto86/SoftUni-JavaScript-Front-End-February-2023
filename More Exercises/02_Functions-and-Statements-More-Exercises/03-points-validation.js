function validatePoints([x1, y1, x2, y2]) {
    const distances = [
        { name: `{${x1}, ${y1}} to {0, 0}`, value: Math.sqrt(x1 ** 2 + y1 ** 2) },
        { name: `{${x2}, ${y2}} to {0, 0}`, value: Math.sqrt(x2 ** 2 + y2 ** 2) },
        { name: `{${x1}, ${y1}} to {${x2}, ${y2}}`, value: Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) },
    ];
    
    for (const distance of distances) {
        const isValid = Number.isInteger(distance.value);
        const message = isValid ? 'is valid' : 'is invalid';
        console.log(`${distance.name} ${message}`);
    }
}


validatePoints([3, 0, 0, 4]);   // {3, 0} to {0, 0} is valid
                                // {0, 4} to {0, 0} is valid
                                // {3, 0} to {0, 4} is valid

validatePoints([2, 1, 1, 1]);   // {2, 1} to {0, 0} is invalid
                                // {1, 1} to {0, 0} is invalid
                                // {2, 1} to {1, 1} is valid





