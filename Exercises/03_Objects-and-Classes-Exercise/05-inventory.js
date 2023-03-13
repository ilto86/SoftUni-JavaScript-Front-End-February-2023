function inventory(input) {
    let heroes = [];

    for (const line of input) {
        let [ name, level, items ] = line.split(' / ');
        level = Number(level);
        heroes.push({ name, level, items });
    }

    let sortedHeroes = heroes.sort((heroA, heroB) => heroA.level - heroB.level);

    for (let {  name, level, items } of sortedHeroes) {
        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`);
    }
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);


inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]);