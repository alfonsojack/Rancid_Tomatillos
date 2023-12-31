import React, { useState, useEffect } from 'react'
import SelectedMoviesCard from '../SelectedMoviesCard/SelectedMoviesCard'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { getSingleMovie, getMovieTrailer } from '../../apiCalls'
import ErrorComponent from '../ErrorComponent/ErrorComponent'

const SelectedMoviesContainer = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [selMovieError, setSelMovieError] = useState('')
  const { id } = useParams()

  const findTrailer = (data) => {

    return data.find((video) => { return video.type === 'Trailer' })
  }

  useEffect(() => {
    getSingleMovie(id)
    .then(data => setSelectedMovie(data.movie))
    .catch(error => setSelMovieError(error.message))

    getMovieTrailer(id)
    .then(data => {
      const foundTrailer = findTrailer(data.videos)
      if (foundTrailer) {
        setTrailer(foundTrailer)
      } else {
        setTrailer('NO TRAILER IS CURRENTLY AVAILABLE')
      }
    })
    .catch(error => console.error(error))
  }, [id])

  return (
    <div className="selected-movie-grid">
      {selMovieError ? (<ErrorComponent error={selMovieError} message="The page you're looking for doesn't exist.  While you're here, take the ERROR for a spin and then click on the Rancid Tomatillos title to return home."/>) :
      !selectedMovie || !trailer ? (
        <p>Loading...</p>
      ) : (
      <SelectedMoviesCard selectedMovie={selectedMovie} trailer={trailer} />
      )}
    </div>
  )
}

export default SelectedMoviesContainer

SelectedMoviesContainer.propTypes = {
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