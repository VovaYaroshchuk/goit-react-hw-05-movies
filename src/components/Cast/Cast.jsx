import {fetchMovieCredits} from "../services/API";
import styles from "./Cast.module.css";
import { useState, useEffect,  } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
        fetchMovieCredits(movieId).then(cast => {
            setCast(cast.cast);
        }).catch(error => {
            console.log(error);
        })}, [movieId]);
    return (
        <>
            <h1 className={styles.title}>Cast</h1>
            <ul className={styles.cast}>
                {cast.map(cast => (
                    <li className={styles.cast_item} key={cast.id}>
                        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} />
                        <p className={styles.name}>{cast.name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}   

export default Cast;