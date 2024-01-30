// Custom Cypress command to assert that the description contains a hyphen or any string
Cypress.Commands.add('assertDescriptionContainsHyphenOrAnyString', { prevSubject: 'element' }, (element) => {
    // Get the text content of the element and trim any leading or trailing spaces
    const text = Cypress.$(element).text().trim();

    // Check if the text contains a hyphen
    const hasHyphen = text.includes('-');

    // Check if the text contains any string (non-empty)
    const hasAnyString = !!text;

    // Combine the conditions and wrap the result in a Cypress chainable to perform the assertion
    cy.wrap(hasHyphen || hasAnyString).should('be.true');
});
// Example usage:
// cy.get('.description').assertDescriptionContainsHyphenOrAnyString();


