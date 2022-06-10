/// <reference types="Cypress" /> 

context('Top rated movies', () => {
    beforeEach(() => {
        cy.visit('https://block-buster-film-reviews.azureedge.net/top-rated-movies')
    })
    it('Has 20 movies per page', () => {
        cy.visit('https://block-buster-film-reviews.azureedge.net/top-rated-movies')

        cy.get('.movie-item-style-1').should('have.length', 24)
    })

    it('Has the correct title', () => {
        cy.visit('https://block-buster-film-reviews.azureedge.net/top-rated-movies')

        cy.title().should('equal', 'Top rated movies')
        cy.get('h1')
          .should('be.visible')
          .should('have.text', 'Top rated movies')
    })

    it('The movie should be Dilwale Dulhania Le Jayenge', () => {
        cy.visit('https://block-buster-film-reviews.azureedge.net/top-rated-movies')

        cy.get('#movie-19404 > .mv-item-infor > h6 > a')
          .should('have.text', 'Dilwale Dulhania Le Jayenge')
    })
})