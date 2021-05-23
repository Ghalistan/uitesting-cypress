class ClientSideDelayPage {
    visit() {
        cy.visit("/clientdelay")
    }

    clickButton() {
        cy.get("button")
            .contains("Client Side")
            .click()
            .then(() => {
                cy.get(`p[class="bg-success"]`, { timeout: 20000 }).should(
                    "have.text",
                    "Data calculated on the client side."
                )
            })
    }
}

export default ClientSideDelayPage
