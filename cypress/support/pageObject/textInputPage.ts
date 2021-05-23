class TextInputPage {
    visit() {
        cy.visit("/textinput")
    }

    inputName(name: string) {
        cy.get(`input[id="newButtonName"]`).type(name)

        return this
    }

    clickButton(name: string) {
        cy.get(`button[id="updatingButton"]`).click().should("have.text", name)

        return this
    }
}

export default TextInputPage
