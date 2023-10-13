import { useState } from 'react'
import movieData from '../../movieData'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import './App.css'


const App = () => {
  const [movies, setMovies] = useState(movieData)
  // console.log('movieData', movieData)
  return ( 
    <div>
      <Header/>
      <h2>Hello from App</h2>
      <MoviesContainer movies={movies.movies}/>
    </div> 
  )
}

export default App
