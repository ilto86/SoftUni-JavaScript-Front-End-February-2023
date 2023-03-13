function validityChecker (x1, y1, x2, y2) {
    let firstDistance = Number.isInteger(
        Math.sqrt(
            ((0 - x1) ** 2) + ((0 - y1) ** 2)
            )
        );
    let secondDistance = Number.isInteger(
        Math.sqrt(
            ((x2 - 0) ** 2) + ((y2 - 0) ** 2)
            )
        );
    let thirdDistance = Number.isInteger(
        Math.sqrt(
        ((x2 - x1) ** 2) + ((y2 - y1) ** 2)
        )
    );
    
    if (firstDistance) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (secondDistance) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }

    if (thirdDistance) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);    // {3, 0} to {0, 0} is valid
                                // {0, 4} to {0, 0} is valid
                                // {3, 0} to {0, 4} is valid

validityChecker(2, 1, 1, 1);    // {2, 1} to {0, 0} is invalid 
                                // {1, 1} to {0, 0} is invalid
                                // {2, 1} to {1, 1} is valid