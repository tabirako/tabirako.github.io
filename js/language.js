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
    } else if (browserLang.includes("ko")) {
        lang = "ko";
    } else {
        lang = "en";
    }
    setCookie("language", lang, 365); // actually do it
}

// store the multi language for table
const translationForTable = {
    en: {
        game: "The game I made",
        note: "Fricking Roblox killed Chat RIP"
    },
    ja: {
        game: "作ったゲーム",
        note: "チャット改悪により、くそになった"
    },
    zh: {
        game: "我做的遊戲",
        note: "被他媽的Roblox搞了，聊天欄已死"
    },
    tw: {
        game: "Kaddi創个電動",
        note: "乎恁娘Roblox創孔，袂趟講話啊"
    },
    ko: {
        game: "내가 만든 게임",
        note: "로블록스가 채팅개편으로 망쳤어, 띵복에 액션빔"
    }
};

// Function to show content based on the language cookie
function showContent() {
    lang = getCookie("language");
    
    if (lang === "en") {
        // Do nothing, do not need translation
    } else {

        // this part rewrite part of the table
        // this <span> style sheet will override the one in the main html file
        // added || translationForTable["en"]; part in case the cookie or the table index are incorrect
        const t = translationForTable[lang] || translationForTable["en"];
        document.getElementById("robloxGameLink").innerHTML = `
        <a href="https://www.roblox.com/games/17202293479/Teahouse-Umigiri-A-Tea-making-simulator" style="color:blue">
        <s>${t.game}</s>
        </a>
        <span style="color: black; font-size: 70%; white-space: nowrap;">${t.note}</span>
        `;

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
        } else if (lang === "ko") {
            document.getElementById("headtitle").innerHTML = "KC의 개인기록";
            document.getElementById("aboutme").innerHTML = "저는<strong id='usernameid'>KC(KirisameCirno)</strong>라고 합니다<br>나는 음악, 게임 그리고 애니메이션과 관련된 모든 것을 좋아해.<br>온갖 종류의 음식과 음료를 좋아하며, 특히 대만의 차를 좋아해.<br>일본에선 2급 아마추어 무선통신 자격증을 대만에선 3급 아마추어 무선통신 자격증을 가지고 있어.<br>나는 여러가지 악기를 연주 할 수있어, 주로 피아노와 아코디언을 하고, 플루트도 조금 연주 할 수 있어.<br>오버톤 창법도 어느정도 할 수 있어<br>방문해줘서 고마워.";
            document.getElementById("whatisthis").innerHTML = "무슨 홈페이지인가요?";
            document.getElementById("webinfo").innerHTML = "이 홈페이지는 제 개인 웹사이트이며, 제가 관심있는 것들에 대해서 이야기하면서 인터넷을 통해서 다른 사람들과 제 삶과 취미를 공유하는 공간입니다!<br>웹 3.0을 비롯한 그 이후의 인터넷은 끊임 없이 유저들의 개성을 제한하려 해왔습니다.이 홈페이지는 현대의 소셜 미디어의 제약 없이 저 자신을 표현하기 위한 하나의 공간입니다.";
            document.getElementById("madeby").innerHTML = "Made by Itzpeto";
        }
    }
}

// Show the content based on the language cookie
showContent();
