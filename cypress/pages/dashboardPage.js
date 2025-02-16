class DashBoardPage{

    selectorsList(){
        const selectors={
            dashboardGrid: ".oxd-topbar-header-breadcrumb-module",
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

        }

        return selectors
    }

    verifyIfDashboard(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')

    }

    GetInMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
}

export default DashBoardPage