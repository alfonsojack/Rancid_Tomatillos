import { useState } from 'react'
import movieData from '../../movieData'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import SelectedMoviesContainer from '../SelectedMoviesContainer/SelectedMoviesContainer'
import './App.css'


const App = () => {
  const [movies, setMovies] = useState(movieData)
  // console.log('movieData', movieData)
  const [selectedMovie, setSelectedMovie] = useState('')

  const handleMovieCardClick = (movieId) => {
    setSelectedMovie(movieId)
  }

  return ( 
    <div>
      <Header/>
      {/* <h2>Hello from App</h2> */}
      {selectedMovie ? 
      <SelectedMoviesContainer movies={movies.movies} selectedMovie={selectedMovie} /> 
      : 
      <MoviesContainer movies={movies.movies} onMovieCardClick={handleMovieCardClick}/>}
    </div> 
  )
}

export default App
