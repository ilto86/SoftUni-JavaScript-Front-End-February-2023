// function calculateTicketPrice(dayType, age) {
//     let ticketPrice;

//     if (age >= 0 && age <= 18) {
//         if (dayType === "Weekday") {
//             ticketPrice = `12$`;
//         }
//         else if (dayType === "Weekend") {
//             result = `15$`;
//         }
//         else if (dayType === "Holiday") {
//             ticketPrice = `5$`;
//         }
//         else {
//             ticketPrice = "Error!";
//         }
//     }
//     else if (age > 18 && age <= 64) {
//         if (dayType === "Weekday") {
//             ticketPrice = `18$`;
//         }
//         else if (dayType === "Weekend") {
//             ticketPrice = `20$`;
//         }
//         else if (dayType === "Holiday") {
//             ticketPrice = `12$`;
//         }
//         else {
//             ticketPrice = "Error!";
//         }
//     }
//     else if (age > 64 && age <= 122) {
//         if (dayType === "Weekday") {
//             ticketPrice = `12$`;
//         }
//         else if (dayType === "Weekend") {
//             ticketPrice = `15$`;
//         }
//         else if (dayType === "Holiday") {
//             ticketPrice = `10$`;
//         }
//         else {
//             ticketPrice = "Error!";
//         }
//     }
//     else {
//         ticketPrice = "Error!";
//     }

//     return ticketPrice;
// }


function calculateTicketPrice(dayType, age) {
    let ticketPrice;

    if (age >= 0 && age <= 18) {
        if (dayType === "Weekday") {
            ticketPrice = `12$`;
        }
        else if (dayType === "Weekend") {
            ticketPrice = `15$`;
        }
        else if (dayType === "Holiday") {
            ticketPrice = `5$`;
        }
    }
    else if (age > 18 && age <= 64) {
        if (dayType === "Weekday") {
            ticketPrice = `18$`;
        }
        else if (dayType === "Weekend") {
            ticketPrice = `20$`;
        }
        else if (dayType === "Holiday") {
            ticketPrice = `12$`;
        }
    }
    else if (age > 64 && age <= 122) {
        if (dayType === "Weekday") {
            ticketPrice = `12$`;
        }
        else if (dayType === "Weekend") {
            ticketPrice = `15$`;
        }
        else if (dayType === "Holiday") {
            ticketPrice = `10$`;
        }
    }
    else {
        ticketPrice = "Error!";
    }

    return ticketPrice;
}


console.log(calculateTicketPrice('Weekday', 42)); // should print 18$ 
console.log(calculateTicketPrice('Holiday', -12)); // should print Error!
console.log(calculateTicketPrice('Holiday', 15)); // should print 5$
console.log(calculateTicketPrice("Weekday", 16)); // should print 12$
console.log(calculateTicketPrice("Weekend", 25)); // should print 20$
console.log(calculateTicketPrice("Holiday", 70)); // should print 10$
console.log(calculateTicketPrice("InvalidDayType", 40)); // should print Error!
console.log(calculateTicketPrice("Weekday", -5)); // should print Error!
console.log(calculateTicketPrice("Weekday", 123)); // should print Error!