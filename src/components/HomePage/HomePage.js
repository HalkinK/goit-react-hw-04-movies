import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../services/moviesApi";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();

  useEffect(() => {
    const renderTrendingMovies = () => {
      api
        .fetchMoviesTrend()
        .then((data) =>
          setTrendingMovies((trendingMovies) => [...trendingMovies, ...data])
        );
    };
    renderTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ poster_path, title, id }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location.pathname,
                },
              }}
            >
              <img
                src={`${imgUrl}${poster_path}`}
                alt={`${title}`}
                width="200"
                height="200"
              />
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
