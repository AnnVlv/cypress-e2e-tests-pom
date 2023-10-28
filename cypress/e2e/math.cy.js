describe('math app', () => {
    it('should submit calculated value', async () => {
      cy.visit('http://suninjuly.github.io/math.html')
  
      cy.get('#input_value').invoke('text').then((text) => {
        const x = Number(text)
        const result = Math.log(Math.abs(12 * Math.sin(x)))
        cy.get('#answer').type(result)
    
        cy.get('#robotCheckbox').check()
        cy.get('#robotsRule').click()
    
        cy.get('button[type="submit"]').click()
      })
    })
})
