

//Bai 1
let numbers = [1, 2, 3, 4, 5, 3, 5];

// let firstIndex = numbers.indexOf(3);
// let lastIndex = numbers.lastIndexOf(3);
let firstIndex =  -1;
let lastIndex = -1;
let target = 3
let count =0;

for (let i of numbers){
    if (i === target){
        if (firstIndex === -1){
            firstIndex = count;
        }
        lastIndex = count;
    }
    count++;

}

console.log(firstIndex)
console.log(lastIndex)

if (firstIndex == -1 && lastIndex == -1){
    console("khong ton tai")
}
else {
    console.log(`First index: ${firstIndex}`);
    console.log(`Last index: ${lastIndex}`);

}

//Bai 2
let myArray = "Playwright";
let newArray = [];
let newArray2 = [];
for (let i = myArray.length - 1; i >= 0; i--) {
    newArray.push(myArray[i]);
};
console.log(newArray);


/// cach 2 cua bai 2
for (let item of myArray){
    newArray2.unshift(item)
}
console.log(newArray2)

//Bai 3

let numeric = [1, 2, 3, 4, 5, 2, 3];
// let oneTime = [];
// for (let i =0; i<numeric.length; i++){
//     let appear = 0
//     let onlyNum = numeric[i]
//     for (let j=0; j <numeric.length; j++){
//         if (numeric[j] === onlyNum){
//             appear ++;
//         }
//     }
//     if (appear === 1){
//         oneTime.push(numeric[i])

//     }
// }
// console.log(oneTime)

//cach 2 
map ={}
result = []
for (let item of numeric){
    map[item] = (map[item] || 0) + 1
};

for (let item in map){
    if (map[item] === 1){
        result.push(item)
    }
}
console.log(result)