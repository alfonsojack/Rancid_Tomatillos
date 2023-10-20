
export const getSingleMovie = (movieId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
}

export const getMovieTrailer = (movieId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    return response.json()
  })
}
