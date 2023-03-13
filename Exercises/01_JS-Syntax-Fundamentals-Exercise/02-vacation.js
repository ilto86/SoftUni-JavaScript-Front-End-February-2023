function vacationPriceCalculate(people, groupType, weekDay) {
    let totalPrice;

    switch(groupType) {
        case "Students":
            if (weekDay === "Friday") {
                totalPrice = people * 8.45;
            } else if (weekDay === "Saturday") {
                totalPrice = people * 9.80;
            } else if (weekDay === "Sunday") {
                totalPrice = people * 10.46;
            }
            if (people >= 30) {
                totalPrice -= totalPrice * 0.15;
            }
            break;

        case "Business":
            if (people >= 100) {
                people -= 10;
            }

            if (weekDay === "Friday") {
                totalPrice = people * 10.90;
            } else if (weekDay === "Saturday") {
                totalPrice = people * 15.60;
            } else if (weekDay === "Sunday") {
                totalPrice = people * 16;
            }
            break;

        case "Regular":
            if (weekDay === "Friday") {
                totalPrice = people * 15;
            } else if (weekDay === "Saturday") {
                totalPrice = people * 20;
            } else if (weekDay === "Sunday") {
                totalPrice = people * 22.50;
            }
            if (people >= 10 && people <= 20) {
                totalPrice -= totalPrice * 0.05;
            }
            break;
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


vacationPriceCalculate(
    30,
    "Students",
    "Sunday"
)
vacationPriceCalculate(
    100,
    "Business",
    "Sunday" 
)
vacationPriceCalculate(
    40,
    "Regular",
    "Saturday" 
)