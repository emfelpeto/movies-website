import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(()=>{
    get("/movie/" + movieId).then((data)=>{
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImageDetails}`}
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.col}>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((gender) => gender.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
