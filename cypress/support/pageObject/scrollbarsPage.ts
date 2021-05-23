class ScrollbarsPage {
    visit() {
        cy.visit("/scrollbars")
    }

    clickButton() {
        cy.get(`button[id="hidingButton"]`).click()
    }
}

export default ScrollbarsPage
