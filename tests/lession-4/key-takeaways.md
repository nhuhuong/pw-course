# Pham vi cua bien 
var: global 
let: pham vi trong 1 function

# Toan tu so sanh (==) va (===) (so sanh long leo va so sanh tuyet doi)
const result ="5" == 5; //so sanh gia tri 
const result2 = "5" === 5; // so sanh gia tri va kieu du lieu

console.log(result) //true
console.log(result2) // false

const result3 = "5"!= 5 //false =? so sanh long leo 
console.log(result3) // false


# for in: lap cac thuoc tinh trong array
let product = {
    "banana": 20,
    "apple": 40,
    "orange": 15
}
###  lay thuoc tinh 
for (let key in product){
    console.log(key)
}
###  lay gia tri
for (let key in product){
    console.log(product[key])
}

# forEach
### Cu phap 
const ar = []
arr. forEach(value, index) => {
    #code
}

### vi du 
const  fruits =["banana", "orange", "apple"]
fruits.forEach((value, index)=>{
    console.log(value)
    console.log(`qua ${value} o vi tri ${index + 1}`)
})

# for of
### Cu phap 
for (let value of arr){
    //code
}

### vi du 
const  fruits =["banana", "orange", "apple"]
for (let fruite of fruits) {
    console.log (fruite)
}

# Break va continue
### continue: chay tiep toi vong lap tiep theo 
for (let i = 1; i<=5; i++){
    if (i%2 === 0){
        continue;
    }
    console.log(i)
}

=> output: 1,3,5

### break: thoat khoi vong lap
for (let i = 1; i<=5; i++){
    if (i%2 === 0){
        break;
    }
    console.log(i)
}
// => output: 1