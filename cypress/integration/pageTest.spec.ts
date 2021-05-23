import LandingPage from "../support/pageObject/landingPage"
import * as faker from "faker"

const landingPage = new LandingPage()

describe("UI Testing Playground Tests", () => {
    beforeEach(function () {
        landingPage.visit()

        cy.get(`h1[id="title"]`).should("exist")
    })

    describe("Dynamic ID Page", () => {
        it("Should open dynamic ID page", () => {
            landingPage.openDynamicID().clickDynamicIDBtn()
        })
    })

    describe("Class attribute page", () => {
        it("Should open class attribute page", () => {
            landingPage.openClassattr().clickBlueBtn()
        })
    })

    describe("Hidden layers page", () => {
        it("Should open hidden layer page", () => {
            landingPage.openHiddenLayer().clickABtn("Green").clickABtn("Blue")
        })
    })

    describe("Load delay page", () => {
        it("Should open load delay page", () => {
            landingPage.openLoadDelay()
        })
    })

    describe("AJAX data page", () => {
        it("Should open AJAX Data page", () => {
            landingPage.openAJAXData().clickAJAXRequest()
        })
    })

    describe("Client side delay page", () => {
        it("Should open client side delay page", () => {
            landingPage.openClientSideDelay().clickButton()
        })
    })

    describe("Click page", () => {
        it("Should open click page", () => {
            landingPage.openClickPage().clickButton()
        })
    })

    describe("Text input page", () => {
        it("Should open Text input page", () => {
            let name = faker.name.findName()

            landingPage.openTextInput().inputName(name).clickButton(name)
        })
    })

    describe("Hiding scrollbars page", () => {
        it.only("Should open scrollbars page", () => {
            landingPage.openScrollbars().clickButton()
        })
    })
})
