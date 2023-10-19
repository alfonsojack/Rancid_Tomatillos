describe('selectedMoviePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should take us to the selected movies page with that movie\s details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "mockMovieData"
    }).as('movies')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 200,
      fixture: "mockSelectedMovieData"
    }).as('singleMovie')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860/videos', {
      statusCode: 200,
      fixture: "mockTrailerData"
    }).as('trailer')
    cy.get('.movies-card').eq(1).click().wait('@movies').wait('@singleMovie').wait('@trailer')
  })
})