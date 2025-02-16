import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const login=new LoginPage()
const dashPage=new DashBoardPage()
const menuPage= new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList={
    
    firstNameField:'[name="firstName"]',
    lastNameField:'[name="lastName"]',
    genericField: ".oxd-input--active",
    licenseDate: '[placeholder="yyyy-dd-mm"]',
    bottomClose: '.--close',
    botomSaveMyinfo:  '[type="submit"]',
    dropdownField: ".oxd-select-wrapper"

  }

  
  it.only('User Info Update Success', () => {

    login.acessLoginPage()
    login.loginWithUser(userData.userSucess.userName,userData.userSucess.password)
    dashPage.verifyIfDashboard()
    menuPage.acessMyInfo()

    
    
    //cy.get(selectorsList.firstNameField).clear().type("First Name Teste")
    //cy.get(selectorsList.lastNameField).clear().type("Last Name Teste")
    //cy.get(selectorsList.genericField).eq(4).clear().type("Employeed")
    //cy.get(selectorsList.genericField).eq(5).clear().type("Driver")
    //cy.get(selectorsList.genericField).eq(6).clear().type("2025-04-01")
    //cy.get(selectorsList.bottomClose).click()
    //cy.get(selectorsList.dropdownField).eq(0).click()
    //cy.get(':nth-child(4) > span').click()
    //cy.get(selectorsList.dropdownField).eq(1).click({force:true})
    //cy.get(':nth-child(2) > span').click({force:true})
    //cy.get(selectorsList.botomSaveMyinfo).eq(0).click()
    //cy.get('body').should('contain','Successfully Updated')
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