class DynamicIDPage {
    visit() {
        cy.visit("/dynamicid")
    }

    clickDynamicIDBtn() {
        cy.get(`button`).contains("Button").click()
    }
}

export default DynamicIDPage
