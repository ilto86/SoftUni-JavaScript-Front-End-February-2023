function pyramidOfDjoser (base, increment) {

    let stoneNeeded = 0;
    let marbleNeeded = 0;
    let lapisLazuliNeeded = 0;
    let goldNeeded = 0;
    let step = 0;

    while (base - 2 > 0) {

        step++;
        stoneNeeded += ((base - 2) ** 2) * increment;
        if (step % 5 === 0) {
            lapisLazuliNeeded += (base * 4 - 4) * increment;
        } else {
            marbleNeeded += (base * 4 - 4) * increment;
        }
        base -= 2 ;
        
    }

    step++;
    goldNeeded += (base ** 2) * increment;
    
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliNeeded)}`);
    console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}



pyramidOfDjoser(11, 1); // Stone required: 165
                        // Marble required: 112
                        // Lapis Lazuli required: 8
                        // Gold required: 1
                        // Final pyramid height: 6

pyramidOfDjoser(11, 0.75);  // Stone required: 124
                            // Marble required: 84
                            // Lapis Lazuli required: 6
                            // Gold required: 1
                            // Final pyramid height: 4

pyramidOfDjoser(12, 1); // Stone required: 220
                        // Marble required: 128
                        // Lapis Lazuli required: 12
                        // Gold required: 4
                        // Final pyramid height: 6