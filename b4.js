let out;
let codeBook;
let nameBook;
let quantity;
let statusBook;
let count = 0;
let countLost = 0;
let countOver = 0;
let  countLarge = 0;
let countNormal = 0;
while (true) {
    out = prompt("Tiep tuc kiem ke sach (co/khong)?");
    if (out === "khong") {
        console.log(`
            Tong so sach da  kiem ke: ${count} cuon
            So sach mat: ${countLost} cuon
            So sach het hang: ${countOver} cuon
        `);
        break;
    }
    do {
        codeBook = prompt("Ma sach");
    } while (codeBook === "");
    nameBook = prompt("Ten sach");
    do {
        quantity = prompt("So luong sach dang co trong kho");
    } while (quantity < 0 && Number.isInteger(quantity));
    do {
        statusBook = +prompt(`
            Tinh trang sach:
            1: Binh thuong
            2: Mat
        `);
    } while (!(statusBook === 1 || statusBook ===2));
    if (statusBook === 2) {
        console.log("Tang so sach mat");
        countLost++;
    } else if (quantity === 0) {
        console.log("Tang so sach het hang");
        countOver++;
    } else if (quantity >= 10) {
        console.log("Tang so sach ton kho nhieu");
        countLarge++;
    } else {
        console.log("Tang so sach ton kho trung binh");
        countNormal++;
    }
    count++;
}