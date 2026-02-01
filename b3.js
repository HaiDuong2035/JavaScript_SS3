let out;
let nameReader;
let nameBook;
let dayNow;
let dayMore;
let countTrue = 0;
let countFalse = 0;
while (true) {
    out = prompt("Co tiep tuc gia han moi khong");
    if (out === "khong") {
        console.log(`
            So lan gia han thanh cong: ${countTrue}
            So lan  gia han khong thanh cong: ${countFalse}
        `);
        break;
    }
    nameReader = prompt("Ten ban doc");
    nameBook = prompt("Ten sach");
    do {
        dayNow = +prompt("So ngay da muon hien tai");
    } while (dayNow < 1 && Number.isInteger(dayNow));
    do {
        dayMore = +prompt("So ngay muon gia han them");
    } while (dayMore < 1 && Number.isInteger(dayMore));
    if (dayNow + dayMore > 60) {
        console.log("Khong duoc gia han: Tong thoi gian vuot qua 60 ngya toi da");
        countFalse++;
    } else if (dayNow > 45)  {
        console.log("Khong duoc gai han: Da muon qua lau (>45 ngay)");
        countFalse;
    } else {
        console.log("Gia han thanh cong");
        countTrue;
    }
}