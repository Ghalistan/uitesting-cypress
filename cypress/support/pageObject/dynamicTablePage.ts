class DynamicTablePage {
    visit() {
        cy.visit("/dynamictable")
    }

    compareChromeCPU() {
        cy.get(`div[role="table"]`).within(() => {
            cy.contains("span", "CPU")
                .invoke("index")
                .then((i) => {
                    cy.contains("div", "Chrome").within(() => {
                        cy.get(`span[role="cell"]`).eq(i).then($el => {
                            cy.wrap($el.text()).as("chromeCPUTable")
                        })
                    })
                })
        })

        cy.get("@chromeCPUTable").then(val => {
            cy.get(`p[class="bg-warning"]`).should('contain', val)
        })
    }
}

export default DynamicTablePage
