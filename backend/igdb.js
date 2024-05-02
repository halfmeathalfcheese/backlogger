const CLIENT_ID = 'l1newilvqdtuj1p2150ngp23s5ah53'
const CLIENT_SECRET = 'exn7chf77ucxpr37lfrphsxf44a5z2';

const getToken = async () => {
    const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, {
        method: 'POST'
    })
    const data = await response.json();
    console.log(data);
    return data.access_token;
}

const search = async (token, query) => {
    try {
        const response = await fetch(`https://api.igdb.com/v4/games`, {
            method: 'POST',
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${token}`
            },
            body: `fields name; search "${query}";`
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to search');
    }
}

module.exports = { getToken, search };