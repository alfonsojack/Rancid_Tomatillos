import './SelectedMoviesCard.css'


const SelectedMoviesCard = ( {selectedMovie}) => {

  return (
    <div className='sel-movie-card'>
      <section>
        <img  className='sel-movie-backdrop-img' src={selectedMovie.backdrop_path}></img>
      </section>
      <section className='sel-movie-detail-section'>
        <img className='sel-movie-poster-img' src={selectedMovie.poster_path}></img>
        <h2>{selectedMovie.title}</h2>
        <div>
          <p>Rating: {selectedMovie.average_rating}</p>
          <p>Release: {selectedMovie.release_date}</p>
        </div>
      </section>
    </div>
  )
}

export default SelectedMoviesCard


