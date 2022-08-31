import axios  from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=b34281a335cdd1f5098a9d04801c5c05";

export async function fetchTrendingMovies() {
  const response = await axios.get(`/trending/movie/day?${API_KEY}`);
  return response.data.results;
}

export async function feachSearchMovie(search, page) {
  const response = await axios.get(`/search/movie?${API_KEY}&query=${search}&page=${page}`);
  return response.data;
}

export async function fetchMovieDetails(movieId) {
    const response = await axios.get(`/movie/${movieId}?${API_KEY}`);
    return response.data;
}

export async function fetchMovieCredits(movieId) {
    const response = await axios.get(`/movie/${movieId}/credits?${API_KEY}`);
    return response.data;
}

export async function fetchMovieReviews(movieId) {
    const response = await axios.get(`/movie/${movieId}/reviews?${API_KEY}`);
    return response.data;
}




        
