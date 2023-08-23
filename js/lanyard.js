const API_URL = 'https://api.lanyard.rest/v1';
const USERID = '453082265132466189';
const pfp = document.getElementById('pfp');
const statusid = document.getElementById('statusid')
const username = document.getElementById('username');
async function fetchResponse(userId) {
    try {
        const res = await fetch(`${API_URL}/users/${userId}`);
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}
async function setAvatar() {
    const {
        data: {
            discord_user: {
                avatar
            }
        }
    } = await fetchResponse(USERID);
    const fullUrl = `https://cdn.discordapp.com/avatars/${USERID}/${avatar}.webp?size=256`;
    pfp.src = fullUrl;
}
async function setUsername() {
    const {
        data: {
            discord_user: {
                global_name
            }
        }
    } = await fetchResponse(USERID);
    usernameid.innerHTML = global_name;
}
async function setStatus() {
    const {
        data: {
            discord_status
        }
    } = await fetchResponse(USERID);
    switch (discord_status) {
    case 'online':
        statusid.style.display = 'block';
        break;
    case 'dnd':
        statusid.style.display = 'block';
        break;
    case 'idle':
        statusid.style.display = 'none';
        break;
    case 'offline':
        statusid.style.display = 'none';
        break;
    }
}
function invoke() {
    setInterval(() => {
        setStatus();
    }, 1000);
    setUsername();
    setAvatar();
}

invoke();
