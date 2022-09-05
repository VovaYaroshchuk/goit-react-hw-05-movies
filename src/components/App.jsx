import { Routes, Route, NavLink  } from "react-router-dom";
import { lazy, Suspense } from "react";



const Home = lazy(() => import('./Home/Home'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (

    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}> 
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
      </Suspense>

    
    
    </div>
  );
};
