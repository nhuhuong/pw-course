const { only } = require("node:test");

//Bai 1
let numbers = [1, 2, 3, 4, 5, 3, 5];

let firstIndex = numbers.indexOf(3);
let lastIndex = numbers.lastIndexOf(3);

console.log(`First index: ${firstIndex}`);
console.log(`Last index: ${lastIndex}`);

//Bai 2
let myArray = "Playwright";
let newArray = [];
for (let i = myArray.length - 1; i >= 0; i--) {
    newArray.push(myArray[i]);
};
console.log(newArray);


//Bai 3

let numeric = [1, 2, 3, 4, 5, 2, 3];
let oneTime = [];
for (let i =0; i<numeric.length; i++){
    let appear = 0
    let onlyNum = numeric[i]
    for (let j=0; j <numeric.length; j++){
        if (numeric[j] === onlyNum){
            appear ++;
        }
    }
    if (appear === 1){
        oneTime.push(numeric[i])

    }
}
console.log(oneTime)