let out;
let readerName;
let codeBook;
let bookName;
let dayWait;
let priority;
let count = 0;
let success = 0;
let refuse = 0;
let wait = 0;
while (true) {
    out = prompt("Co yeu cau dat muon truoc moi khong? (co/khong)")
    if (out.toLowerCase() === "khong") {
        console.log(`
            Ket thuc ca, xin bao cao tong hop
            Tong so yeu cau da xu ly: ${count}
            So yeu cau duoc dat truoc thanh cong: ${success}
            So yeu cau bi tu choi: ${refuse}
            So yeu cau cho xet duyet ${wait}
        `);
        break;
    }
    readerName = prompt("Ten ban doc");
    codeBook = prompt("Ma sach");
    bookName = prompt("Ten sach");
    do {
        dayWait = +prompt("So ngay cho du kien");
    } while (dayWait < 1 && Number.isInteger(dayWait));
    do {
        priority = +prompt(`
            1: Sinh vien binh thuong
            2: Giang vien / Nghien cuu sinh
            3: Nhan vien thu vien / Dac cach    
        `);
    } while (!(priority === 1 || priority === 2 || priority === 3));
    if (dayWait > 45) {
        console.log("Tu choi: thoi gian cho qua lau (>45 ngay)");
        refuse ++;
    } else if (priority === 3) {
        console.log("Dat truoc thanh cong - Uu tien dac cach cao nhat");
        success ++;
    } else if (priority === 2 || dayWait <= 30) {
        console.log("Dat truoc thanh cong - Uu tien giang vien va nghien cuu");
        success ++;
    } else if (priority === 1 || dayWait <= 21) {
        console.log("Dat truoc thanh cong");
        success ++;
    } else {
        console.log("Dat truoc tam thoi - Cho xet duyet them");
        wait ++;
    }
    count ++;
}