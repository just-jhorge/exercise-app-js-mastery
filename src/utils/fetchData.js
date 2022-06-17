export const exerciseOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        "X-RapidAPI-Key": "e51d9966a3mshd0f6988bdda1232p14749cjsn231d269c037b",
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};
