import movieData from '../../movieData'
import MoviesContainer from '../MoviesContainer/MoviesContainer'
import Header from '../Header/Header'
import './App.css'


const App = () => {
  console.log(movieData)
  return ( 
    <div>
      <Header/>
      <h2>Hello from App</h2>
      <MoviesContainer/>
    </div> 
  )
}

export default App
