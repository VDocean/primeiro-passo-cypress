import userData from '../fixtures/userData.json'
describe('Orange HRM Tests', () => {

  const selectorsList={
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton:    '[type="submit"]',
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: '[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:'[name="firstName"]',
    lastNameField:'[name="lastName"]',
    genericField: ".oxd-input--active",
    licenseDate: '[placeholder="yyyy-dd-mm"]',
    bottomClose: '.--close',
    botomSaveMyinfo:  '[type="submit"]'
  

  }

  
  it.only('User Info Update Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.userName)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("First Name Teste")
    cy.get(selectorsList.lastNameField).clear().type("Last Name Teste")
    cy.get(selectorsList.genericField).eq(4).clear().type("Employeed")
    cy.get(selectorsList.genericField).eq(5).clear().type("Driver")
    cy.get(selectorsList.genericField).eq(6).clear().type("2025-04-01")
    cy.get(selectorsList.bottomClose).click()
    cy.get(selectorsList.botomSaveMyinfo).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')

    //cy.get(selectorsList.genericField).eq(4).type("Nick")//aqui uso uma combinaçao do nome da classe e a posicao do campo para elementos que nao possuem atributos unicos

  })
    it.skip('Login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
    }) 
})