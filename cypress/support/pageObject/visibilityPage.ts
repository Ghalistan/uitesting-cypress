class VisibilityPage {
    private hideBtn = "hideButton"
    private removeBtn = "removedButton"
    private zeroWidthBtn = "zeroWidthButton"
    private overlapBtn = "overlappedButton"
    private opacityBtn = "transparentButton"
    private visibilityHiddenBtn = "invisibleButton"
    private displayNoneBtn = "notdisplayedButton"
    private offscreenBtn = "offscreenButton"

    constructor() {}

    visit() {
        cy.visit(`/visibility`)
    }

    clickHideButton() {
        cy.get(`button[id="${this.hideBtn}"]`).click()

        cy.get(`button[id="${this.removeBtn}]`).should("not.exist")
        cy.get(`button[id="${this.zeroWidthBtn}"]`).should(
            "have.css",
            "width",
            "0px"
        )
        cy.get(`button[id="${this.overlapBtn}"]`)
            .siblings("div")
            .should("have.id", "hidingLayer")
        cy.get(`button[id="${this.opacityBtn}"]`).should("not.be.visible")
        cy.get(`button[id="${this.visibilityHiddenBtn}"]`).should(
            "not.be.visible"
        )
        cy.get(`button[id="${this.displayNoneBtn}"]`).should("not.be.visible")
        cy.get(`button[id="${this.offscreenBtn}"]`).should(
            "have.class",
            "offscreen"
        )
    }
}

export default VisibilityPage
