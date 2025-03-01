//Bai 1
let student = { "name": "Alex", "age": 10 };

for (let key in student) {
    console.log(student[key])
};

//Bai 2
let newStudent = { "name": "Alex", "age": 10, "salary": 20 };
let tong = 0;
for (let key in newStudent) {
    if (typeof newStudent[key] === "number") {
        tong = tong + newStudent[key]
    }
};
console.log(tong);


// Bai 3
myArray =[]
for (let key in student) {
    myArray.push(key)
}
console.log(myArray)