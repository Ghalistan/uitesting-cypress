class VerifyTextPage {
    visit() {
        cy.visit("/verifytext")
    }

    findText(text: string) {
        cy.get(`div[class="bg-primary"]`).within(() => {
            cy.get(`span[class="badge-secondary"]`).within(() => {
                cy.contains(text).should("exist")
            })
        })
    }
}

export default VerifyTextPage
