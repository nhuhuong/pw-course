# Pham vi cua bien 
. var: global 

. let: pham vi trong 1 function

# Toan tu so sanh (==) va (===) 
**(so sanh long leo va so sanh tuyet doi)**
```javascript
const result ="5" == 5; //so sanh gia tri 
const result2 = "5" === 5; // so sanh gia tri va kieu du lieu

console.log(result) //true
console.log(result2) // false

const result3 = "5"!= 5 //false =? so sanh long leo 
console.log(result3) // false
```


# for in: lap cac thuoc tinh trong array
```javascript
let product = {
    "banana": 20,
    "apple": 40,
    "orange": 15
} 
 ```
###  lay thuoc tinh 
```javascript
for (let key in product){
    console.log(key)```
}
###  lay gia tri
```for (let key in product){
    console.log(product[key])```
}
```

# forEach
### Cu phap => dung 1 trong 3 hoac ca 2 hoac 3 tham so deu duoc
```javascript
const ar = []
arr. forEach(value, index ,arr) => {
    #code
}
```

### vi du 
```javascript
const  fruits =["banana", "orange", "apple"]
fruits.forEach((value, index)=>{
    console.log(value)
    console.log(`qua ${value} o vi tri ${index + 1}`)
})```

# for of
### Cu phap 
```javascript
for (let value of arr){
    //code
}
```

### vi du 
```javascript
``const  fruits =["banana", "orange", "apple"]
for (let fruite of fruits) {
    console.log (fruite)
}
```

# Break va continue
### continue: chay tiep toi vong lap tiep theo 
```javascript
for (let i = 1; i<=5; i++){
    if (i%2 === 0){
        continue;
    }
    console.log(i)
}
```

=> output: 1,3,5


### break: thoát khỏi vòng lặp  
```javascript
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        break;
    }
    console.log(i);
}
// => output: 1 
// 
```

**Note**

for in: la object, array 
2 bang for con lai la cho array