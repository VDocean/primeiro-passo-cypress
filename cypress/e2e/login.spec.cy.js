import userData from '../fixtures/userData.json'
describe('Orange HRM Tests', () => {

  const selectorsList={
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton:    '[type="submit"]',
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: '[role="alert"]'

  }

  
  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.userName)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/auth/login')
    //cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    
  })
    it.skip('Login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
    }) 
})