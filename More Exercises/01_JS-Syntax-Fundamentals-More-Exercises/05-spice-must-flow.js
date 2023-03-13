function spiceMustFlow(startingYield) {
    let workingDays = 0;
    let spices = 0;

    while (startingYield > 99) {
        
        workingDays++;
        spices += startingYield - 26;
        startingYield -= 10;
    }
    
    if (workingDays > 0) {
        spices -= 26;
    }
    
    console.log(workingDays);
    console.log(spices); 
}


spiceMustFlow(111); // 2
                    // 134

spiceMustFlow(450); // 36
                    // 8938