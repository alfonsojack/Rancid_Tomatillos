describe('selectedMoviePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "mockMovieData"
    }).as('movies')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860/videos', {
      statusCode: 200,
      fixture: "mockTrailerData"
    }).as('trailer')
  })
  it('should take us to the selected movies page with that movie\s details', () => {
    
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 200,
      fixture: "mockSelectedMovieData"
    }).as('singleMovie')
    
    cy.get('.movies-card').eq(1).click()
    cy.url().should('eq', 'http://localhost:3000/movies/1013860')
    cy.get('.sel-movie-tagline').should('contain', 'Meet the new law of the Afterlife.')
    cy.get('.sel-movie-title').should('contain', 'R.I.P.D. 2: Rise of the Damned')
    cy.get('.sel-movie-trailer').should('have.length', 1)
    cy.get('.movie-det-line').first().should('contain', '7 / 10')
  })

  it('should show an error message if selected movie can\t be found', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
      statusCode: 404,
      body: ''
    })
    cy.get('.movies-card').eq(1).click()
    cy.url().should('eq', 'http://localhost:3000/movies/1013860')
    cy.get('.error-cont').should('contain', '404 Not Found')
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('h1').contains('Rancid Tomatillos')
    cy.get('.movie-grid').find('.movies-card').should('have.length', 4)
  })
})