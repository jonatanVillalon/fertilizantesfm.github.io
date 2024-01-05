/** politica de cookies **/

const avisoCookie = document.querySelector("#cookie1");
const buttonCookie = document.querySelector("#politica-cookies");
const modalCookies = document.querySelector("#modal-cookies");
const closeBtnCookies = document.querySelector(".close-btn-cookies");

function getCookie(c_name) {
    let c_value = document.cookie;
    let c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        let c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

function setCookie(c_name, value, exdays) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    let c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}
if (getCookie('tiendaaviso') != "1") {
    avisoCookie.style.display = "block";
}

function ponerCookie() {
    setCookie('tiendaaviso', '1', 365);
    avisoCookie.style.display = "none";
}

buttonCookie.addEventListener("click", () => {
    modalCookies.style.display = "block";
});

closeBtnCookies.addEventListener("click", () => {
    modalCookies.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target == modalCookies) {
        modalCookies.style.display = "none";
    }
});