// get the value of a cookie
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// set a cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString() + ";path=/";
}

// check if the language cookie exists
let lang = getCookie("language");
if (!lang) {
    // figure the fuck out the browser lang
    let browserLang = navigator.language || navigator.userLanguage;

    // set the lang cookie based on the browser lang
    if (browserLang.includes("ja")) {
        lang = "ja";
    } else if (browserLang.includes("zh")) {
        lang = "zh";
    } else {
        lang = "en";
    }
    setCookie("language", lang, 365); // actually do it
}

// Function to show content based on the language cookie
function showContent() {
    lang = getCookie("language");
    if (lang === "ja") {
        document.getElementById("headtitle").innerHTML = "桐野の蝋人形";
        document.getElementById("aboutme").innerHTML = "ja-aboutme-test";
        document.getElementById("whatisthis").innerHTML = "ja-whatisthis-test";
        document.getElementById("webinfo").innerHTML = "ja-webinfo-test";
        document.getElementById("madeby").innerHTML = "作成者：ItzPeto";
    } else if (lang === "zh") {
        document.getElementById("headtitle").innerHTML = "桐乃的蠟板";
        document.getElementById("aboutme").innerHTML = "zh-aboutme-test";
        document.getElementById("whatisthis").innerHTML = "zh-whatisthis-test";
        document.getElementById("webinfo").innerHTML = "zh-webinfo-test";
        document.getElementById("madeby").innerHTML = "由 ItzPeto 製作";
    } else if (lang === "tw") {
        document.getElementById("headtitle").innerHTML = "Taiwanese test :P";
        document.getElementById("aboutme").innerHTML = "what the fuck is oatmeal";
        document.getElementById("whatisthis").innerHTML = "where do i get oatmeal?";
        document.getElementById("webinfo").innerHTML = "i have no fucking idea";
        document.getElementById("madeby").innerHTML = "uhh helo itzpeto made this shit";
    }
}

// Show the content based on the language cookie
showContent();
