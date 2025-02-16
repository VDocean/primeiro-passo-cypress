class DashBoardPage{

    selectorsList(){
        const selectors={
            dashboardGrid: ".oxd-topbar-header-breadcrumb-module",
            

        }

        return selectors
    }

    verifyIfDashboard(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')

    }

}

export default DashBoardPage