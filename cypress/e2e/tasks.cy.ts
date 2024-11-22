describe('Task lists', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('should "display list of existing tasks"', () => {
        cy.contains('Buying milk').should('exist')
    });

    it('should "Adds a new task"', () => {
        cy.get('input[placeholder="New task"]').type('Learn Cypress')

        cy.get('form').submit()

        cy.contains('Learn Cypress').should('exist')
        cy.get('ul li').last().should('contain', 'Learn Cypress');
    });

    it('should "Don\'t add empty tasks"', () => {
        cy.get('form').submit()

        cy.get('ul li').should('have.length', 1)
    });

    it('should "To delete a task"', () => {
        cy.get('ul li > button').first().click()

        cy.get('ul li').should('have.length', 0)
    });

    it('should display "No tasks available" when the list is empty', () => {
        cy.get('ul li > button').click();
        cy.contains('No tasks available').should('exist');
    });
})