import './SelectedMoviesCard.css'


const SelectedMoviesCard = ({ selectedMovie, trailer }) => {
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
        </div>
        <div className='sel-movie-title-section'>
          <h2 className='sel-movie-title'>{selectedMovie.title}</h2>
          <p className='sel-movie-overview'>{selectedMovie.overview}</p>
          <p className='sel-movie-tagline'>{selectedMovie.tagline}</p>
          {trailer.key && 
          <iframe className='sel-movie-trailer' src={trailerUrl}></iframe>} 
        </div>
        <div className='sel-movie-details'>
          <p>Rating: {selectedMovie.average_rating} / 10</p>
          <p>Release: {selectedMovie.release_date.split('-', 1)}</p>
          <p>Genres: {selectedMovie.genres.join(' / ')}</p>
          <p>Runtime: {selectedMovie.runtime} minutes</p>
        </div>
      </section>
        </div>
      </section>
      {/* <p className='sel-movie-tagline'>{selectedMovie.tagline}</p> */}
    </div>
  )
}

export default SelectedMoviesCard