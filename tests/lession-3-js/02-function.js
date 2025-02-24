//Bai 1
function tinhBMI(chieucao, cannang) {
    let BMI = cannang / (chieucao * chieucao)
    if (BMI < 18.5) {
        return "Thieu can"
    }
    else if (BMI < 25) {
        return "Binh Thuong"
    }
    else if (BMI < 30) {
        return "Thua can"
    }
    else {
        return "Beo phi"
    }
};

let tinhtrang = tinhBMI(1.45, 70);
console.log(tinhtrang);

//Bai 2
function chuyenDoi(nhietdo, loainhietdo) {
    if (loainhietdo == "C") {
        let nhietDoF = nhietdo * 9 / 5 + 32
        return `do F la ${nhietDoF}`
    }
    else {
        nhietDoC = (nhietdo - 32) * 5 / 9
        return `do C la ${nhietDoC}`
    }
};
console.log(chuyenDoi(30, "F"));
console.log(chuyenDoi(100, "C"));


//bai 3
let myArray = [1, 2, 3, 4, 5]
let total = 0
function tinhTong(array) {
    for (let i = 0; i < array.length; i++)
        total = total + array[i]
    return total
};

console.log(tinhTong(myArray))

//Bai 4
function soNguyenTo(number) {
    if (number == 0 || number == 1) {
        return "Khong phai so nguyen to"
    }
    else {
        let totalTime = 0;
        for (let i = 1; i <= number; i++)
            if (number % i == 0) {
                totalTime++;
            }
        if (totalTime == 2) {
            return "La so nguyen to"
        }
        else {
            return "Khong phai so nguyen to"
        }
    }
};

console.log(soNguyenTo(6));
console.log(soNguyenTo(1));
console.log(soNguyenTo(7));

//Bai 5
let users = { name: ["Huong", "Alex", "Teo"], email: ["huong@email.com", "alex@email.com", "teo@email.com"] };
function capnhatemail(name, email) {
    for (i = 0; i < name.length; i++) {
        if (users["name"][i] == name) {
            users["email"][i] = email
        }
    }
};

console.log(users);
capnhatemail("Teo", "newteo.email.com");
console.log(users);


// Bai 6 
let bangdiem = [{ "name": "Alex", score: 85 }, { "name": "Huong", score: 82 }, { "name": "Teo", score: 88 }]
function tinhDiemTrungBinh(myArray) {
    let diemtrungbinh = 0
    for (let i = 0; i < myArray.length; i++) {
        diemtrungbinh = diemtrungbinh + myArray[i]["score"]
    }
    return diemtrungbinh / myArray.length
};

console.log(tinhDiemTrungBinh(bangdiem));

//Bai 7 

let giohang = [{ "name": "product 1", "price": 100 }, { "name": "product 2", "price": 2 }, { "name": "product 3", "price": 22 }];
function kiemTraGia(myArray) {
    coGiaBangKhong = false
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i]["price"] == 0) {
            coGiaBangKhong = true
        }
    }
    if (coGiaBangKhong == true) {
        return "Gio hang co san pham co gia bang khong"
    }
    else {
        return "Giao hang khong co san pham nao co gia bang khong"
    }

};

console.log(kiemTraGia(giohang));

//Bai 8
function tinhGioMoCua(gio) {
    if (gio >= 9 && gio <= 21) {
        return "cua hang con mo cua"
    }
    else {
        return "cua hang dong cua roi ban oi "
    }
};
console.log(tinhGioMoCua(21));
console.log(tinhGioMoCua(22));

//Bai 9
function tinhGiaVe(tuoi) {
    if (tuoi < 5) {
        return "Mien phi ve"
    }
    else if (tuoi > 18) {
        return "Gia ve la 100k"
    }
    else {
        return "Gia ve la 50k"
    }
};

console.log(tinhGiaVe(4));
console.log(tinhGiaVe(16));
console.log(tinhGiaVe(30));


// Bai 10 
function inTenThang(thang) {
    switch (thang) {
        case 1:
            return "Thang Gieng";
        case 2:
            return "Thang Hai";
        case 3:
            return "Thang Ba";
        case 4:
            return "Thang Tu";
        case 5:
            return "Thang Nam";
        case 6:
            return "Thang Sau";
        case 7:
            return "Thang Bay";
        case 8:
            return "Thang Tam";
        case 9:
            return "Thang Chin";
        case 10:
            return "Thang Muoi";
        case 11:
            return "Thang Muoi Mot";
        case 12:
            return "Thang Chap";
    }

};

console.log(inTenThang(12));

// Bai 11
function xepHang(diem) {
    if (diem >= 8) {
        return "Gioi";
    } else if (diem >= 6.5) {
        return "Kha";
    } else if (diem >= 5) {
        return "Trung Binh";
    } else {
        return "Yeu";
    }
};

console.log(xepHang(3));
console.log(xepHang(7.9));
console.log(xepHang(8.9));


//Bai 12
function thoiTiet(nhietDo){
    if (nhietDo >=30){
        return `Nhiet do la ${nhietDo}, thoi tiet nong`
    } else if (nhietDo < 30 && nhietDo >=20){
        return `Nhiet do la ${nhietDo}, thoi tiet mat`
    }else {
        return `Nhiet do la ${nhietDo}, thoi tiet lanh`
    }
};

console.log(thoiTiet(5));
console.log(thoiTiet(25));
console.log(thoiTiet(33));