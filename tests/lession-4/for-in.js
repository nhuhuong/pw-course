let product = {
    "banana": 20,
    "apple": 40,
    "orange": 15
}

for (let key in product){
    console.log(key)
}

for (let key in product){
    console.log(product[key])
}