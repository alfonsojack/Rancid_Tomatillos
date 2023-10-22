import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import PropTypes from 'prop-types';
import './MoviesContainer.css';
import { Link } from 'react-router-dom';

const MoviesContainer = ({ movies }) => {
  const [isSorted, setIsSorted] = useState(false)

  let sortedMovies = movies

  if (isSorted) {
    sortedMovies = [...movies].sort((a, b) => b.average_rating - a.average_rating)
  } 

  const toggleSortOrder = () => {
    setIsSorted(!isSorted);
  };

  const moviesCards = sortedMovies.map((movie) => {
    return (
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <MoviesCard
          title={movie.title}
          rating={movie.average_rating}
          poster={movie.poster_path}
          id={movie.id}
        />
      </Link>
    );
  });

  return (
    <>
      <button onClick={toggleSortOrder}>
        {isSorted ? 'Go Back' : 'Sort By Rating in Descending Order'}
      </button>
      <div className="movie-grid">
        {moviesCards}
      </div>
    </>
      
  );
};

MoviesContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      average_rating: PropTypes.number.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesContainer;