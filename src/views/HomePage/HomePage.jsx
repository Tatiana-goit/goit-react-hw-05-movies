import { useState, useEffect } from 'react';
import * as api from '../../services/movies-api';
import MovieList from '../../components/MovieList/MovieList';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h1 className={s.mainTitle}>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
