class ClickPage {
    visit() {
        cy.visit("/click")
    }

    clickButton() {
        cy.get(`button[id="badButton"]`)
            .click()
            .then(($el) => {
                expect($el.attr("class")).contain("btn-success")
            })
    }
}

export default ClickPage
