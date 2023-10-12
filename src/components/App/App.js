import movieData from '../../movieData'
import Header from '../Header/Header'
import './App.css'


const App = () => {
  console.log(movieData)
  return ( 
    <div>
      <Header/>
      <h2>Hello from App</h2>
    </div> 
  )
}

export default App
