import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MovieCard.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function MoviesGrid() {
  const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGU4Yjk5YzYxZTg4Nzg2ZDc3NDgzYjA4OTg3Y2Y4MiIsInN1YiI6IjYwNzcxNDBmMmZhZjRkMDA3OGE5OTljZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BbSsJN8B-OcX4uZb9Hgs4p5SK6B_uAo3r00DbBc7Zl4";
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
