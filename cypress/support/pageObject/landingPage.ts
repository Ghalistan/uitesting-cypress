import AJAXDataPage from "./AJAXDataPage"
import classAttributePage from "./classAttributePage"
import ClickPage from "./clickPage"
import ClientSideDelayPage from "./clientSideDelay"
import DynamicIDPage from "./dynamicIdPage"
import HiddenLayer from "./hiddenLayerPage"
import LoadDelayPage from "./loadDelayPage"
import ScrollbarsPage from "./scrollbarsPage"
import TextInputPage from "./textInputPage"

class LandingPage {
    visit(): void {
        cy.visit("/")
    }

    openDynamicID(): DynamicIDPage {
        cy.get(`a[href="/dynamicid"]`).click()

        return new DynamicIDPage()
    }

    openClassattr(): classAttributePage {
        cy.get(`a[href="/classattr"]`).click()

        return new classAttributePage()
    }

    openHiddenLayer(): HiddenLayer {
        cy.get(`a[href="/hiddenlayers"]`).click()

        return new HiddenLayer()
    }

    openLoadDelay(): LoadDelayPage {
        cy.get(`a[href="/loaddelay"]`).click()
        cy.get(`button`)
            .contains("Button Appearing After Delay")
            .should("exist")

        return new LoadDelayPage()
    }

    openAJAXData(): AJAXDataPage {
        cy.get(`a[href="/ajax"]`).click()

        return new AJAXDataPage()
    }

    openClientSideDelay(): ClientSideDelayPage {
        cy.get(`a[href="/clientdelay"]`).click()

        return new ClientSideDelayPage()
    }

    openClickPage() {
        cy.get(`a[href="/click"]`).click()

        return new ClickPage()
    }

    openTextInput() {
        cy.get(`a[href="/textinput"]`).click()

        return new TextInputPage()
    }

    openScrollbars() {
        cy.get(`a[href="/scrollbars"]`).click()

        return new ScrollbarsPage()
    }
}

export default LandingPage
