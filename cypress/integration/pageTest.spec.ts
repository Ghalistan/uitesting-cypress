import LandingPage from "../support/pageObject/landingPage"
import * as faker from "faker"
import SampleAppPage from "../support/pageObject/sampleAppPage"

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
        it("Should open scrollbars page", () => {
            landingPage.openScrollbars().clickButton()
        })
    })

    describe("Dynamic table page", () => {
        it("Should open dynamic table page", () => {
            landingPage.openDynamicTable().compareChromeCPU()
        })
    })

    describe("Verify text page", () => {
        it("Should open verify text page", () => {
            landingPage.openVerifyText().findText("Welcome")
        })
    })

    describe("Progress bar page", () => {
        it("Should open progress bar page", () => {
            landingPage.openProgressBar().startProgressBar().stopProgressBar()
        })
    })

    describe("Visibility page", () => {
        it("Should open visibility page", () => {
            landingPage.openVisibilityPage().clickHideButton()
        })
    })

    describe("Sample app page", () => {
        let sampleApp: SampleAppPage

        beforeEach(function () {
            sampleApp = landingPage.openSampleApp()
        })

        it("Successfull Login", () => {
            sampleApp
                .inputName(faker.name.findName())
                .inputPassword("pwd")
                .clickLogin()
                .shouldSuccessfullyLogin()
                .clickLogout()
                .shouldLoggedOutSuccessfully()
        })

        it("Should give invalid cred notice", () => {
            sampleApp.clickLogin().shouldReturnErrorNotice()
        })
    })

    describe("Mouse Over Page", () => {
        it("Should open mouse over page", () => {
            landingPage.openMouseOver().clickOnText().clickOnText()
        })
    })

    describe("Non-Breaking Space Page", () => {
        it("Should open nbsp page using cypress identifier", () => {
            landingPage.openNbsp().clickButton()
        })

        it("Should open nbsp page using xpath", () => {
            landingPage.openNbsp().clickButtonXpath()
        })
    })
})
