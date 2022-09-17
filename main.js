
// Mảng nhập liệu
var mangSo = [];

// DOM lấy ID
function getEle(id) {
    return document.getElementById(id);
}
//Lấy dữ liệu từ người dùng nhập vào
getEle("btnSoN").onclick = function () {
    var nhapSoN = getEle("nhapSoN").value * 1;
    mangSo.push(nhapSoN);
    getEle("inSoN").innerHTML = mangSo;
}



//Bài 1: Tổng các số dương trong mảng
getEle("btnSoDuong").onclick = function () {
    var sum = 0;
    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > 0) {
            sum = sum + mangSo[i];
        }
    }
    var ketQua = "Tổng số dương là: " + sum;
    getEle("inSoDuong").innerHTML = ketQua;
}


//Bài 2: Đếm có bao nhiêu số dương trong mảng
getEle("btnDiemDuong").onclick = function () {
    var diem = 0;
    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > 0) {
            diem++;
        }
    }
    var ketQua = "Số dương: " + diem + " số";
    getEle("inDiemDuong").innerHTML = ketQua;
}

// Bài 3: Tìm số nhỏ nhất trong mảng
getEle("btnMin").onclick = function () {

    var min = mangSo[0];

    for (var i = 1; i < mangSo.length; i++) {
        if (min > mangSo[i]) {
            min = mangSo[i];
        }
    }
    var ketQua = "Số nhỏ nhất trong mảng là: " + min;
    getEle("inMin").innerHTML = ketQua;
}

//Bài 4: Tìm số dương nhỏ nhất trong mảng
getEle("btnMinDuong").onclick = function () {

    var mangSoDuong = [];

    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > 0) {
            //Tạo mảng số dương mới
            mangSoDuong.push(mangSo[i]);
            //Tìm sô dương lớn nhất
            var min = mangSoDuong[0];
            for (var i = 1; i < mangSo.length; i++) {
                if (min > mangSoDuong[i]) {
                    min = mangSoDuong[i];
                }
            }
            var ketQua = "Số dương nhỏ nhất trong mảng là: " + min;
            getEle("inMinDuong").innerHTML = ketQua;
        } else {
            getEle("inMinDuong").innerHTML = "Không có số dương";
        }
    }
}

// Bài 5: Tìm số chẵn cuối cùng trong mảng
getEle("btnSoChan").onclick = function () {

    var mangSoChan = [];

    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] % 2 == 0) {
            //Tạo mới mảng số chẵn
            mangSoChan.push(mangSo[i]);
            //Tìm chẵn cuối cùng trong mảng
            for (var i = mangSoChan.length - 1; i < mangSoChan.length; i--) {

                if (mangSoChan[i] % 2 == 0) {
                    getEle("inSoChan").innerHTML = "Số chẵn cuối cùng trong mảng là: " + mangSoChan[i];
                } else {
                    getEle("inSoChan").innerHTML = "-1";
                }
                break;
            }
        }
    }
}
// Bài 7: Sắp xếp mảng theo thứ tự tăng dần
getEle("btnSapXep").onclick = function () {

    for (var i = 0; i < mangSo.length - 1; i++) {
        for (var j = i + 1; j < mangSo.length; j++) {
            if (mangSo[i] > mangSo[j]) {
                //hoán vị
                var temp = mangSo[i];
                mangSo[i] = mangSo[j];
                mangSo[j] = temp;
            }
        }
    }
    var ketQua = "Mảng sắp xếp tăng dần: " + mangSo;
    getEle("inSapXep").innerHTML = ketQua;
}
// Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn
getEle("btnSoSanh").onclick = function () {
    var soAm = 0;
    var soDuong = 0;
    //Tính tổng số âm và dương
    for (var i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > 0) {
            soDuong++;
        } else {
            soAm++;
        }
    }
    //So sánh số lượng số âm và dương
    if (soDuong > soAm) {
        getEle("inSoSanh").innerHTML = "Số Dương > Số Âm";
    } else if(soDuong < soAm){
        getEle("inSoSanh").innerHTML = "Số Dương < Số Âm";
    }else {
        getEle("inSoSanh").innerHTML = "Số Dương = Số Âm";
    }

}