class ProgressBarPage {
    visit() {
        cy.visit("/progressbar")
    }

    startProgressBar() {
        cy.get(`button[id="startButton"]`).click()

        return this
    }

    stopProgressBar() {
        cy.get(`div[id="progressBar"][aria-valuenow="75"]`, {
            timeout: 30000,
        }).then(() => {
            cy.get(`button[id="stopButton"]`).click()
        })
    }
}

export default ProgressBarPage
