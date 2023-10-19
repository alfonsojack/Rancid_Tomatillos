import PropTypes from 'prop-types'
import './SelectedMoviesCard.css'


const SelectedMoviesCard = ({ selectedMovie, trailer }) => {
  console.log(selectedMovie)
  const imgStyle = {
    backgroundImage: `url(${selectedMovie.backdrop_path})`,
  };
  const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`
  return (
    <div className='sel-movie-card'>
      <section className='img-section' style={imgStyle}>
        <div className='img-overlay'>
          {/* <p className='sel-movie-tagline'>{selectedMovie.tagline}</p> */}
      <section className='sel-movie-detail-section'>
        <div className='sel-movie-poster-section'>
          <img className='sel-movie-poster-img' src={selectedMovie.poster_path}></img>
          <p className='sel-movie-tagline'>{selectedMovie.tagline}</p>
        </div>
        <div className='sel-movie-title-section'>
          <h2 className='sel-movie-title'>{selectedMovie.title}</h2>
          <p className='sel-movie-overview'>{selectedMovie.overview}</p>
          {!trailer.key ? <p className="sel-movie-trailer">{trailer}</p> :
          <iframe className='sel-movie-trailer' src={trailerUrl}></iframe>} 
        </div>
        <div className='sel-movie-details'>
          <p className='movie-det-title-line'>Rating:</p>
          <p className='movie-det-line'>{selectedMovie.average_rating} / 10</p>
          <p className='movie-det-title-line'>Release:</p>
          <p className='movie-det-line'>{selectedMovie.release_date.split('-', 1)}</p>
          <p className='movie-det-title-line'>Genres:</p>
          <p className='movie-det-line'>{selectedMovie.genres.join(' / ')}</p>
          <p className='movie-det-title-line'>Runtime:</p>
          <p className='movie-det-line'>{selectedMovie.runtime} minutes</p>
        </div>
      </section>
        </div>
      </section>
      {/* <p className='sel-movie-tagline'>{selectedMovie.tagline}</p> */}
    </div>
  )
}

export default SelectedMoviesCard

SelectedMoviesCard.propTypes = {
  selectedMovie: PropTypes.shape({
    average_rating: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    budget: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  trailer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    movie_id: PropTypes.number.isRequired,
    site: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })
}