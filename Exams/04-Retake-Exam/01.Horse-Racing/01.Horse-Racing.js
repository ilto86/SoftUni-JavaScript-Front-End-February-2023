function horseRace(input) {
    const horses = input.shift().split('|');
    const lastIndex = horses.length - 1;
    
    for (const line of input) {
        const [command, horse1, horse2] = line.split(' ');
    
        switch (command) {
            case 'Finish':
                return printResults(horses, lastIndex);
            case 'Retake':
                retakeHorse(horses, horse1, horse2);
                break;
            case 'Trouble':
                moveHorseBack(horses, horse1);
                break;
            case 'Rage':
                moveHorseForward(horses, horse1);
                break;
            case 'Miracle':
                moveFirstHorseToEnd(horses);
                break;
            default:
        }
    }
    
    function retakeHorse(horses, overtakingHorse, overtakenHorse) {
        const overtakingIndex = horses.indexOf(overtakingHorse);
        const overtakenIndex = horses.indexOf(overtakenHorse);
    
        if (overtakingIndex < overtakenIndex) {
            [horses[overtakingIndex], horses[overtakenIndex]] = [horses[overtakenIndex], horses[overtakingIndex]];
            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
        }
    }
    
    function moveHorseBack(horses, horse) {
        const index = horses.indexOf(horse);
    
        if (index > 0) {
            horses.splice(index, 1);
            horses.splice(index - 1, 0, horse);
            console.log(`Trouble for ${horse} - drops one position.`);
        }
    }
    
    function moveHorseForward(horses, horse) {
        const index = horses.indexOf(horse);
        horses.splice(index, 1);
        horses.splice(index + 2, 0, horse);
        console.log(`${horse} rages 2 positions ahead.`);
    }
    
    function moveFirstHorseToEnd(horses) {
        const lastHorse = horses.shift();
        horses.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`);
    }

    function printResults(horses, lastIndex) {
        console.log(horses.join('->'));
        console.log(`The winner is: ${horses[lastIndex]}`);
    }
}



horseRace(([
    'Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'
]));

horseRace(([
    'Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'
]));

horseRace(([
    'Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'
]));