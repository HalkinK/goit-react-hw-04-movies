import { useState, useEffect } from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import api from "../../services/moviesApi";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { url } = useRouteMatch();
  const [request, setRequest] = useState("");
  const location = useLocation();

  const handleRequestChange = (event) => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRequest(searchQuery);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    const renderMoviesByQuery = () => {
      api.fetchMoviesByQuery(request).then(setMovies);
    };
    renderMoviesByQuery();
  }, [request]);

  return (
    <>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          name={"searchQuery"}
          onChange={handleRequestChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      {movies && (
        <>
          <ul>
            {movies.map(({ title, id }) => (
              <NavLink
                to={{
                  pathname: `${url}/${id}`,
                  state: {
                    from: location.pathname,
                  },
                }}
              >
                <li key={id}>{title}</li>
              </NavLink>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
