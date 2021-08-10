import { useState, useEffect, lazy, Suspense, useRef } from "react";
import {
  useParams,
  Route,
  NavLink,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import api from "../../services/moviesApi";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

export default function MovieDetailsPage() {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const { current } = useRef(location.state);

  const [movie, setMovie] = useState({
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: null,
    id: null,
  });
  const [isVisibleCast, setIsVisibleCast] = useState(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState(false);

  useEffect(() => {
    const renderMovieDetails = () => {
      api
        .fetchMovieDetails(movieId)
        .then(({ poster_path, title, overview, vote_average, genres, id }) =>
          setMovie({
            poster_path,
            title,
            overview,
            genres,
            vote_average,
            id,
          })
        );
    };
    renderMovieDetails();
  }, [movieId]);

  const makeVisibleCast = () => {
    if (isVisibleReviews === true) {
      setIsVisibleReviews(false);
    }
    setIsVisibleCast(true);
  };

  const makeVisibleReviews = () => {
    if (isVisibleCast === true) {
      setIsVisibleCast(false);
    }

    setIsVisibleReviews(true);
  };

  const goBack = () => history.push(current ? current.from : "/");

  return (
    <>
      <button onClick={goBack}>
        <span>Go back</span>
      </button>
      {movie && (
        <>
          <div>
            <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p>
                User Score: <span>{movie.vote_average * 10}%</span>
              </p>
              <h3>Overview</h3>
              Overview:<span>{movie.overview}</span>
              <h4>Genres</h4>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
            </div>
          </div>
          <hr />
          <span>Additional information</span>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                }}
                onClick={makeVisibleCast}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                }}
                onClick={makeVisibleReviews}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<h1>Загружаем...</h1>}>
            <Route path={`${path}/:cast`}>
              {movie && isVisibleCast && <Cast />}
            </Route>

            <Route path={`${path}/:reviews`}>
              {movie && isVisibleReviews && <Reviews />}
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
