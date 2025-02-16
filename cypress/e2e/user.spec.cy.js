import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const login=new LoginPage()
const dashPage=new DashBoardPage()
const menuPage= new MenuPage()
const myInfo=new MyInfoPage()

describe('Orange HRM Tests', () => {

  
  it.only('User Info Update Success', () => {

    login.acessLoginPage()
    login.loginWithUser(userData.userSucess.userName,userData.userSucess.password)
    dashPage.verifyIfDashboard()
    menuPage.acessMyInfo()
    myInfo.fillPersonalDetails("Chico","Chicao")
    myInfo.fillEmployeeDetails('ImployeeId','driver','2025-02-14')
    myInfo.fillStatus()
    myInfo.saveForm()



  
    
  })
    it.skip('Login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      
    }) 
})