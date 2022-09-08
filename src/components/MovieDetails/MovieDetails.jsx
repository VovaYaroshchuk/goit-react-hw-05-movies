import {fetchMovieDetails} from "../services/API";
import { useState, useEffect, } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import styles from "./MovieDetails.module.css";

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
            <ul className={styles.list}>
                <li className={styles.title}>
                <Link to="cast">{movie.title}</Link>
                </li>
                <li className={styles.img}> <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></li>
                <li className={styles.overview}>{movie.overview}</li>
            </ul>
            <Link className={styles.link} to="reviews">Reviews</Link>
            <Outlet />
        </>
    );
}

export default MovieDetails;