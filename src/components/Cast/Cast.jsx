import {fetchMovieCredits} from "../services/API";

import { useState, useEffect,  } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    useEffect(() => {
        fetchMovieCredits(movieId).then(cast => {
            setCast(cast.cast);
        }).catch(error => {
            console.log(error);
        })}, []);
    return (
        <>
            <h1>Cast</h1>
            <ul>
                {cast.map(cast => (
                    <li key={cast.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} />
                        <p>{cast.name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}   