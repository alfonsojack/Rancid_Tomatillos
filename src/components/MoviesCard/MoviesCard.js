import './MoviesCard.css'


const MoviesCard = (props) => {
  return (
    <div className="movies-card" onClick={props.onClick}>
      <h4>{props.title}</h4>
      <img className="movies-poster-img" src={props.poster}></img>
      <p>{props.rating.toFixed(1)}</p>
    </div>
  )
}

export default MoviesCard