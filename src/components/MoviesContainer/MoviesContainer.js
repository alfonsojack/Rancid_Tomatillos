import MoviesCard from "../MoviesCard/MoviesCard"
import PropTypes from 'prop-types'
import './MoviesContainer.css'

const MoviesContainer = (props) => {
  //map over movieData.movies
  //pluck out values to use as props
  console.log(props.movies)
  const moviesCards = props.movies.map((movie)=> {
    return (
      <MoviesCard 
        title={movie.title}
        rating={movie.average_rating}
        poster={movie.poster_path}
        id={movie.id}
        key={movie.id}
        onClick={() => props.onMovieCardClick(movie.id)}
      />
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
  })),
  onMovieCardClick: PropTypes.func
}