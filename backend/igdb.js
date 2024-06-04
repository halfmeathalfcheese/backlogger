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

const getAllGames = async (token) => {
    let offset = 0;
    let data = [];
    try {
        while (true) {
            const response = await fetch(`https://api.igdb.com/v4/games`, {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': `Bearer ${token}`
                },
                body: `fields 
                id, name, alternative_names, artworks, 
                category, cover, dlcs, expanded_games, 
                first_release_date, franchise, genres, involved_companies, 
                parent_game, platforms, rating, rating_count, similar_games, 
                slug, standalone_expansions, status, storyline, summary, tags, 
                total_rating, total_rating_count, updated_at, url, websites;
                limit 500;
                offset ${offset};`
            });
            const newData = await response.json();
            if (newData.length === 0) {
                break;
            }
            data = data.concat(newData);
            offset += 500;
            console.log(`Fetched ${offset} games...`)
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to search');
    }
}

const getAllArtworks = async (token) => {
    let offset = 0;
    let data = [];
    try {
        while (true) {
            const response = await fetch(`https://api.igdb.com/v4/artworks`, {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': `Bearer ${token}`
                },
                body: `fields 
                id, animated, game,
                image_id, url;
                limit 500;
                offset ${offset};`
            });
            const newData = await response.json();
            if (newData.length === 0) {
                break;
            }
            data = data.concat(newData);
            offset += 500;
            console.log(`Fetched ${offset} artworks...`)
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to search');
    }
}

const getAllCovers = async (token) => {
    let offset = 0;
    let data = [];
    try {
        while (true) {
            const response = await fetch(`https://api.igdb.com/v4/covers`, {
                method: 'POST',
                headers: {
                    'Client-ID': CLIENT_ID,
                    'Authorization': `Bearer ${token}`
                },
                body: `fields
                id, animated, game, image_id, url;
                limit 500;
                offset ${offset};`
            });
            const newData = await response.json();
            if (newData.length === 0) {
                break;
            }
            data = data.concat(newData);
            offset += 500;
            console.log(`Fetched ${offset} covers...`)
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to search');
    }
}

const search = async (token, query) => {
    try {
        const response = await fetch(`https://api.igdb.com/v4/games`, {
            method: 'POST',
            headers: {
                'Client-ID': CLIENT_ID,
                'Authorization': `Bearer ${token}`
            },
            body: `fields name, release_dates; search "${query}";`
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to search');
    }
}

module.exports = { getToken, search, getAllGames, getAllArtworks, getAllCovers };