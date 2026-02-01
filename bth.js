const MAT_KHAU_DUNG = "admin123";
let soLanNhap = 0;
let daDangNhap = false;

while (soLanNhap < 3) {
    let matKhau = prompt("Nhập mật khẩu đăng nhập:");

    if (matKhau === MAT_KHAU_DUNG) {
        console.log("Đăng nhập thành công!");
        daDangNhap = true;
        break;
    } else {
        soLanNhap++;
        console.log("Sai mật khẩu! Lần thử: " + soLanNhap);
    }
}

if (!daDangNhap) {
    console.log("Hệ thống bị khóa");
    return;
}

while (true) {
    let luaChon = prompt(
        "===== MENU THƯ VIỆN =====\n" +
        "1. Nhập lô sách mới\n" +
        "2. Vẽ sơ đồ kệ sách\n" +
        "3. Thoát\n" +
        "Nhập lựa chọn (1-3):"
    );

    switch (luaChon) {

        case "1":
            let soLuong = Number(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
            let tongTien = 0;

            for (let i = 1; i <= soLuong; i++) {
                let gia = Number(prompt("Nhập giá tiền cuốn sách thứ " + i));

                if (gia <= 0) {
                    console.log("Giá không hợp lệ, bỏ qua cuốn này!");
                    continue;
                }

                tongTien += gia;
            }

            console.log("Tổng giá trị nhập kho đợt này là: " + tongTien);
            break;

        case "2":
            for (let khu = 1; khu <= 3; khu++) {
                for (let ke = 1; ke <= 5; ke++) {

                    if (khu === 2 && ke === 3) {
                        console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
                        continue;
                    }

                    console.log("Khu vực " + khu + " - Kệ " + ke);
                }
            }
            break;

        case "3":
            console.log("Hẹn gặp lại!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

    if (luaChon === "3") {
        break;
    }
}
