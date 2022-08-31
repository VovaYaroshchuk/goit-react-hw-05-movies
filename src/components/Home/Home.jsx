import {fetchTrendingMovies} from "../services/API";
import { useState, useEffect,  } from "react";
import { Link } from "react-router-dom";


export const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchTrendingMovies().then(movies => {
            setMovies(movies);
        }).catch(error => {
            console.log(error);
        })}, []);

        

    return (
        <>
            <h1>Trending films</h1>
            {movies && (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
        
       
    );
    }

