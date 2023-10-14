import { useState, useEffect } from 'react'
import movieData from '../../movieData'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import SelectedMoviesContainer from '../SelectedMoviesContainer/SelectedMoviesContainer'
import './App.css'


const App = () => {
  const [movies, setMovies] = useState([])
  // console.log('movieData', movieData)
  const [selectedMovie, setSelectedMovie] = useState('')
  // https://rancid-tomatillos.herokuapp.com/api/v2/movies

  const getAllMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data.movies))
    .catch(error => console.log(error.message))
  }

  const getSingleMovie = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(response => response.json())
    .then(data => setSelectedMovie(data.movie))
    .catch(error => console.log(error.message))
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  const handleMovieCardClick = (movieId) => {
    getSingleMovie(movieId)
  }

  return ( 
    <div>
      <Header/>
      {/* <h2>Hello from App</h2> */}
      {selectedMovie ? 
      <SelectedMoviesContainer selectedMovie={selectedMovie} /> 
      : 
      <MoviesContainer movies={movies} onMovieCardClick={handleMovieCardClick}/>}
    </div> 
  )
}

export default App
