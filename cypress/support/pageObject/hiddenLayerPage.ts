class HiddenLayer {
    visit() {
        cy.visit("/hiddenlayers")
    }

    clickABtn(color: string) {
        cy.get(`button`).last().click()

        return this
    }
}

export default HiddenLayer
