describe('Fill out required form entries', () => {
    it('Add text to name form', () => {
        cy.visit('http://localhost:3002/pizza')
        cy.url().should('include', 'localhost')
        cy.get("input[name='name']")
            .type('Ryan')
            .should('have.value', 'Ryan')
    });

    it('Add text to email form', () => {
        cy.get("input[name='email']")
            .type('ryan@ryan.com')
            .should('have.value', 'ryan@ryan.com')
    });

    it('Select a size', () => {
        cy.get("select[name='size']")
            .select('medium')
    });

    it('Select a crust', () => {
        cy.get("input[type='radio']").first().check()
    });

    it('Select a crust', () => {
        cy.get("input[type='radio'][name='sauce']").first().check()
    });

    it('Select a crust', () => {
        cy.get("input[name='sausage']").check()
            .should('be.checked');
        cy.get("input[name='pepperoni']").check()
            .should('be.checked')
    });

    it('Add text to special instructions', () => {
        cy.get("input[name='specialInstructions']")
            .type('well done')
            .should('have.value', 'well done')
    });

    it('Submit order', () => {
        cy.get('button').click()
    })
})