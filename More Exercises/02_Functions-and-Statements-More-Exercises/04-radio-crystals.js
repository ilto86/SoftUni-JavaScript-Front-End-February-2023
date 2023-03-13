function checkThickness(arr) {
    let targetThickness = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentThickness = arr[i];
        let output = `Processing chunk ${currentThickness} microns\n`;
        let xrayed = false;
        
        while (currentThickness === targetThickness) {
            if (currentThickness > targetThickness * 4) {
                currentThickness /= 4;
                output += "Cut x1\n";
                currentThickness = Math.floor(currentThickness);
                output += "Transporting and washing\n";
            }
            else if (currentThickness > targetThickness * 1.2) {
                currentThickness *= 0.8;
                output += "Lap x1\n";
                currentThickness = Math.floor(currentThickness);
                output += "Transporting and washing\n";
            }
            else if (currentThickness > targetThickness + 20) {
                currentThickness -= 20;
                output += "Grind x1\n";
                currentThickness = Math.floor(currentThickness);
                output += "Transporting and washing\n";
            }
            else if (currentThickness > targetThickness + 2) {
            currentThickness -= 2;
            output += "Etch x1\n";
            currentThickness = Math.floor(currentThickness);
            output += "Transporting and washing\n";
            }
            else if (currentThickness === targetThickness + 1 && !xrayed) {
                currentThickness += 1;
                output += "X-ray x1\n";
                xrayed = true;
            }
        }
    console.log(output);
    }
}


radioCrystals([1375, 50000]);   // Processing chunk 50000 microns
                                // Cut x2
                                // Transporting and washing
                                // Lap x3
                                // Transporting and washing
                                // Grind x11
                                // Transporting and washing
                                // Etch x3
                                // Transporting and washing
                                // X-ray x1
                                // Finished crystal 1375 microns

radioCrystals([1000, 4000, 8100]);  // Processing chunk 4000 microns
                                    // Cut x1
                                    // Transporting and washing
                                    // Finished crystal 1000 microns
                                    // Processing chunk 8100 microns
                                    // Cut x1
                                    // Transporting and washing
                                    // Lap x3
                                    // Transporting and washing
                                    // Grind x1
                                    // Transporting and washing
                                    // Etch x8
                                    // Transporting and washing
                                    // Finished crystal 1000 microns