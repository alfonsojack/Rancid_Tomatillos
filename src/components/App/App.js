import { useState, useEffect } from 'react'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import SelectedMoviesContainer from '../SelectedMoviesContainer/SelectedMoviesContainer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ErrorComponent from '../ErrorComponent/ErrorComponent'

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  const getAllMovies = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
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
      {error ? (
        <div className="app-error-cont">
          <ErrorComponent error={error} message="We're experiencing server issues.  Please try again later."/>
        </div>
      ) : (

      <Routes>
        <Route path="/" element={<MoviesContainer movies={movies}/>}/>
        <Route path="/movies/:id" element={<SelectedMoviesContainer/>}/>
        <Route path='/*' element={<ErrorComponent error={error} message="The page you're looking for doesn't exist.  While you're here, take the ERROR for a spin and then click on the Rancid Tomatillos title to return home."/>}/>
      </Routes>
      )}
    </div> 
  )
}

export default App
