import { useParams } from "react-router";
import { useState, useEffect } from "react";
import api from "../../services/moviesApi";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const renderMovieCast = () => {
      api.fetchMovieCast(movieId).then(setCast);
    };
    renderMovieCast();
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={`${imgUrl}${profile_path}`}
                alt=""
                width="100"
                height="150"
              />
              <h3>{name}</h3>
              <span>Charachter: {character}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
