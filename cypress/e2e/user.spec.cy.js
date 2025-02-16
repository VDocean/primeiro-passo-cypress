import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance=require('chance')

const chance=new Chance()
const login=new LoginPage()
const dashPage=new DashBoardPage()
const menuPage= new MenuPage()
const myInfo=new MyInfoPage()




describe('Orange HRM Tests', () => {

  
  it('User Info Update Success', () => {

    login.acessLoginPage()
    login.loginWithUser(userData.userSucess.userName,userData.userSucess.password)
    dashPage.verifyIfDashboard()
    menuPage.acessMyInfo()
    myInfo.fillPersonalDetails(chance.first(),chance.last())
    myInfo.fillEmployeeDetails('ImployeeId','driver','2025-02-13')
    myInfo.fillStatus()
    myInfo.saveForm()

    
  })
})