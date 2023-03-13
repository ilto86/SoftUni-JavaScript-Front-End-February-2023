function roadRadar(speed, area) {
    let limit = 0;
    let status;
    let difference = 0;

    switch (area) {
        case "motorway":
            limit = 130;
            
            if (+speed <= limit) {
                return `Driving ${speed} km/h in a ${limit} zone`;
            }

            else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = "speeding";
                } 
                else if (difference <= 40) {
                    status = "excessive speeding";
                } 
                else {
                    status = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
            }
        break;

        case "interstate":
            limit = 90;
            
            if (+speed <= limit) {
                return `Driving ${speed} km/h in a ${limit} zone`;
            }
            else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = "speeding";
                }
                else if (difference <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
            }
        break;

        case "city":
            limit = 50;
            
            if (+speed <= limit) {
                return `Driving ${speed} km/h in a ${limit} zone`;
            }
            else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = "speeding";
                }
                else if (difference <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
            }
        break;

        case "residential":
            limit = 20;

            if (+speed <= limit) {
                return `Driving ${speed} km/h in a ${limit} zone`;
            }
            else {
                difference = speed - limit;
                if (difference <= 20) {
                    status = "speeding";
                }
                else if (difference <= 40) {
                    status = "excessive speeding";
                }
                else {
                    status = "reckless driving";
                }
                return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
            }
        break;
    }
}

console.log(roadRadar(40, 'city')); // Driving 40 km/h in a 50 zone
console.log(roadRadar(21, 'residential')); // The speed is 1 km/h faster than the allowed speed of 20 - speeding
console.log(roadRadar(120, 'interstate')); // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding


