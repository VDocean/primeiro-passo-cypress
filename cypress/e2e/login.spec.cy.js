import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'

const login=new LoginPage()
const dashPage=new DashBoardPage()

describe('Login Orange HRM Tests', () => {

  
  })
    it('Login - Fail', () => {
      
      login.acessLoginPage()
      login.loginWithUser(userData.userFail.username,userData.userFail.password)
      login.checkAcessInvalid()
      
    }) 

    it('User Info Update Success', () => {

      login.acessLoginPage()
      login.loginWithUser(userData.userSucess.userName,userData.userSucess.password)
      dashPage.verifyIfDashboard()
      
  
    
      
})