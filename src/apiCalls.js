
export const getSingleMovie = (movieId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
  // .then(data => setSelectedMovie(data.movie))
  // .catch(error => console.error(error)) // Log the error
}

export const getMovieTrailer = (movieId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
  // .then(data => {
  //   const foundTrailer = data.videos.find((video) => { return video.type === 'Trailer' });
  //   if (foundTrailer) {
  //     setTrailer(foundTrailer)
  //   } else {
  //     setTrailer('NO TRAILER FOUND')
  //   }
  // })
  // .catch(error => console.error(error)) // Log the error
}
