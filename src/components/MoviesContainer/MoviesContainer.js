import MoviesCard from "../MoviesCard/MoviesCard"
import PropTypes from 'prop-types'
import './MoviesContainer.css'
import { Link } from 'react-router-dom'

const MoviesContainer = ({ movies }) => {
  
  const moviesCards = movies.map((movie)=> {
    
    return (
      <Link to={`/movies/${movie.id}`}   key={movie.id}>
        <MoviesCard 
          title={movie.title}
          rating={movie.average_rating}
          poster={movie.poster_path}
          id={movie.id}
        />
      </Link>
    )
  })

  return (
    <div className="movie-grid">      
      {moviesCards}
    </div>
  )
}

export default MoviesContainer

MoviesContainer.propTypes= {
  movies: PropTypes.arrayOf(PropTypes.shape({
    average_rating: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
}