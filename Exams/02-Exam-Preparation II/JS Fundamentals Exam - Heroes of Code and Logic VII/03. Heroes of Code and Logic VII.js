function heroesOfCodeAndLogic(input) {
    let arrInput = input.split('\n');

    // let number_of_heroes = parseInt(prompt("Enter number of heroes: "));
    let number_of_heroes = Number(arrInput.shift());
    let heroes = {};

    for (let i = 0; i < number_of_heroes; i++) {
        // let data = prompt("Enter hero data: ").split(" ");
        let [hero, hp, mp] = arrInput.shift().split(' ');
        // let hero = data[0];
        // let hp = parseInt(data[1]);
        // let mp = parseInt(data[2]);
        heroes[hero] = { HP: Number(hp), MP: Number(mp) };
    }

    while (arrInput.length > 0) {
        // let data = prompt("Enter command: ");
        let data = arrInput.shift();

        if (data == 'End') {
        break;
        }

        let commands = data.split(' - ');
        let command = commands[0];
        let hero_name = commands[1];
        let value = Number(commands[2]);

        if (command == 'CastSpell') {
            let spell_name = commands[3];

            if (heroes[hero_name]['MP'] >= value) {
                heroes[hero_name]['MP'] -= value;
                console.log(
                `${hero_name} has successfully cast ${spell_name} and now has ${heroes[hero_name]['MP']} MP!`
                );
            } else {
                console.log(
                `${hero_name} does not have enough MP to cast ${spell_name}!`
                );
            }

        } else if (command == 'TakeDamage') {
            let attacker = commands[3];
            heroes[hero_name]['HP'] -= value;

            if (heroes[hero_name]['HP'] > 0) {
                console.log(
                `${hero_name} was hit for ${value} HP by ${attacker} and now has ${heroes[hero_name]['HP']} HP left!`
                );
            } else {
                console.log(`${hero_name} has been killed by ${attacker}!`);
                delete heroes[hero_name];
            }

        } else if (command == 'Recharge') {
            if (value + heroes[hero_name]['MP'] > 200) {
                let needed_amount = 200 - heroes[hero_name]['MP'];
                console.log(`${hero_name} recharged for ${needed_amount} MP!`);
                heroes[hero_name]['MP'] = 200;
            } else {
                heroes[hero_name]['MP'] += value;
                console.log(`${hero_name} recharged for ${value} MP!`);
            }
            
        } else if (command == 'Heal') {
            if (value + heroes[hero_name]['HP'] > 100) {
                let needed_amount = 100 - heroes[hero_name]['HP'];
                console.log(`${hero_name} healed for ${needed_amount} HP!`);
                heroes[hero_name]['HP'] = 100;
            } else {
                heroes[hero_name]['HP'] += value;
                console.log(`${hero_name} healed for ${value} HP!`);
            }
        }
    }

    for (let heroe in heroes) {
        console.log(heroe);
        console.log(` HP: ${heroes[heroe]['HP']}`);
        console.log(` MP: ${heroes[heroe]['MP']}`);
    }
}



let input = `2
Solmyr 85 120
Kyrre 99 50
Heal - Solmyr - 10
Recharge - Solmyr - 50
TakeDamage - Kyrre - 66 - Orc
CastSpell - Kyrre - 15 - ViewEarth
End`;

heroesOfCodeAndLogic(input);