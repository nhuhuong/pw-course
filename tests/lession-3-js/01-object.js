const { match } = require("assert");

// Bai 1
let car = { make: "Toyota", model: "Corolla", year: "2021" };
console.log(car.year);

// Bai 2
let person = { name: "Nguyen Van A", address: { street: "Ly Chinh Thang", city: "HCM", country: "VN" } };
console.log("ten duong cua " + person.name + " la: " + person.address.street);


// Bai 3
let student = { name: "Nguyen Van B", grade: { math: "7", english: "9" } };
console.log(student["grade"]["math"]);

//Bai 4
let product = { ten: ["a", "b", "c"], gia_tri: ["4", "5", "6"] };
for (let key in product) {
    for (let i = 0; i < product[key].length; i++) {
        console.log(product[key][i])
    }
};


//Bai 5
let settings = { volumn: "hight", brightness: "1" };
console.log(settings["volumn"]);
settings["volumn"] = "medium";
console.log(settings["volumn"]);

//Bai 6 
let bike = {};
bike["color"] = "black";
console.log(bike);

//bai 7
let employee = { name: "Betty", age: "28" };
delete (employee["age"]);
console.log(employee);

//bai 8
const school = { classA: ["An", "Binh", "Chau"], classB: ["Dao", "Huong", "Giang"] };
console.log(school);