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
        document.getElementById("aboutme").innerHTML = "私は<strong id='usernameid'>KC(KirisameCirno)</strong>と申します。<br>音楽全般、ゲームとアニメ関係のが好きです。<br>色んな飲み物と料理も好きです。アマチュア無線を扱っている人（第三級アマチュア無線技士+台湾三等業餘無線電人員)<br>ピアノ、アコーディオンとフルート奏者であります。喉歌もできるです<br>ご覧いただきありがとうございます！";
        document.getElementById("whatisthis").innerHTML = "このサイトについて";
        document.getElementById("webinfo").innerHTML = "できるだけ簡単な方法で個人ページを作りました！";
        document.getElementById("madeby").innerHTML = "作成者：ItzPeto";
    } else if (lang === "zh") {
        document.getElementById("headtitle").innerHTML = "KC的隨草";
        document.getElementById("aboutme").innerHTML = "我叫做<strong id='usernameid'>KC(KirisameCirno)</strong>。<br>興趣是音樂，遊戲，動畫和漫畫。<br>喜歡各種飲料和料理，尤其是台灣茶，同時是業餘無線電操作者（現在是台灣三等業餘無線電人員+日本第三級アマチュア無線技士）<br>能夠彈奏鋼琴，手風琴和一點點的長笛<br>感謝您的來訪！";
        document.getElementById("whatisthis").innerHTML = "關於這個網站";
        document.getElementById("webinfo").innerHTML = "試圖用簡單的方法製作了網站";
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
