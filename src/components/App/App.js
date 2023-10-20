import { useState, useEffect } from 'react'
import movieData from '../../movieData'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import SelectedMoviesContainer from '../SelectedMoviesContainer/SelectedMoviesContainer'
import './App.css'
import { Routes, Route, Link, useParams } from 'react-router-dom'


const App = () => {
  const [movies, setMovies] = useState([])
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

  useEffect(() => {
    getAllMovies()
  }, [])

  return ( 
    <div className='App'>
      <Header/>
      {error && <p> {error} </p>}
      <Routes>
        <Route path="/" element={<MoviesContainer movies={movies}/>}/>
        <Route path="/movies/:id" element={<SelectedMoviesContainer/>}/>
      </Routes>
    </div> 
  )
}

export default App
