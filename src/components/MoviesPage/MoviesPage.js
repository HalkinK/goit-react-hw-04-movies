import { useState, useEffect } from "react";
import {
  NavLink,
  useLocation,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import api from "../../services/moviesApi";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  let { url } = useRouteMatch();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(null);

  const heandleSearch = (e) => {
    setSearch(e.target.value);
  };

  const heandleSubmit = (e) => {
    e.preventDefault();
    history.push({ ...location, search: `query=${search}` });
  };

  useEffect(() => {
    if (location.search === "") {
      return;
    }

    const query = new URLSearchParams(location.search).get("query");

    api
      .fetchMoviesByQuery(query)
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.warn(error))
      .finally(() => {
        setSearch("");
      });
  }, [location.search]);

  return (
    <>
      <form action="submit" onSubmit={heandleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          id="id-1"
          onChange={heandleSearch}
        />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map((el) => (
            <li key={el.id}>
              <NavLink
                to={{ pathname: `${url}/${el.id}`, state: { from: location } }}
              >
                {el.original_title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
