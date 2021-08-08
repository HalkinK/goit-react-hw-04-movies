import { useParams } from "react-router";
import { useState, useEffect } from "react";
import api from "../../services/moviesApi";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const renderMovieReviews = () => {
      api.fetchMovieReviews(movieId).then(setReviews);
    };
    renderMovieReviews();
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <span>{content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>We don't have reviews for this movie.</span>
      )}
    </>
  );
}
