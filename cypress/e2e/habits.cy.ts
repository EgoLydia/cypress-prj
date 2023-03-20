describe('habit dashboard', () => {
    beforeEach(() => {
        cy.visit('/habits')
    })

    it('should display modal when add button is clicked', () => {
        cy.contains('button', 'Add').click()
        cy.contains('Add a new habit').should('be.visible')
    })

    it('should display habit card when new habit is added', () => {
        cy.get('#habit-add-btn').click()
        cy.get('input[placeholder="Habit"]').type('New habit')
        cy.contains('Save Changes').click()
        cy.contains('New habit').should('be.visible').and("have.class", "HabitCard__habit-container")

    })

    it('should toggle icon when card is clicked', () => {
        cy.get('#habit-add-btn').click()
        cy.get('input[placeholder="Habit"]').type('New habit')
        cy.contains('Save Changes').click() 
        cy.get("[src='/src/svg/close.svg']").should('be.visible')
        cy.contains('New habit').click()
        cy.get("[src='/src/svg/check.svg']").should('be.visible')

    })

    it('nothing happens when no new habbit is added', () => {
        cy.get('#habit-add-btn').click()
        cy.contains('Save Changes').click()
    })
    
    it('removes modal when close is clicked', () => {
        cy.get('#habit-add-btn').click()
        cy.contains('Close').click()
    })
    
})

