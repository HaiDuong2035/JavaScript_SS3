let numBorrow;
do {
    numBorrow = +prompt("Hom nay co bao nhieu nguoi tra sach");
} while (Number.isInteger(numBorrow) && numBorrow > 0);
let nameBorrow;
let nameBook;
let dayBorrow;
let count = 0;
for (let i = 0; i < numBorrow; i++) {
    nameBorrow = prompt("Ten nguoi muon");
    nameBook = prompt("Ten sach");
    do {
        dayBorrow = +prompt("So ngay muon");
    } while (dayBorrow >=1 && dayBorrow <=30);
    if (dayBorrow > 14) {
        console.log("Canh bao: Thoi gian muon vuot quy dinh (toi da 14 ngay)");
    } else {
        console.log("Muon thanh cong");
        count++;
    }
}
console.log(`Tong: ${count} luot muon`);