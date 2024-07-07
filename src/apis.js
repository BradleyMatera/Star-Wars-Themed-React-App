export const API_KEYS = {
    GIPHY_API_KEY: 'nUd1WbL9rt49X5KOHyt04T78vkgcgRhc',
    GOOGLE_CLOUD_API_KEY: 'AIzaSyAPo20Rijvv5kgT-edUrYcoz3PWHLKPfxA',
    UNSPLASH_ACCESS_KEY: 'BZ5mhRDKBrlWaG25mxdGH160W57wJAfgEcDAm1LF7z8',
    UNSPLASH_SECRET_KEY: 'M1YMY3QqTTmlfgLHd15oXiQRlf4yKPsDG4YW8HmHqvw',
};

export const fetchGif = (searchTerm) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEYS.GIPHY_API_KEY}&q=${searchTerm}&limit=1`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.data && data.data.length > 0) {
                return data.data[0].images.fixed_height.url;
            }
            throw new Error('No GIFs found');
        })
        .catch(error => {
            console.error('Error fetching GIF:', error);
            return null;
        });
};

export const fetchUnsplashImage = (query) => {
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${API_KEYS.UNSPLASH_ACCESS_KEY}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching Unsplash image:', error);
            return { urls: { regular: 'https://via.placeholder.com/400x200?text=Ad+Image' } };
        });
};

export const translateText = (text, targetLanguage) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEYS.GOOGLE_CLOUD_API_KEY}`;
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage
        })
    }).then(response => response.json());
};

// Fetch Star Wars characters from SWAPI
export const fetchStarWarsCharacters = () => {
    const url = 'https://swapi.dev/api/people/';
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.results)
        .catch(error => {
            console.error('Error fetching Star Wars characters:', error);
            return [];
        });
};

// Fetch Star Wars images from the Star Wars Images API
export const fetchStarWarsImages = () => {
    const url = 'https://akabab.github.io/starwars-api/api/all.json';
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching Star Wars images:', error);
            return [];
        });
};