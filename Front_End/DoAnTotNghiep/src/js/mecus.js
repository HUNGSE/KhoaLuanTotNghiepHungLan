// quan tâm bài viết
function click_qtam(idbv, idmember) {
    $.ajax({
        type: "POST",
        url: full_url + "/quan-tam-du-an/",
        data: {"idbv": idbv, "idmember": idmember},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                alert("Yêu cầu tư vấn của bạn đã gửi đến chủ tin đăng");
                window.location.reload();
            }
        }
    });
}

// theo dõi trang cá nhân người dùng
function theoGoi(iduser, userfollow, unsubscribe) {
    $.ajax({
        type: "POST",
        url: full_url + "/theo-doi/",
        data: {"following": userfollow, "follower": iduser, "unsubscribe": unsubscribe},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                alert("Bạn đã theo dõi thành công");
                window.location.reload();
            } else if (obj.error == 1) {
                alert("Bạn đã theo dõi trước đó rồi");
                window.location.reload();
            } else if (obj.error == 2) {
                alert("Bạn đã huỷ theo dõi");
                window.location.reload();
            }
        }
    });
}

// Tính tiền khi nạp gold
function SetCurrency(obj) {
    var myvalue = $(obj).val();
    if (myvalue == '') {
        $(obj).val(0);
        return;
    }
    myvalue = myvalue.replace(/\./g, '');
    myvalue = parseInt(myvalue);
    myvalue = addCommas(myvalue);
    $(obj).val(myvalue);
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

function nap_gold() {
    var sogold = $("#amount-number").val();
    sogold = sogold.replace(/\./g, '');
    var numberlimit = 100000000;
    if (sogold > numberlimit) {
        $("#amount-number").val(numberlimit);
        sogold = numberlimit;
    }
    $.ajax({
        type: "POST",
        url: full_url + "/get-charge-gold/",
        data: {"gold": sogold},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                $("#tien_nap").html(obj.sotiennap);
                $("#phantramnhan").html(obj.phantram);
                $("#sotiennhan").html(obj.sotiennhan);
                $(".num_price_paypal").val(obj.giado.replace(/\,/g, ''));
                $(".ma_donhang_paypal").val(sogold);
                $('.thongbao').css('display', 'block');
            }
        }
    });
    SetCurrency($("#amount-number"));

}

function chongoi(mintien) {
    $("#amount-number").val(mintien);
    nap_gold();
}

// Chỉnh sửa bài viết quản lý khách hàng
function editbv(id, tenkhachhang, phone, nhucau, ghichu) {
    $("#edit-bv").val(id);
    $("#tenkhachhang").val(tenkhachhang);
    $("#phone").val(phone);
    $("#nhu_cau").html(nhucau);
    $("#ghi_chu").html(ghichu);
}

// tim kiếm trong trang quản lý khách hàng
function tim_kiem(fullurl) {
    var datatimkiem = $("#timkiem").val();
    var urltimkiem = fullurl + "/?search=" + datatimkiem;
    if (datatimkiem != '' && datatimkiem != null) {
        window.location.replace(urltimkiem);
    }
}

// mua gói tin
function muagoitin(giatien, urlcalback) {
    $('.dv-paypal-cont').css('display', 'block');
    $('.dv-paypal').css('display', 'block');
    $(".num_price_paypal").val(giatien);
    $(".return").val(urlcalback);
    $("#paypal_form_new").submit();
}

// Kích hoạt VIP
function giakichhoatvip() {
    var goitindang = $("#goitindang").val();
    var songaydang = $("#songaydang").val();
    var sogold = $("#sogold").html();
    sogold = sogold.replace(/\,/g, '');
    $.ajax({
        type: "POST",
        url: full_url + "/check-active-vip/",
        data: {"goitindang": goitindang, "songaydang": songaydang, "sogold": sogold},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                $("#goldthanhtoan").html(obj.goldthanhtoan + " ");
                $("#gia-gold").html(obj.goldthanhtoan);
                $("#gia-vnd").html(obj.goldthanhtoan);
                $("#cannapgold").html(obj.cannapgold + " ");
                $('.taikhoan').css('display', 'block');
                $('.title-kq').css('display', 'block');
            }
        }
    });
}

function activevip(mabv) {
    var goitindang = $("#goitindang").val();
    var songaydang = $("#songaydang").val();
    $.ajax({
        type: "POST",
        url: full_url + "/active-vip/",
        data: {"goitindang": goitindang, "songaydang": songaydang, "mabv": mabv},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                alert(obj.mess);
                window.location.reload();
            }
        }
    });
}

function activevipcount(mabv) {
    var goitindang = $("#goitindang").val();
    var songaydang = $("#songaydang").val();
    $.ajax({
        type: "POST",
        url: full_url + "/active-vip/",
        data: {"goitindang": goitindang, "songaydang": songaydang, "mabv": mabv, "loaivip": 1},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                alert(obj.mess);
                window.location.reload();
            }
        }
    });
}


function activevip(mabv) {
    var goitindang = $("#goitindang").val();
    var songaydang = $("#songaydang").val();
    $.ajax({
        type: "POST",
        url: full_url + "/active-vip/",
        data: {"goitindang": goitindang, "songaydang": songaydang, "mabv": mabv},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                alert(obj.mess);
                window.location.reload();
            }
        }
    });
}

//Vip tài khoản
function giakichhoatvip_account() {
    var goitindang = $("#goitindang").val();
    var songaydang = $("#songaydang").val();
    var sogold = $("#sogold").html();
    sogold = sogold.replace(/\,/g, '');
    $.ajax({
        type: "POST",
        url: full_url + "/check-active-vip/",
        data: {"goitindang": goitindang, "songaydang": songaydang, "sogold": sogold, "loaivip": 1},
        success: function (response) {
            var obj = jQuery.parseJSON(response);
            if (obj.error == 0) {
                $("#goldthanhtoan").html(obj.goldthanhtoan + " ");
                $("#gia-gold").html(obj.goldthanhtoan);
                $("#gia-vnd").html(obj.goldthanhtoan);
                $("#cannapgold").html(obj.cannapgold + " ");
                $('.taikhoan').css('display', 'block');
                $('.title-kq').css('display', 'block');
            }
        }
    });
}

