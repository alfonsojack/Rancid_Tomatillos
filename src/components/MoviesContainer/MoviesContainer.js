import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesContainer.css'

const MoviesContainer = () => {
  return (
    <div className="movie-grid">      
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </div>
  )
}
export default MoviesContainer