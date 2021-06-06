class SampleAppPage {
    private username
    private password

    visit() {
        cy.visit("/sampleapp")
    }

    inputName(name: string) {
        this.username = name

        cy.get(`input[name="UserName"]`)
            .clear()
            .type(name)
            .should("have.value", name)

        return this
    }

    inputPassword(pwd: string) {
        this.password = pwd

        cy.get(`input[name="Password"]`)
            .clear()
            .type(pwd)
            .should("have.value", pwd)

        return this
    }

    clickLogin() {
        cy.get(`button[id="login"]`).click()

        return this
    }

    clickLogout() {
        cy.get(`button[id="login"]`).should("have.text", "Log Out").click()

        return this
    }

    shouldSuccessfullyLogin() {
        cy.get(`label[id="loginstatus"]`)
            .should("have.class", "text-success")
            .should("have.text", `Welcome, ${this.username}!`)

        return this
    }

    shouldLoggedOutSuccessfully() {
        cy.get(`label[id="loginstatus"]`)
            .should("have.class", "text-info")
            .should("have.text", "User logged out.")

        return this
    }

    shouldReturnErrorNotice() {
        cy.get(`label[id="loginstatus"]`)
            .should("have.class", "text-danger")
            .should("have.text", "Invalid username/password")
    }
}

export default SampleAppPage
