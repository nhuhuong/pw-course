//Bai 1 
total = 0;
for (let i = 1; i <= 100; i++) {
    total = total + i
};
console.log(`Tong tu 1 toi 100 la ${total}`);

//Bai 2 
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        result = i * j
        console.log(`${i} X ${j} = ${result}`)
    };
};

//Bai 3
odd_array = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 == 1) {
        odd_array.push(i)
    }
};

console.log(odd_array);

//Bai 4
for (let i=1; i<=10; i++){
    console.log(`user${i}@example.com`)
}

//Bai 5
let doanhThu = [{"month":1, "total": 100}, {"month":2, "total": 50}, {"month":3, "total": 140}, 
    {"month":4, "total": 140},{"month":5, "total": 140},{"month":6, "total": 140},
    {"month":7, "total": 140},{"month":8, "total": 140},{"month":9, "total": 140},{"month":10, "total": 140},
    {"month":11, "total": 140},{"month":12, "total": 140}];

    tongDoanhSo = 0
    for (key in doanhThu){
        tongDoanhSo = tongDoanhSo + doanhThu[key]["total"]
    };
    console.log(`Tong doanh thu la ${tongDoanhSo}`);
