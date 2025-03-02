// Bai 1: In mang
let myArray = [1, 2, 3]
myArray.forEach((value) =>
    console.log(value)


);

// Bai 2: Tinh tong, tim max, min
let total = 0;
let min = myArray[0];
let max = myArray[0];
myArray.forEach((value) => {
    total = total + value
    if (min > value) { min = value };
    if (max < value) { max = value };

});
console.log(`Tong la ${total}`);
console.log(`Min la ${min}`);
console.log(`Max la ${max}`);

// Bai 3
let myNewArray = []
myArray.forEach((value) => {
    myNewArray.push(value * 2);
}
);
console.log(`Gia tri mang moi la: ${myNewArray}`);