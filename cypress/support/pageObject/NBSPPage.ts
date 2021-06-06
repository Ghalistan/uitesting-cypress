class NBSPPage {
    clickButton() {
        cy.get(`button`).contains("My Button").click()
    }

    clickButtonXpath() {
        cy.xpath(`//button[text()="My\u00A0Button"]`).click()
    }
}

export default NBSPPage
