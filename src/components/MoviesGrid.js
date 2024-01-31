import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MovieCard.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGE5ZGI0ZDA0NGRjNzc1ZmZkNmFiMWFjYjc4YzQyMSIsInN1YiI6IjYwNzcxNDBmMmZhZjRkMDA3OGE5OTljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Co9fPSiZBXSndLwPeG3fCaVywTmgc-YyhQ_hQ2hS9ps";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then(data=>{
      setMovies(data.results);
    });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
