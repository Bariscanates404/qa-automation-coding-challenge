class MainPage {
    get searchInput() {
        return cy.get('input#username');
    }

    navigateToMainPage() {
        return cy.visit('http://localhost:3000/');
    }

    get goButton() {
        return cy.get('button[type="submit"]');
    }

    get headerElement(){
        return cy.get('div[class="app"] h1');
    }

    get repoAmount() {
        return cy.get('p.repo-amount');
    }

    get searchResultOutput() {
        return cy.get('p.output-status-text');
    }

    get repoDescription() {
        return cy.get('p.repo-description');
    }

    get repoNameLink() {
        return cy.get('p > a');
    }

    get errorMessage() {
        return cy.get('p.message-failure');
    }

    get successMessage() {
        return cy.get('p.message-success');
    }

    performSearch(username) {
        this.searchInput.type(username);
        this.goButton.click();
    }
    repoLinks() {
        return cy.get('a[href]');
    }
    assertMainPageLoaded() {
        cy.url().should('include', 'http://localhost:3000/');
        this.searchInput.should('be.visible');
        this.goButton.should('exist');
        this.searchResultOutput.should('exist');
        this.headerElement.should('exist');
        this.headerElement.invoke('text').should('equal', 'Get Github Repos');
    }
}

export default MainPage;
