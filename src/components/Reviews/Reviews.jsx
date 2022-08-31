import {fetchMovieReviews} from "../services/API";

import { useState, useEffect,  } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(reviews => {
            setReviews(reviews.results);
        }).catch(error => {
            console.log(error);
        })}, []);
        
    return (
        <>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.author}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}