let numReturn;
do {
    numReturn = +prompt("Hom nay co bao nhieu nguoi tra sach");
} while (Number.isInteger(numReturn) && numReturn > 0);
let nameReturn;
let nameBook;
let dayReturn;
let count = 0;
let countLate = 0;
for (let i = 0; i < numReturn; i++){
    nameReturn = prompt("Ten nguoi tra");
    nameBook = prompt("Ten sach");
    do {
        dayReturn = +prompt("So ngay da muon");
    } while (Number.isInteger(dayReturn) && dayReturn > 0);
    if (dayReturn <= 14) {
        console.log("Tra dunng han");
    } else if (dayReturn <= 21) {
        console.log("Tra muon nhe, phat nhac nho");
        countLate++;
    } else {
        console.log("Qua han nghiem trong, can ghi bien ban phat");
        countLate++;
    }
    count++;
};
console.log(`
    Tong so luot tra sach: ${count}
    So luot tra muon: ${countLate}
`);