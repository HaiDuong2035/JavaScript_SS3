let out;
let readerName;
let codeCard;
let feedback;
let level;
let content;
let count = 0;
let countLevel_3 = 0;
let countLevel_2 = 0;
let countLevel_1 = 0;
let countFeedback_2 = 0;
let countFeedback_3 = 0;
while (out !== "khong") {
    out = prompt("Co khieu nai/phan hoi moi tu ban doc khong? (co/khong)");
    if (out.toLowerCase() === "khong"){
        break;
    }
    do {
        readerName = prompt("Ten ban doc");
    } while (!readerName);
    codeCard = prompt("Ma the ban doc");
    do {
        feedback = +prompt(`
            1: Phan nan / Khieu nai
            2: De xuat cai thien
            3: Phan hoi tich cuc / khen ngoi
            `);
        switch (feedback) {
            case 1:
                do {
                    level = +prompt(`
                        Muc do nghiem trong:
                            1: Nhe
                            2: Trung binh
                            3: Nghiem trong
                    `);
                    switch (level) {
                        case 1:
                            countLevel_1 ++;
                            content = prompt("Nhap noi dung khieu nai");
                            console.log("Xu ly tai quay - Khieu nai nhe");
                            break;
                        case 2:
                            countLevel_2 ++;
                            content = prompt("Nhap noi dung khieu nai");
                            console.log("Ghi nhan, se xu li trong ngay - Khieu nai trung binh");
                            break;
                        case 3:
                            countLevel_3 ++;
                            content = prompt("Nhap noi dung khieu nai");
                            console.log("Chuyen ngay lanh dao - Khieu nai nghiem trong");
                            break;
                    }
                } while (!(level === 1 || level === 2 || level === 3));
                break;
            case 2:
                content = prompt("Nhap noi dung de xuat");
                countFeedback_2 ++;
                console.log("Cam on! De xuat da duoc ghi nhan");
                break;
            case 3:
                content = prompt("Nhap noi dung phan hoi");
                console.log("Cam on ban da phan hoi tich cuc!");
                countFeedback_3 ++;
                break;
        }
    } while (!(feedback === 1 || feedback ===2 || feedback ===3));
    count ++;
}
console.log(`
    Tong so phan hoi / khieu nai da xu ly: ${count}
    So khieu nai nghiem trong: ${countLevel_3}
    So khieu nai trung binh: ${countLevel_2}
    So khieu nai nhe: ${countLevel_1}
    So de xuat cai thien: ${countFeedback_2}
    So phan hoi tich cuc: ${countFeedback_3}
`);