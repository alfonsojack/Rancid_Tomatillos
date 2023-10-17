import SelectedMoviesCard from '../SelectedMoviesCard/SelectedMoviesCard'
import PropTypes from 'prop-types'
import './SelectedMoviesContainer.css'

const SelectedMoviesContainer = ({ selectedMovie, trailer}) => {
  //map over movieData.movies
  //pluck out values to use as props
  // const selectedMoviesCard = selectedMovie
  return (
    <div className="selected -movie-grid">      
      <SelectedMoviesCard selectedMovie={selectedMovie} trailer={trailer} />
    </div>
  )
}

export default SelectedMoviesContainer

SelectedMoviesContainer.propTypes = {
  selectedMovie: PropTypes.shape({
    average_rating: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  trailer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    movie_id: PropTypes.number.isRequired,
    site: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })
}