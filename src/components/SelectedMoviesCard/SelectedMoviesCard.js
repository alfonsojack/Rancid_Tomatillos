import './SelectedMoviesCard.css'


const SelectedMoviesCard = ( {selectedMovie}) => {
// genres[arr], overview, runtime, tagline
  return (
    <div className='sel-movie-card'>
      <section>
        <img  className='sel-movie-backdrop-img' src={selectedMovie.backdrop_path}></img>
      </section>
      <p className='sel-movie-tagline'>{selectedMovie.tagline}</p>
      <section className='sel-movie-detail-section'>
        <img className='sel-movie-poster-img' src={selectedMovie.poster_path}></img>
        <div className='sel-movie-title-section'>
          <h2 className='sel-movie-title'>{selectedMovie.title}</h2>
          <p className='sel-movie-overview'>{selectedMovie.overview}</p>
        </div>
        <div className='sel-movie-details'>
          <p>Rating: {selectedMovie.average_rating} / 10</p>
          <p>Release: {selectedMovie.release_date.split('-', 1)}</p>
          <p>Genres: {selectedMovie.genres.join(' / ')}</p>
          <p>Runtime: {selectedMovie.runtime} minutes</p>
        </div>
      </section>
    </div>
  )
}

export default SelectedMoviesCard


