function ages(age) {
    let personIs;

    if (age >= 0 && age <= 2) {
        personIs = "baby";
    } 
    else if (age >= 3 && age <= 13) {
        personIs = "child";
    }
    else if (age >= 14 && age <= 19) {
        personIs = "teenager";
    }
    else if (age >= 20 && age <= 65) {
        personIs = "adult";
    }
    else if (age >= 66) {
        personIs = "elder";
    }
    else {
        personIs = "out of bounds";
    }
    console.log(personIs)
}

ages(20) // adult
ages(1) // baby
ages(100) // elder
ages(-1) // out of bounds