import {fetchMovieDetails} from "../services/API";
import { useState, useEffect, } from "react";
import { useParams, Outlet, Link } from "react-router-dom";

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
   
    useEffect(() => {
        fetchMovieDetails(movieId).then(movie => {
            setMovie(movie);
        }).catch(error => {
            console.log(error);
        })}, [movieId]);
    return (
        <>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.overview}</p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
        </>
    );
}

export default MovieDetails;