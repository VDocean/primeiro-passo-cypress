class MyInfoPage{

    selectorsList(){

        const selectors={
            'firstNameField':'[name="firstName"]',
            'lastNameField':'[name="lastName"]',
            'genericField': ".oxd-input--active",
            'licenseDate': '[placeholder="yyyy-dd-mm"]',
            'bottomClose': '.--close',
            'botomSaveMyinfo':  '[type="submit"]',
            'dropdownField': ".oxd-select-wrapper"
        }

        return selectors
    }

    fillPersonalDetails(firstname,lastname){

        cy.get(this.selectorsList().firstNameField).clear().type(firstname)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)
    }

    fillEmployeeDetails(EmployeeId,driversLicense,driverLicenseDate){

    cy.get(this.selectorsList().genericField).eq(4).clear().type(EmployeeId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseDate)
    cy.get(this.selectorsList().bottomClose).click()
    
    }

    saveForm(){
        cy.get(this.selectorsList().botomSaveMyinfo).eq(0).click()
        cy.get('body').should('contain','Successfully Updated')
    }

    fillStatus(){
        cy.get(this.selectorsList().dropdownField).eq(0).click()
        cy.get(':nth-child(4) > span').click()
        cy.get(this.selectorsList().dropdownField).eq(1).click({force:true})
        cy.get(':nth-child(2) > span').click({force:true})
    }

    
}

export default MyInfoPage