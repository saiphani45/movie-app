const BASE_URL = "https://api.themoviedb.org/3";

const apiKey = import.meta.env.VITE_API_KEY;


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    console.log("query", query)
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}