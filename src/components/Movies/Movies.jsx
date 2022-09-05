import {feachSearchMovie} from "../services/API";
import { useState, useEffect, } from "react";
import { Link, useSearchParams } from "react-router-dom";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchUrl = searchParams.get("search");
    const pageUrl = searchParams.get("page");


    const searchMovie = (e) => {
        e.preventDefault();
        if (!search) {
            return;
        }
        setSearchParams({search: search, page: page});
        setLoading(true);
        setError(false);
        setMovies([]);
        setPage(1);
        setTotalPages(1);
        setTotalResults(0);
        feachSearchMovie(search, page).then(data => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results);
            setLoading(false);
        }).catch(error => {
            setError(true);
            setLoading(false);
        }
        );
    }
    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
            setSearchParams({search: search, page: page + 1});
            feachSearchMovie(search, page + 1).then(data => {
                setMovies(movies.concat(data.results));
            }).catch(error => {
                setError(true);
            }
            );
        }
    }
    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
            setSearchParams({search: search, page: page - 1});
            feachSearchMovie(search, page - 1).then(data => {
                setMovies(data.results);
            }).catch(error => {
                setError(true);
            }
            );
        }
    }

    useEffect(() => {
        if (searchUrl && pageUrl) {
            feachSearchMovie(searchUrl, pageUrl).then(data => {
                setMovies(data.results);
                setTotalPages(data.total_pages);
                setTotalResults(data.total_results);
                setLoading(false);
            }).catch(error => {
                setError(true);
                setLoading(false);
            }
            );
        }
        else {
            setSearch("");
            setMovies ([]);
            setTotalResults(0);
            setTotalPages(1);
        }
    }
    , [searchUrl, pageUrl]);

    
    

    // useEffect(() => {
    //     if (search) {

    //     setSearchParams(value !== search ? { search } : {});
    //     console.log(searchParams);

    //     feachSearchMovie(search, page).then(data => {
    //         setMovies(data.results);
    //         setTotalPages(data.total_pages);
    //         setTotalResults(data.total_results);
    //     }).catch(error => {
    //         setError(true);
    //     }
    //     );}
    // }
    // , [search, page]);
    return (
        <>
            <form onSubmit={searchMovie}>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {movies && (
                <>
                    <h1>Results</h1>
                    <p>{totalResults} results found</p>
                    <ul>
                        {movies && movies.map(movie => (
                            <li key={movie.id}>
                                {movie.poster_path &&
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />}
                                
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={previousPage} disabled={page === 1}>Previous</button>
                    <button onClick={nextPage} disabled={page === totalPages}>Next</button>
                </>
            )}
        </>
    );

        
}

export default Movies;