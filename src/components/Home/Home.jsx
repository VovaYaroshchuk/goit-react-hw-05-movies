import {fetchTrendingMovies} from "../services/API";
import { useState, useEffect,  } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchTrendingMovies().then(movies => {
            setMovies(movies);
        }).catch(error => {
            console.log(error);
        })}, []);

        

    return (
        <>
            <h1 className={styles.title}>Trending films</h1>
            {movies && (
                <ul className={styles.list}>
                    {movies.map(movie => (
                        <li className={styles.item} key={movie.id}>
                            <Link className={styles.link}  to={`/movies/${movie.id}`}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
        
       
    );
    }

export default Home;
