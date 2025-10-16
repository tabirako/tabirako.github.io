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
        document.getElementById("aboutme").innerHTML = "私は<strong id='usernameid'>KC(KirisameCirno)</strong>と申します。<br>普段は<strong>(KC)</strong>でいいです。<br>音楽全般、ゲームとアニメ関係のが好きです。<br>色んな料理と飲み物、特に台湾茶が好きです。アマチュア無線を扱っている人（第二級アマチュア無線技士+台湾三等業餘無線電人員)<br>幾つかの楽器を演奏できる、メインはピアノとアコーディオン、フルートも少し。喉歌もできるです<br>ご覧いただきありがとうございます！";
        document.getElementById("whatisthis").innerHTML = "このサイトについて：私のビジョン";
        document.getElementById("webinfo").innerHTML = "できるだけ簡単な方法で個人ページを作りました！ここで世界中の人々に自由に私の興味と生活を共有できます。SNSはいつもユーザーに何をすべきかを仄めかしています。でも個人サイトでは制限なく、自由に発揮できる場所であります。";
        document.getElementById("madeby").innerHTML = "ItzPeto によって作成";
    } else if (lang === "zh") {
        document.getElementById("headtitle").innerHTML = "KC隨草";
        document.getElementById("aboutme").innerHTML = "我叫做<strong id='usernameid'>KC(KirisameCirno)</strong><br>平常叫<strong>(KC)</strong>就好。<br>興趣是音樂、遊戲、動畫和漫畫。<br>喜歡各種料理和飲料﹐尤其是台灣茶。同時是業餘無線電操作者（現在是台灣三等業餘無線電人員+日本第二級アマチュア無線技士）<br>彈奏幾種樂器鋼琴、主要是鋼琴、手風琴和一點點的長笛﹐還會一些呼麥<br>感謝您的來訪！";
        document.getElementById("whatisthis").innerHTML = "關於這個網站：我的願景";
        document.getElementById("webinfo").innerHTML = "試圖用簡單的方法製作了個人網站！我可以在這裡與世界上的人們自由分享我的興趣和生活。社群軟體往往試圖藉由指引它的使用者該做什麼來使他們喪失獨立性。個人網站是個可以讓我不受限制、自由發揮的平台。";
        document.getElementById("madeby").innerHTML = "由 ItzPeto 製作";
    } else if (lang === "tw") {
        document.getElementById("headtitle").innerHTML = "KC个簿仔紙";
        document.getElementById("aboutme").innerHTML = "小生號作<strong id='usernameid'>KC(KirisameCirno)</strong>，平時叫<strong>KC</strong>就好<br><ruby>家己<rp>(</rp><rt>Ka-ddi</rt><rp>)</ruby>个趣味是音樂、電動佮動畫。<br>逐種个料理佮飲料攏佮意，尤其是台灣茶<br>我嘛會曉操作業餘<ruby>收音機<rp>(</rp><rt>ラジオ</rt><rp>)</rp> </ruby>現此時有台灣三等業餘無線電人員+日本第二級アマチュア無線技士）<br>會曉足濟樂器，主要彈鋼琴、拉手風琴佮歕一點𥰔仔﹐嘛曉呼麥<br>感謝來咱這坐喔！";
        document.getElementById("whatisthis").innerHTML = "這是啥款所在：咱个願望";
        document.getElementById("webinfo").innerHTML = "盡量用簡單个方法做了這个所在！佇這會使自由佮全世界个人分享我个趣味佮生活。別人大公司管个所在嘛攏愛伊个使用者去做𪜶欲佮意个，當然<ruby>家己<rp>(</rp><rt>Ka-ddi</rt><rp>)</ruby>就袂獨立。這才是一个會使無受限制，自由發揮个所在";
        document.getElementById("madeby").innerHTML = "Itzpeto 造个所在";
    }
}

// Show the content based on the language cookie
showContent();
