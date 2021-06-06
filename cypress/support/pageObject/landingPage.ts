import AJAXDataPage from "./AJAXDataPage"
import classAttributePage from "./classAttributePage"
import ClickPage from "./clickPage"
import ClientSideDelayPage from "./clientSideDelay"
import DynamicIDPage from "./dynamicIdPage"
import DynamicTablePage from "./dynamicTablePage"
import HiddenLayer from "./hiddenLayerPage"
import LoadDelayPage from "./loadDelayPage"
import MouseOverPage from "./mouseOverPage"
import NBSPPage from "./NBSPPage"
import ProgressBarPage from "./progressBarPage"
import SampleAppPage from "./sampleAppPage"
import ScrollbarsPage from "./scrollbarsPage"
import TextInputPage from "./textInputPage"
import VerifyTextPage from "./verifyTextPage"
import VisibilityPage from "./visibilityPage"

class LandingPage {
    visit(): void {
        cy.visit("/")
    }

    private clickLink(link: string): Cypress.Chainable {
        return cy.get(`a[href="${link}"]`).click()
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

    openClickPage(): ClickPage {
        cy.get(`a[href="/click"]`).click()

        return new ClickPage()
    }

    openTextInput(): TextInputPage {
        cy.get(`a[href="/textinput"]`).click()

        return new TextInputPage()
    }

    openScrollbars(): ScrollbarsPage {
        cy.get(`a[href="/scrollbars"]`).click()

        return new ScrollbarsPage()
    }

    openDynamicTable(): DynamicTablePage {
        cy.get(`a[href="/dynamictable"]`).click()

        return new DynamicTablePage()
    }

    openVerifyText(): VerifyTextPage {
        cy.get(`a[href="/verifytext"]`).click()

        return new VerifyTextPage()
    }

    openProgressBar(): ProgressBarPage {
        cy.get(`a[href="/progressbar"]`).click()

        return new ProgressBarPage()
    }

    openVisibilityPage(): VisibilityPage {
        cy.get(`a[href="/visibility"]`).click()

        return new VisibilityPage()
    }

    openSampleApp(): SampleAppPage {
        cy.get(`a[href="/sampleapp"]`).click()

        return new SampleAppPage()
    }

    openMouseOver(): MouseOverPage {
        cy.get(`a[href="/mouseover"]`).click()

        return new MouseOverPage()
    }

    openNbsp(): NBSPPage {
        cy.get(`a[href="/nbsp"]`).click()

        return new NBSPPage()
    }
}

export default LandingPage
