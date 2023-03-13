function catsInfo(input) {
    class Cat{
        constructor(name, age) {
            this.catName = name;
            this.catAge = age;
        }
        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }

    let cats = [];
    for (const line of input) {
        let [name, age] = line.split(' ');
        age = Number(age);
        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        cat.meow();
    }
}

catsInfo(['Mellow 2', 'Tom 5']);
// catsInfo(['Candy 1', 'Poppy 3', 'Nyx 2']);