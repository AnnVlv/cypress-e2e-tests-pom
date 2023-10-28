describe('store app', () => {
  beforeEach(() => {
    cy.visit('http://demo-store.seleniumacademy.com')
  })
  
  it('should search product', () => {
    cy.get('#nav .nav-primary > li > a').each(topLevelMenuItem => {
      cy.wrap(topLevelMenuItem).click()
    
      cy.wrap(topLevelMenuItem)
        .next('ul')
        .should('be.visible')
        .find('li > a')
        .each(submenuItem => {
          cy.wrap(submenuItem).click()
        })
    })
  })

  it('should be redirected to card\'s page', () => {
    cy.get('#nav li:first-child ul.level0 li:nth-child(2) a.level1').click({ force: true })
    cy.get('.product-name:first-child a').click()

    cy.get('#configurable_swatch_color li:not(.not-available) a').first().click()
    cy.get('#configurable_swatch_size li:not(.not-available) a').first().click()
    cy.get('.product-view button[title="Add to Cart"]').click()

    cy.url().should('eq', 'http://demo-store.seleniumacademy.com/checkout/cart/');
  })

  it('should register', () => {
    const accountMenu = cy.get('a[data-target-element="#header-account"]')
    accountMenu.click()

    const registerButton = cy.get('#header-account').find('a[title="Register"]')
    registerButton.click()

    cy.get('#firstname').type('firstname')
    cy.get('#middlename').type('middlename')
    cy.get('#lastname').type('lastname')
    cy.get('#email_address').type('email_address@gmail.com')
    cy.get('#password').type('password')
    cy.get('#confirmation').type('password')
    cy.get('input[name="is_subscribed"]').check()

    cy.get('button[title="Register"]').click()
  })
})
