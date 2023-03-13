function solve(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

solve(4, 5);
solve(1, 3);


function nameSolve (name, age) {
    let output = `My name is ${name} and my age is ${age}`;
    console.log(output)
}

nameSolve('Kiril', 45);


function solve (grade) {
    console.log(grade.toFixed(2))
}

solve(2.3344445);


let arr = []
let dictonary = {};
console.log(typeof arr)
console.log(typeof dictonary)


let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Go to work!");
        break; 
    case "Tuesday":
        console.log("Go to work!");
        break; 
    case "Wednesday":
        console.log("Go to work!");
        break; 
    case "Thursday":
        console.log("Go to work!");
        break; 
    case "Friday":
        console.log("Go to work!"); 
        break; 
    case "Saturday":
        console.log("Time Off!!");
        break; 
    case "Sunday":
        console.log("Time Off!!");  
        break;
    default:
        console.log("No Statement")
}
