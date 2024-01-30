import MainPage from "./page object/Mainpage.cy";

// Create an instance of the MainPage class to interact with the application
const mainPage = new MainPage();

// Common setup steps to be executed before each test
beforeEach(() => {
    // Navigate to the main page
    mainPage.navigateToMainPage();
    // Assert that the main page is loaded successfully
    mainPage.assertMainPageLoaded();
});

// Main Functionality Tests - Search Functionality (including click and enter functionality)
describe('Main Functionality Tests - Search function test', () => {
    // Negative functionality test with empty search input
    it('should perform negative functionality test with empty search input', () => {
        // Act: Perform a search with an empty input by pressing Enter
        mainPage.searchInput.should('be.empty');
        mainPage.searchInput.type('{enter}');

        // Assertion: Verify that the error message is visible
        mainPage.errorMessage.should('be.visible');

        // Act: Perform a search with an empty input by clicking the "Go" button
        mainPage.goButton.click();

        // Assertion: Verify that the error message is visible
        mainPage.errorMessage.should('be.visible');
    });


// Positive functionality test with a valid username but no repositories
    it('should perform positive functionality test with a valid username but no repositories', () => {
        // Act: Perform a search with a username that has no GitHub repositories
        cy.fixture('testData').then((testData) => {
            const userHasNoRepository = testData.usernameHasNoGithubRepository;
            mainPage.performSearch(userHasNoRepository);
        });
        // Assertion: Verify that the success message is visible
        mainPage.successMessage.should('be.visible');
        // Assertion: Verify that the user has "No repos"
        mainPage.searchResultOutput.should(($repoAmount) => {
            expect($repoAmount.text().trim()).to.equal('No repos');
        });
    });

// Positive functionality test with a valid username and repositories
    it('should perform positive functionality test with a valid username and repositories', () => {
        // Arrange: Retrieve test data
        cy.fixture('testData').then((testData) => {
            const userHasRepositories = testData.usernameHasRepositories;
            const repositoryCount = testData.expectedRepositoryCount;

            // Act: Perform a search with a username that has repositories
            mainPage.performSearch(userHasRepositories);

            // Assertions:
            // - Verify that the repository count is displayed correctly
            mainPage.repoAmount.should('exist').and('contain', repositoryCount);

            // - Verify that the number of repository name links matches the expected count
            mainPage.repoNameLink.should('have.length', repositoryCount);

            // - Iterate over each repository description and assert that it contains a hyphen or any string
            mainPage.repoDescription.each((element, index) => {
                // Wrap each repository description element for more actions
                cy.wrap(element).assertDescriptionContainsHyphenOrAnyString(index + 1);
            });
        });
    });
});

// Main Functionality Tests - Navigation Test
describe('Main Functionality Tests - Navigation Test', () => {
    it('should check repository links for proper href attributes', () => {
        cy.fixture('testData').then((testData) => {
            const userHasRepository = testData.usernameHasRepositories;
            // Act: Perform a search with a username that has repositories
            mainPage.performSearch(userHasRepository);

            // Define a regular expression to check for "http", "www", or ".com"
            const hrefPattern = /http|www|\.com/i;

            // Iterate through each repository link
            mainPage.repoLinks().each(($repoLink, index) => {
                // Get the href attribute
                const repoUrl = $repoLink.attr('href');

                // Assert that the href attribute exists and is not empty
                expect(repoUrl, `Repository Link ${index + 1} should have a proper href attribute`).to.exist;
                expect(repoUrl, `Repository Link ${index + 1}'s href attribute should not be empty`).not.to.be.empty;
                // Additional assertion using the regular expression
                expect(repoUrl, `Repository Link ${index + 1}'s href attribute should contain "http", "www", or ".com"`).to.match(hrefPattern);
            });
        });
    });
});
