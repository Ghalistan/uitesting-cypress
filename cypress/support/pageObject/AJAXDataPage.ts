class AJAXDataPage {
    visit() {
        cy.visit("/ajax")
    }

    clickAJAXRequest() {
        cy.intercept("**/ajaxdata").as("AJAXRequest")

        cy.get("button").contains("AJAX Request").click()

        cy.wait("@AJAXRequest").then(() => {
            cy.contains("Data loaded with AJAX get request.").should("exist")
        })
    }
}

export default AJAXDataPage
