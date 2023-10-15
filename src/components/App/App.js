import { useState, useEffect } from 'react'
import movieData from '../../movieData'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import SelectedMoviesContainer from '../SelectedMoviesContainer/SelectedMoviesContainer'
import './App.css'


const App = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState('')
  const [error, setError] = useState('')
  

  const getAllMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => setMovies(data.movies))
    .catch(error => setError(error.message))
  }

  const getSingleMovie = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => setSelectedMovie(data.movie))
    .catch(error => setError(error.message))
  }

  const getMovieTrailer = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .then(data => console.log("trailers", data.videos.find((video)=> {return video.type === 'Trailer'})))
    .catch(error => setError(error.message))
  }

  useEffect(() => {
    getAllMovies()
  }, [])

  const handleMovieCardClick = (movieId) => {
    getSingleMovie(movieId)
    getMovieTrailer(movieId)
  }

  return ( 
    <div>
      <Header/>
      {error && <p> {error} </p>}
      {/* <h2>Hello from App</h2> */}
      {selectedMovie ? 
      <SelectedMoviesContainer selectedMovie={selectedMovie} /> 
      : 
      <MoviesContainer movies={movies} onMovieCardClick={handleMovieCardClick}/>}
    </div> 
  )
}

export default App
