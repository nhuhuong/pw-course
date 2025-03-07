// continue: chay tiep toi vong lap tiep theo 
for (let i = 1; i<=5; i++){
    if (i%2 === 0){
        continue;
    }
    console.log(i)
}

// => output: 1,3,5

// break: thoat khoi vong lap
for (let i = 1; i<=5; i++){
    if (i%2 === 0){
        break;
    }
    console.log(i)
}
// => output: 1