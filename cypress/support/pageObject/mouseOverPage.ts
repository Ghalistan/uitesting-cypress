class MouseOverPage {
    private currentCount = 0

    clickOnText() {
        cy.contains("Click me").click()
        this.checkCurrentCount()

        return this
    }

    checkCurrentCount() {
        cy.get(`span[id="clickCount"]`).should(
            "have.text",
            this.currentCount + 1
        )

        this.currentCount++
    }
}

export default MouseOverPage
