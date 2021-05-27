function CHECK_divtop(cls) {
    var scrollTop = $(window).scrollTop();
    var elementOffset = $(cls).offset().top;
    var distance = (elementOffset - scrollTop);
    return distance;
}
function xoa_tindang(id, text) {
   var cf = confirm(text);
    if(cf) {
        $.ajax({
            type: "POST",
            url: full_url + "/xoa_tindang/",
            data: {"id": id},
            success: function (data) {
                console.log(data);
                if(data != "") alert(data);
                else {
                    $(".dv-gr-tin-"+id).remove();
                }
            }
        });
    } 
}
function gia_han_tin(id, text){
    var cf = confirm(text);
    if(cf) {
        $.ajax({
            type: "POST",
            url: full_url + "/gia_han_tin/",
            data: {"id": id},
            success: function (data) {
                // console.log(data);
                try {
                    data = JSON.parse(data);
                    $(".js_time_giahan_"+id).html(data.time_text);
                    alert(data.messa);
                } catch (e) {
                    console.log(data);
                }
            }
        });
    }
}
function up_tin_lh(id) {
    var x = $(".dv-gr-tin-" + id).html();

    $.ajax({
        type: "POST",
        url: full_url + "/up_tin_lh/",
        data: {"id": id},
        success: function (data) {
            if (data == 1) {
                $(".dv-gr-tin-" + id).remove();
                $(".dv-list-tindang").prepend('<div class="dv-gr-tin no_box dv-gr-tin-' + id + '">' + x + '</div>');
                $(".grmb-hienthi-" + id).html("");


                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();

                $(".js-time-" + id).html(day + "/" + month + "/" + year + " " + hours + ":" + minutes);

                $(".grmb-stt").each(function (key) {
                    $(this).html(key + 1);
                });
            }
            else {
                alert(data);
            }
        }
    });
}

var send_d_dangnhap = 0;

function check_dangnhap_v2(text_false) {
    var check = 0;
    $(".cls_data_check_form_check_dangky").each(function () {
        var val = $(this).val().trim();
        var id = $(this).attr('id');
        var rong = $(this).attr('data-rong');
        var email = $(this).attr('data-email');
        var place = $(this).attr('placeholder');

        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (rong == 1 && (val == "" || val == place)) {
            alert($(this).attr('data-msso'));
            $(this).focus();
            $(".ajax_img_loading").hide();
            check = 1;
            send_d_dangnhap = 0;
            return false;
        }
        else if (email == 1 && !regex.test(val) && val != "") {
            alert($(this).attr('data-msso1'));
            $(this).focus();
            $(".ajax_img_loading").hide();
            check = 1;
            send_d_dangnhap = 0;
            return false;
        }
    });

    if (check == 0) {
        if (send_d_dangnhap == 0) {
            send_d_dangnhap = 1;
            $(".img_load_from_dktv").show();
            var dataString = $('#dangnhap').serializeArray();
            $.ajax({
                type: "POST",
                url: full_url + "/check-dang-nhap/",
                data: dataString,
                success: function (response) {
                    var obj = jQuery.parseJSON(response);
                    if (obj.error > 0) {
                        alert(text_false);
                    } else {
                        window.location.reload();
                    }
                    $(".img_load_from_dktv").hide();
                    send_d_dangnhap = 0;
                }
            });
        }
    }
}

var send_ajax = 0;

function ADD_sao(idsp, id) {
    if ($(".ad_sao_" + idsp).length > 0) {
        $(".ad_sao_" + idsp).removeClass('checked');
        for (var i = 1; i <= id; i++) {
            $(".ad_sao_" + idsp + "_" + i).addClass('checked');
        }
    }
}

$(function () {
    $(".ad_sao").each(function () {
        var idsp = $(this).attr('data');
        var sao = $(this).attr('data-sao');
        ADD_sao(idsp, sao);
    });
});

function ADD_sao_num(idsp, sao) {
    if (send_ajax == 1) return false;
    if ($(".ad_sao_" + idsp).length > 0) {
        $(".ad_sao_" + idsp).parent().append('<img src="images/load1.gif" alt="">');
        send_ajax = 1;
        $.ajax({
            type: "POST",
            url: full_url + "/add-sao/",
            data: {"idsp": idsp, "sao": sao},
            success: function (data) {
                send_ajax = 0;
                $(".ad_sao_" + idsp).parent().find('img').remove();
                $(".ad_sao_" + idsp).removeClass("ad_sao_" + idsp);
                alert(data);
            }
        });
    }
    ;
};

function SEARCH_product() {
    if ($(".dv-timkiem-active").length == 0) $(".dv-timkiem").addClass("dv-timkiem-active");
    else $(".dv-timkiem").removeClass("dv-timkiem-active");
    event.stopPropagation();
}

function TIMKIEM_tinrao(url) {
    var key_timkiem = $(".key_timkiem").val().trim().replace(/ /g, "+");
    var key_linhvuc = $(".key_linhvuc").val();
    var key_sanpham = $(".key_sanpham").val();
    var key_khuvuc = $(".key_khuvuc").val();
    window.location.href = url + "/?key=" + key_timkiem + "&lv=" + key_linhvuc + "&sp=" + key_sanpham + "&kv=" + key_khuvuc;
}

function SEARCH_timkiem(url, cls) {
    if ($(cls).val() == '')
        $(cls).focus();
    else
        window.location.href = url + $(cls).val().trim().replace(/ /g, "+");
}

$('.input_search_enter').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        var cls = $(this).attr('data');
        var href = $(this).attr('data-href');
        SEARCH_timkiem(href, cls);
    }
});
var is_key_check = '';

function NOPHOSO_ungtuyen(id, tieude, noidung, key) {
    $(".dv-popup-cont-child .nd textarea.nd_guimail").hide();
    if (key == 'gtbb') {
        $(".noidung_popup").height(80);
        $(".nd_guimail").height(100);
        $(".dv-popup-cont-child .nd textarea.nd_guimail").show();
    } else {
        $(".noidung_popup").height(210);
    }
    $(".dv-popup-cont-child h3 span").html(tieude);
    if (is_key_check != key) {
        $(".dv-popup-cont-child .nd textarea").val('');
        is_key_check == key
    }

    $(".dv-popup-cont-child .nd textarea.noidung_popup").attr('placeholder', noidung);
    $(".key_send").val(key);
    $(".id_send").val(id);
    $(".dv-popup-cont").show();
    $(".dv-popup-cont-child").show();
}

function DONG_popup() {
    $(".dv-popup-cont").hide();
    $(".dv-popup-cont-child").hide();
}

function GUI_noidung_popup() {
    $(".load_popup").show();
    if ($(".noidung_popup").val() == '') {
        $(".noidung_popup").focus();
        $(".load_popup").hide();
    } else {
        $.ajax({
            type: "POST",
            url: "",
            data: {
                "id_send": $(".id_send").val(),
                "key_send": $(".key_send").val(),
                "nd_guimail": $(".nd_guimail").val(),
                "noidung_popup": $(".noidung_popup").val(),
                "cap_popup": $('#cap_popup').val(),
                "action_ajax": "send_popup"
            },
            success: function (data) {
                alert(data);
                $(".load_popup").hide();
                DONG_popup();
            }
        });
    }
}

var m_send_d = 0;

function DANGKY_email(url, name = '') {
    if (m_send_d == 0) {
        m_send_d = 1;
        $(".ajax_img_loading_mail").show();
        var formData = new FormData($('form#dk_email_nhantin')[0]);
        formData.append('inputfile', $('#inputfile')[0].files[0]);
        $.ajax({
            type: "POST",
            url: url + "/dang-ky-mail/",
            data: formData,
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                try {
                    data = JSON.parse(response);
                    $("#capcha_hd").val(data.new_cap);
                    alert(data.message);
                    $("#ip_sentmail").val('');
                    $("#ip_sentmail_name").val('');
                    $("#ip_sentmail_phone").val('');
                    if (name != "" && $(".is_file_home").length > 0) {
                        $(".is_file_home").text(name);
                    }
                } catch (e) {
                    alert("ERR!");
                }
                // console.log(response)
                $("#ip_sentmail").focus()
                $(".ajax_img_loading_mail").hide();
                m_send_d = 0;
            }
        });
    }

}

var check_guisodt = 0;

function GUI_sodienthoai(url) {
    var v_phone = $("#s_dienthoai").val();
    var v_name = $("#ip_sentmail_name").val();
    $(".ajax_img_loading").show();
    if (!CHECK_phone("#s_dienthoai")) {
        $("#s_dienthoai").focus();
        alert($("#s_dienthoai").attr('err'));
        $(".ajax_img_loading").hide();
    } else {
        if (check_guisodt == 0) {
            check_guisodt = 1;
            $.ajax({
                type: "POST",
                url: url + "/dang-ky-phone/",
                data: {
                    "v_phone": v_phone,
                    "v_name": v_name,
                    "capcha_hd": $('#capcha_hdphone').val(),
                    "action_ajax": "dang-ky-phone"
                },
                success: function (data) {
                    $(".ajax_img_loading").hide();
                    try {
                        data = JSON.parse(data);
                        $("#capcha_hdphone").val(data.new_cap);
                        alert(data.message);
                    } catch (e) {
                        console.log(data);
                    }
                    check_guisodt = 0;
                    $("#s_dienthoai").focus()
                }
            });
        }
    }

}

function addCart(urlpath, alert_dat_hang, idsp, qty = '1') {
    if (idsp == '' || idsp <= 0 || isNaN(idsp) || qty == '' || qty <= 0 || isNaN(qty)) {
        alert(alert_dat_hang);
    }
    else {
        $.ajax({
            type: "POST",
            url: urlpath + "/add-cart/",
            data: {"idsp": idsp, "qty": qty},
            success: function (data) {
                window.location.href = urlpath + "/gio-hang/";
            }
        });
    }
}

function GOTO_sport(cls) {
    var target = $(cls);
    if (target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 700);
    }
}

var is_busy = false;
var page = 1;
var stopped = false;

function LOAD_ajax_product(url, id, step, key, total, numview, id_run = 0) {
    if (is_busy == true) {
        return false;
    }
    if (stopped == true) {
        return false;
    }
    is_busy = true;
    page++;
    $(".ajax_img_loading").show();
    $.ajax(
        {
            type: 'post',
            dataType: 'text',
            url: url,
            data: {
                "page": page,
                "id": id,
                "step": step,
                "key": key,
                "numview": numview,
                "total": total,
                "id_run": id_run
            },
            success: function (result) {
                $(".dv-danhsachpto").append(result);
            }
        })
        .always(function () {
            $(".ajax_img_loading").hide();

            setTimeout(function () {
                GOTO_sport(".ajax_scron_" + page);
            }, 700);
            is_busy = false;
        });
    return false;
}

function RefreshFormMailContact(FormNameContact) {
    FormNameContact.reset();
}

var icheck_lienhe = 0;

function CHECK_send_lienhe(url, id_form, cls = '.cls_data_check_form') {
    if (icheck_lienhe == 0) {
        icheck_lienhe = 1;
        $(".ajax_img_loading").show();
        var check = 0;
        $(cls).each(function () {
            var val = $(this).val().trim();
            var id = $(this).attr('id');
            var rong = $(this).attr('data-rong');
            var phone = $(this).attr('data-phone');
            var email = $(this).attr('data-email');
            var d_check = $(this).attr('data-check');
            var place = $(this).attr('placeholder');

            var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (rong == 1 && (val == "" || val == place)) {
                alert($(this).attr('data-msso'));
                $(this).focus();
                $(".ajax_img_loading").hide();
                check = 1;
                icheck_lienhe = 0;
                return false;
            }
            else if (email == 1 && !regex.test(val) && val != "") {
                alert($(this).attr('data-msso1'));
                $(this).focus();
                $(".ajax_img_loading").hide();
                check = 1;
                icheck_lienhe = 0;
                return false;
            }

            else if (d_check == 1 && !$(this).is(":checked")) {
                alert($(this).attr('data-msso'));
                $(this).focus();
                $(".ajax_img_loading").hide();
                check = 1;
                icheck_lienhe = 0;
                return false;
            }
        });

        if (check == 0) {
            var formData = new FormData($(id_form)[0]);
            if ($('#inputfile').length > 0) {
                formData.append('inputfile', $('#inputfile')[0].files[0]);
            }
            if ($('#inputfile_1').length > 0) {
                formData.append('inputfile_1', $('#inputfile_1')[0].files[0]);
            }
            $.ajax({
                type: "POST",
                url: url + "send_form/",
                data: formData,
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                success: function (data) {

                    icheck_lienhe = 0;
                    $(".ajax_img_loading").hide();
                    if ($("#id_token").length == 0) {
                        if (data == 1) {

                            $(id_form)[0].reset();
                            alert($(".lang_ok").val());
                            window.location.reload();

                        }
                        else {
                            $("#mabaove").focus();
                            alert($(".lang_false").val());
                            // console.log(data);
                        }
                    } else {
                        try {
                            data = JSON.parse(data);
                            if (data.err == 1) {

                                // thanh toan paypal
                                if ($("#type3").length > 0 && $("#type3").is(":checked")) {
                                    $(".dv-paypal").show();
                                    $(".dv-paypal-cont").show();
                                    TIEN_paypal(data.thanhtien, data.id);
                                    $(".paypal_form_new").click();
                                }
                                // 
                                else {
                                    $(id_form)[0].reset();
                                    alert($(".lang_ok").val());
                                    window.location.reload();
                                }
                            }
                            else {
                                alert($(".lang_false").val());
                                window.location.reload();
                                // console.log(data);
                            }
                            $("#id_token").val(data.token);
                        } catch (e) {
                            alert("ERR#3");
                        }
                    }
                    console.log(data);

                }
            });
        }
    }
    return false;
}

function updateQty_notthis(url, id) {
    var qty = $("#product-quantity-" + id).val();
    if (qty == '' || qty <= 0 || isNaN(qty) || !Number.isSafeInteger(parseFloat(qty))) {
        alert($(".cls_datafalse").val());
        window.location.reload();
    }
    else {
        $.ajax({
            type: "POST",
            url: url,
            data: {'id': id, "qty": qty, "post": "update-qty"},
            success: function (data) {
                if (data != '') {
                    if (data == "reload") {
                        window.location.reload();
                    }
                    else {
                        try {
                            var js_de = JSON.parse(data);
                            $(".td_thanhtien_" + id).html(js_de.thanhtien);
                            $(".tb_tongtien").html(js_de.tongtien);
                        } catch (e) {
                            console.log(data);
                        }

                    }
                }
            }
        });
    }
}

function updateQty(url, id, obj) {
    var qty = $(obj).val();
    if (qty == '' || qty <= 0 || isNaN(qty) || !Number.isSafeInteger(parseFloat(qty))) {
        alert($(".cls_datafalse").val());
        window.location.reload();
    }
    else {
        $.ajax({
            type: "POST",
            url: url,
            data: {'id': id, "qty": qty, "post": "update-qty"},
            success: function (data) {
                if (data != '') {
                    if (data == "reload") {
                        window.location.reload();
                    }
                    else {
                        try {
                            var js_de = JSON.parse(data);
                            $(".td_thanhtien_" + id).html(js_de.thanhtien);
                            $(".tb_tongtien").html(js_de.tongtien);
                        } catch (e) {
                            console.log(data);
                        }

                    }
                }
            }
        });
    }
}

function CHECK_phone(cls) {
    var flag = false;
    var phone = $(cls).val().trim();
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        var arrayphone = ['03', '07', '08', '05', '09'];
        if (arrayphone.includes(firstNumber) && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        }
    }
    return flag;
}

$("body").click(function () {
    $(".dv-timkiem").removeClass("dv-timkiem-active");
});
$(".body-nohide").click(function (event) {
    event.stopPropagation();
});

function PLAY_video(id) {
    $(".video_view_top iframe").attr("src", "https://www.youtube.com/embed/" + id + "?rel=0&autoplay=1");
    setTimeout(function () {
        GOTO_sport(".id_hide_video");
    }, 200);
};
$(".menu-active a").each(function () {
    var href = $(this).attr("href");
    href = href.replace(fullpath, "");
    href = href.replace(/\//g, "");
    href = href.toLowerCase();
    var url = window.location.href;
    url = url.replace(fullpath, "");
    url = url.replace(/\//g, "");
    url = url.toLowerCase();
    if (href == url) {
        $(this).parents('.menu-active > li').eq(0).addClass("active");
        return;
    }
});

function CHECK_room(id, url) {
    var from = $(".ngayden" + id).val();
    var to = $(".ngaydi" + id).val();
    var adu = $(".nguoilon" + id).val();
    var chil = $(".tremem" + id).val();
    var pro = $(".makhuyemai" + id).val();
    var room = '';
    if (id == 1) {
        room = $(".loaiphong" + id).val();
    }
    window.location.href = url + "/check-room/?from=" + from + "&to=" + to + "&adu=" + adu + "&chil=" + chil + "&pro=" + pro + "&room=" + room;
}

function GET_diadiem(obj, cls, text, url) {
    $.ajax({
        type: "POST",
        url: url,
        data: {'action_s': 'get_diadiem', "id": $(obj).val(), "text": text},
        success: function (data) {
            $(cls).html(data);
            // console.log(data)
        }
    });
}

function SHOW_timkiem_bds(url) {
    var uri = "?tin=" + $("#id_loaitin").val();
    if ($("#id_quan").val() != "") uri += "&t=" + $("#id_quan").val();
    if ($("#id_huyen").val() != "") uri += "&q=" + $("#id_huyen").val();
    if ($("#id_phuong").val() != "") uri += "&p=" + $("#id_phuong").val();
    var list_id = "";
    $(".id_tinhnang").each(function () {
        if ($(this).val() != "" && $(this).val() != 0) {
            if (list_id != "")
                list_id += "-";
            list_id += $(this).val();
        }
    });
    if (list_id != "") uri += "&tn=" + list_id;
    if ($(".cls_nangcao").val() != '') uri += "&nc=true";
    window.location.href = url + uri;
}

function SHOW_timkiemnc() {
    if ($(".hide_search.activex").length > 0) {
        $(".hide_search.activex").removeClass("activex");
        $('.hide_search select option[value=""]').attr('selected', 'selected');
        $(".cls_nangcao").val('');
    }
    else {
        $(".hide_search").addClass("activex");
        $(".cls_nangcao").val('true');
    }
}

var popup_active = 0;

function LOAD_popup_new(url, wid = '') {
    $(".dv-popup-new-child").removeAttr("style");
    if (wid != '') $(".dv-popup-new-child").width(wid);
    $("body").append('<div class="dv-loadding-pop"><img src="images/loadernew.gif" alt=""></div>');
    $(".dv-nd-popup").load(url, function () {
        $(".dv-loadding-pop").remove();
        $("body").addClass("body_hide");
        resize_popup_new();
    });
}

function resize_popup_new() {
    popup_active = 1;
    $(".dv-popup-new").addClass("acti");
    if (($(".dv-popup-new-child").height() + 20) > $(window).height()) {
        $(".dv-popup-new-child").addClass("actiok");
    }
    else {
        $(".dv-popup-new-child").removeClass("actiok");
    }
}

$(window).load(function () {
    if (popup_active == 1) {
        resize_popup_new();
    }
});
$(window).resize(function () {
    if (popup_active == 1) {
        resize_popup_new();
    }
});
// $(".popup-close, .dv-popup-new").click(function(){
$(".popup-close").click(function () {
    $(".dv-nd-popup").html("");
    popup_active = 0;
    $("body").removeClass("body_hide");
    $(".dv-popup-new").removeClass("acti");
});
$(".dv-nd-popup").click(function (event) {
    event.stopPropagation();
});

function LOAD_height(cls) {
    var maxHeight = 0;
    $(cls).each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    if (maxHeight != 0) $(cls).height(maxHeight);
}

function ADD_list_sp(id) {
    alert(id)
}

function LOAD_tinhthanh(obj, cls, name) {
    $.ajax({
        type: "POST",
        url: full_url + "/load-tinh-thanh/",
        data: {'id': $(obj).val().trim(), 'name': name},
        success: function (data) {
            $(cls).html(data);
            LOAD_duong();
        }
    });
}

function LOAD_duong() {
    var tthanh = $("#ContentPlaceHolder2_ddlCustomers").val();
    var qhuyen = $("#ContentPlaceHolder2_ddlOrders").val();
    $.ajax({
        type: "POST",
        url: full_url + "/load_duong_ajd/",
        data: {'tthanh': tthanh, 'qhuyen': qhuyen},
        success: function (data) {
            $("#dia_chi_jsd").html(data);
        }
    });
}

function LOAD_danhmuc(obj, cls, name) {
    $.ajax({
        type: "POST",
        url: full_url + "/load_danhmuc/",
        data: {'id': $(obj).val().trim(), 'name': name},
        success: function (data) {
            // console.log(data)
            $(cls).html(data);
        }
    });
}

// $(function () {
//     $.ajax({
//         type: "POST",
//         url: full_url + "/captcha/",
//         data: {"action_ajax": "captcha"},
//         success: function (data) {
//             $('#capcha_hd').val(data);
//         }
//     });
// })

function add_num_sp(id, loai) {
    var num = $(id).val();
    if (!isNaN(num)) {
        if (loai == "-1") {
            if (num > 1) num--;
        }
        else {
            num++;
        }
        $(id).val(num);
    }

}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function ADD_yeuthich(obj, id) {
    var loai = $(obj).attr('data');
    var cook_yt = getCookie('sp_yeuthich');
    if (cook_yt == null) cook_yt = id;
    else {
        list_new = cook_yt.split(",");
        var cook_yt = "";
        if (loai == 0) {
            cook_yt = id;
            $(obj).attr('data', '1');
            $(".p_yeuthich").addClass('acti');
        }
        else {
            $(obj).attr('data', '0');
            $(".p_yeuthich").removeClass('acti');
        }
        list_new.forEach(function (key) {
            if (key != id) {
                if (cook_yt == "") {
                    cook_yt += key;
                }
                else {
                    cook_yt += "," + key;
                }
            }
        });
    }
    setCookie('sp_yeuthich', cook_yt, 365);

}

if ($("#upload_mutile_tindang").length > 0) {
    document.querySelector('#upload_mutile_tindang').onchange = function () {
        $(".dv-anh-js-load-err").html("");
        [].forEach.call(this.files, function (file) {
            var reader = new FileReader();
            reader.onloadend = function () {
                if (file && file.name.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
                    // if (file.size > 2097152) { //1mb
                    if (file.size > 1024000) { // 500kb
                        $(".dv-anh-js-load-err").append('<span>' + file.name + " " + $(".anh_false_size").val() + '</span>');
                    }
                    else {
                        $('.dv-anh-js-load').append('<div class="dvgrimgs-js js_ajax_run_upload"><img src="' + reader.result + '" class="img" isname="' + file.name + '"> <a class="cur" onclick="remove_images_js(this, 0)">X</a></div>');
                    }
                }
                else $(".dv-anh-js-load-err").append('<span>' + file.name + " " + $(".anh_false_type").val() + '</span>');
            }
            reader.readAsDataURL(file);
        });
        $("#upload_mutile_tindang").val("");

        setTimeout(function () {
            dang_anh_ajax();
        }, 1000);
    };
}

function dang_anh_ajax() {
    $(".js_ajax_run_upload").append('<img src="images/loadernew.gif" class="load">');
    dang_anh_runrun();
}

function dang_anh_runrun() {
    if ($(".js_ajax_run_upload").length > 0) {
        var img = $(".js_ajax_run_upload").eq(0).find(".img").attr("src");
        var isname = $(".js_ajax_run_upload").eq(0).find(".img").attr("isname");
        var id_edit = $(".id_edit").val();
        $.ajax({
            type: "POST",
            url: full_url + "/send_img_bs64ajax/",
            data: {"img": img, "id_edit": id_edit, "isname": isname},
            success: function (response) {
                // console.log(response)
                $(".js_ajax_run_upload").eq(0).html(response);
                $(".js_ajax_run_upload").eq(0).removeClass("js_ajax_run_upload");
                dang_anh_runrun();
            }
        });
    }
}

function xoa_anh_ajax() {
    $(".dv-anh-js-load").html("");
    XOA_anh_bdsmb(0);
}

function remove_images_js(obj, id) {
    $(obj).parent().remove();
    if (id > 0) {
        XOA_anh_bdsmb(id);
    }
}

function XOA_anh_bdsmb(id) {
    var id_edit = $(".id_edit").val();
    $.ajax({
        type: "POST",
        url: full_url + "/xoa_img_bs64ajax/",
        data: {"id": id, "id_edit": id_edit},
        success: function (response) {
            // console.log(response)
        }
    });
}

function dang_tin_thuong_sub() {
    var flg = 0;
    if($(".id_vip").val() != 1){
        $(".js_load_dangtin_thuong").show();
    }
    $(".check_err_data").each(function () {
        var val = $(this).attr("data");
        if ($(this).val() == val) {
            alert($(this).attr("mess"));
            $(this).focus();
            flg = 1;
            $(".id_vip").val("0");
            $(".js_load_dangtin").hide();
            return false;
        }
    });
    if (flg == 0 && CKEDITOR.instances.paEditor.document.getBody().getChild(0).getText().trim() == '') {
        alert($(".err_empty_nd").val());
        $(".paEditor ").focus();
        flg = 1;
        $(".id_vip").val("0");
        $(".js_load_dangtin").hide();
        return false;
    }
    if (flg == 0) {
        var id = $(".id_edit").val();
        var id_vip = $(".id_vip").val();
        for (instance in CKEDITOR.instances) {
            CKEDITOR.instances[instance].updateElement();
        }
        $.ajax({
            type: "POST",
            url: full_url + "/dang_tin_bds/",
            // url: full_url + "/check_dang_tin/",
            data: $('#fom_dangtin').serializeArray(),
            // data: {"id": id, "id_vip": id_vip},

            success: function (response) {
                console.log(response);
                $(".js_load_dangtin").hide();
                try {

                    var js_de = JSON.parse(response);
                    alert(js_de.ms);
                    if (js_de.err == 0) {
                        $(".dv-anh-js-load").html("");
                    }
                    window.location.href = full_url + "/quan-ly-dang-tin/"
                } catch (e) {
                    console.log(response);
                }
                // if (response == 1) {
                //     $("#fom_dangtin").submit();
                // }
                // else {
                //     $(".id_vip").val("0");
                //     alert(response);
                // }
            }
        });
    }
}

function dang_tin_thuong_vip() {
    $(".id_vip").val("1");
    $(".js_load_dangtin_vip").show();
    dang_tin_thuong_sub();
}

function is_acti_images(id) {
    $.ajax({
        type: "POST",
        url: full_url + "/update_acti_img/",
        data: {"id": id},
        success: function (response) {
            // console.log(response)
        }
    });

}

function popupwindow(url, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
}

function SEARCH_timkiem_tin(url, cls) {
    window.location.href = url + $(cls).val().trim().replace(/ /g, "+") + "&pr=" + $("#sl_idpr").val();
}

$('.input_search_enter').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        var cls = $(this).attr('data');
        var href = $(this).attr('data-href');
        SEARCH_timkiem_tin(href, cls);
    }
});


function SHOW_notifi_aixem(url, var_img_cn, is_body, is_title) {
    var notify;
    if (Notification.permission == 'default') {
        //bat hoi thong bao
    }
    else {
        notify = new Notification(is_title,
            {
                body: is_body,
                icon: var_img_cn,
                tag: url
            }
        );
        notify.onclick = function () {
            window.location.href = url;
        }
    }
}


function check_nc_js() {
    if ($(".js_search_nc.hide.off").length > 0) {
        $(".js_search_nc.hide.off").removeClass("off");
        $(".js_search_nc.hide").addClass("on");
        $(".sp_text_tknc").html($(".sp_text_tknc").attr("off"));
    }
    else {
        $(".js_search_nc.hide.on").addClass("off");
        $(".js_search_nc.hide").removeClass("on");
        $(".sp_text_tknc").html($(".sp_text_tknc").attr("on"));
    }
};

function check_timkiem_nc() {
    var tkiem = "";
    $(".js_search_nc.on").each(function () {
        if ($(this).val() != "" && $(this).val() != 0) {
            tkiem += "&" + $(this).attr("id").replace(/_/g, "-") + "=" + $(this).val();
        }
    });
    window.location.href = full_url + "/search/?bds=888" + tkiem;
}

var is_send_chat = 0;

function SEND_chat() {
    var chat = $(".is_key_up").val();
    if (chat.length >= 2 && is_send_chat == 0) {
        $(".is_key_up").val('');
        $(".dv-ndchat-js").append('<div class="dv-group-chat you"><div class="user"><img src="' + var_img_cn + '" alt=""></div><div class="message">' + chat + '</div><div class="clr"></div></div>');
        div_to_bottom('dv-ndchat-js');
        is_send_chat = 1;
        $.ajax({
            type: "POST",
            url: full_url + "/send_chat/",
            data: {
                "idkey": $(".is_key_up").attr("idkey"),
                "chat_ms": chat,
                "idcus": $(".is_key_up").attr("idcus"),
            },
            success: function (data) {
                if (data != "") alert(data);
                is_send_chat = 0;

            }
        });
    }
    else {
        $(".is_key_up").focus();
    }
}

function div_to_bottom(id) {
    var objDiv = document.getElementById(id);
    objDiv.scrollTop = objDiv.scrollHeight;
}

$(function () {
    $('.is_key_up').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            SEND_chat();
        }
    });
    $(".is_key_up_send").click(function () {
        SEND_chat();
    });
})

function on_chat_mb(id, idcus) {
    $(".is_key_up").attr("idcus", idcus);
    $(".sp_isnews_" + id + idcus).hide();
    $(".js_is_load_id").val(0);
    on_chat(id);
}

var loai_chat = 0;

function on_chat(id) {
    $('.dv-chatonline-cont').addClass('on');
    $('.is_key_up').attr('idkey', id);
    $("#dv-ndchat-js").html('');
    loai_chat = 1;
}


$(function () {
    if (!window.Notification) {
    }
    else {
        Notification.requestPermission(function (p) {
            if (p === 'denied') {
                //bat hoi thong bao
            }
        });
    }
});

function SHOW_notifi(is_title, is_body) {
    var notify;
    if (Notification.permission == 'default') {
        //bat hoi thong bao
    }
    else {
        notify = new Notification(is_title,
            {
                body: is_body,
                icon: var_img_cn,
                tag: full_url + '/tin-nhan/'
            }
        );
        notify.onclick = function () {
            window.location.href = full_url + '/tin-nhan/';
        }
    }
}

function check_new_ms() {
    SHOW_notifi('Bạn có một thông báo mới từ Bannha888.com', 'Có ai đó vừa nhắn tin cho bạn!');
};
$("img.isload").attr("src", "/images/rolling.svg");

function lazyload() {
    $("img.isload").each(function () {
        if ($(this).offset().top <= (window.innerHeight + window.pageYOffset)) {
            $(this).removeClass("isload");
            $(this).attr("src", $(this).attr("data-original"));
        }

    });
}

$(function () {
    lazyload();
    $("img.isload").css("opacity", "1");
});
document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);

var time_cho_noti = 0;
var time_cho_noti_all = 0;
// $(window).on('load', function () {
//     setInterval(function () {
//         SEND_ajax_time_invite();
//         if (time_cho_noti > 0) {
//             time_cho_noti--;
//         }
//         if (time_cho_noti_all > 0) {
//             time_cho_noti_all--;
//         }
//     }, var_time_invite);
// });
var is_send_send_ajax_time_invite = 0;

function SEND_ajax_time_invite() {
    if (is_send_send_ajax_time_invite == 0) {
        is_send_send_ajax_time_invite = 1;
        var is_id = $(".js_is_load_id").val();
        // ai xem tin
        var id_aidangtheodoi_js = 0;
        if ($(".id_aidangtheodoi_js").length > 0) {
            id_aidangtheodoi_js = $(".id_aidangtheodoi_js").val();
        }
        // console.log(loai_chat)
        // 
        $.ajax({
            type: "POST",
            url: full_url + "/send_ajax_time_invite/",
            data: {
                "idkey": $('.is_key_up').attr('idkey'),
                "loai": loai_chat,
                "is_id": is_id,
                "idcus": $(".is_key_up").attr("idcus"),
                "id_aidangtheodoi_js": id_aidangtheodoi_js
            },
            success: function (data) {
                // console.log(data);
                is_send_send_ajax_time_invite = 0;

                if (data != "") {
                    try {
                        var data_js = JSON.parse(data);

                        // xu ly thong bao tin
                        if (data_js.thongbao_tin_new == 1 && var_mot_ty != "tin-nhan") {
                            check_new_ms();
                        }
                        if (data_js.thongbao_tin != "") {
                            $(data_js.thongbao_tin).show();
                            // $(".js_notifica_is").val(data);
                            var dataarr = data_js.thongbao_tin.split(",");
                            var dataleng = dataarr.length;
                            for (var i = 0; i < dataleng; i++) {
                                if ($(".js_notifica_is" + dataarr[i].trim()).length == 0) {
                                    $(".js_notifica_is").addClass(dataarr[i].trim().replace(/\./g, ""));
                                }
                            }
                            if (var_mot_ty == "tin-nhan") {
                                for (var i = 0; i < dataleng; i++) {
                                    if ($(dataarr[i].trim() + "_check_new").length == 0) {
                                        window.location.href = full_url + "/tin-nhan/";
                                        // check_new_ms();
                                    }
                                }
                            }
                        }

                        // 
                        // xu lys load chat
                        if (data_js.message != "") {
                            $("#dv-ndchat-js").append(data_js.message);
                            $(".js_is_load_id").val(data_js.id_cuoi);
                            div_to_bottom('dv-ndchat-js');
                            loai_chat = 0;
                        }
                        // ai vua xem tin
                        if (data_js.list_ds_theodoi != "") {
                            $(".dv_list_ds_theodoi .js-marquee-wrapper .js-marquee .js-marquee-wrapper .js-marquee").prepend(data_js.list_ds_theodoi);
                            $(".id_aidangtheodoi_js").val(data_js.id_first);

                        }

                        if (data_js.js_notice_vip != '') {
                            $(".js_notice_vip").html(data_js.js_notice_vip);
                            $(".dv-nocation-1").addClass('actii');
                            setTimeout(function () {
                                $(".dv-nocation-1").removeClass('actii');
                                $(".dv-nocation-2").removeClass('actii');
                            }, var_time_cho);
                        }
                        if (data_js.is_body != "" && time_cho_noti == 0) {
                            time_cho_noti = 10;
                            SHOW_notifi_aixem(data_js.url, data_js.var_img_cn, data_js.is_body, data_js.is_title);
                        }
                        //xu ly all nuti
                        if (data_js.all_body != "" && time_cho_noti_all == 0) {
                            time_cho_noti_all = 5;
                            notifi_all(data_js.all_title, data_js.all_body, data_js.all_full_url, data_js.all_img_cn);
                        }
                    }
                    catch (e) {
                        console.log(e)
                        console.log(data)
                    }

                }
            }
        });
    }
    return false;
};

function notifi_all(is_title, is_body, full_url, var_img_cn) {
    var notify;
    if (Notification.permission == 'default') {
    }
    else {
        notify = new Notification(is_title,
            {
                body: is_body,
                icon: var_img_cn,
                tag: full_url
            }
        );
        notify.onclick = function () {
            window.location.href = full_url;
        }
    }
} 