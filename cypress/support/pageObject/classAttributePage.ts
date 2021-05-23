class classAttributePage {
    visit() {
        cy.visit("/classattr")
    }

    clickBlueBtn() {
        const stub = cy.stub()

        cy.on("window:alert", stub)

        cy.get(`button[class*="btn-primary"]`)
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith(
                    "Primary button pressed"
                )
            })
    }
}

export default classAttributePage
