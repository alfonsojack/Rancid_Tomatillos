import './MoviesCard.css'


const MoviesCard = (props) => {
  return (
    <div className="movies-card" onClick={props.onClick}>
      <div className='card-bars'>
        <h4>{props.title}</h4>
      </div>
      <img className="movies-poster-img" src={props.poster}></img>
      <div className='card-bars'>
        <p>Rating: {props.rating.toFixed(1)}</p>
      </div>
    </div>
  )
}

export default MoviesCard