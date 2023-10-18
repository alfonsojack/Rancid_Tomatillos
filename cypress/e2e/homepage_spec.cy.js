describe('user should be able to visit the homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "mockMovieData"
    })
    cy.visit('http://localhost:3000')
  })
  it('homepage should have a title and 3 movies', () => {
    cy.get('h1').contains('Rancid Tomatillos')
    cy.get('.movie-grid').find('.movies-card').should('have.length', 4)
    
  })
})