import SelectedMoviesCard from '../SelectedMoviesCard/SelectedMoviesCard'
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