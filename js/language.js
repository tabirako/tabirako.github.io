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
        document.getElementById("headtitle").innerHTML = "KCの随想録";
        document.getElementById("aboutme").innerHTML = "私は<strong id="usernameid">KC(KirisameCirno)</strong>と申します。<br>
                                                        音楽全般、ゲームとアニメ関係のが好きです。<br>
                                                        ピアノ、アコーディオンとフルート奏者であります。喉歌もできるです<br>
                                                        ご覧いただきありがとうございます！";
        document.getElementById("whatisthis").innerHTML = "このサイトについて";
        document.getElementById("webinfo").innerHTML = "できるだけ簡単な方法で個人ページを作りました！";
        document.getElementById("madeby").innerHTML = "作成者：ItzPeto";
    } else if (lang === "zh") {
        document.getElementById("headtitle").innerHTML = "KC的隨草";
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
