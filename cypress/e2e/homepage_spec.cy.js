describe('user should be able to visit the homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('homepage should have a title and 3 movies', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "mockMovieData"
    })
    cy.get('h1').contains('Rancid Tomatillos')
    cy.get('.movie-grid').find('.movies-card').should('have.length', 4)
    cy.get('.card-bars').first().should('contain', 'Money Plane')
    cy.get('.card-bars').eq(1).should('contain', 'Rating: 6.7')
    cy.get('.movies-poster-img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
    cy.get('.card-bars').eq(6).should('contain', "Cats & Dogs 3: Paws Unite")
    cy.get('.card-bars').eq(7).should('contain', 'Rating: 7.4')
    cy.get('.movies-poster-img').eq(3).should('have.attr', 'src', "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg")
  })

  it('should give an error message for a 404 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      body: ''
    })
    cy.get('.error-cont').contains('404 Not Found')
  })

  it('should give an error message for a 500 status code',() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 502,
      body: ''
    })
    cy.get('.error-cont').contains('502 Bad Gateway')
  })
})