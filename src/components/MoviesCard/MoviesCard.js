import PropTypes from 'prop-types'
import './MoviesCard.css'

const MoviesCard = ({ title, rating, poster}) => {
  const cardAltText = `${title} movie image`

  return (
    <div className="movies-card">
      <div className='card-bars'>
        <h4>{title}</h4>
      </div>
      <img className="movies-poster-img" alt={cardAltText} src={poster}></img>
      <div className='card-bars'>
        <p>Rating: {rating.toFixed(1)}</p>
      </div>
    </div>
  )
}

export default MoviesCard

MoviesCard.propTypes= {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}