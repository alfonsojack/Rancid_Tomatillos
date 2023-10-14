import SelectedMoviesCard from '../SelectedMoviesCard/SelectedMoviesCard'
import './SelectedMoviesContainer.css'

const SelectedMoviesContainer = (props) => {
  //map over movieData.movies
  //pluck out values to use as props
  console.log(props.movies)
  const selectedMoviesCard = props.movies.find((movie) => {
    return movie.id === props.selectedMovie

  })
  console.log('selectedMoviesCard: ', selectedMoviesCard)
  return (
    <div className="selected -movie-grid">      
      <SelectedMoviesCard selectedMovie={selectedMoviesCard} />
    </div>
  )
}

export default SelectedMoviesContainer