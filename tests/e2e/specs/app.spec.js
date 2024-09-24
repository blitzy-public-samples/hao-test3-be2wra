// End-to-end test specifications for the Hello World web application using Cypress

describe('Hello World App', () => {
  beforeEach(() => {
    // Visit the application's homepage before each test
    cy.visit('/');
  });

  it('has the correct page title', () => {
    // Check if the page title is 'Hello World'
    cy.title().should('eq', 'Hello World');
  });

  it('displays the main elements correctly', () => {
    // Check if the header contains 'Hello World'
    cy.get('header h1').should('contain', 'Hello World');

    // Verify the presence of the date display element
    cy.get('#date-display').should('exist');

    // Verify the presence of the refresh button
    cy.get('#refresh-button').should('exist');
  });

  it('displays the date in the correct format', () => {
    // Get the text content of the date display element
    cy.get('#date-display').invoke('text').then((dateText) => {
      // Use a regex to check if the date is in the correct format (e.g., 'MMMM dd, yyyy')
      const dateFormatRegex = /^[A-Z][a-z]+ \d{2}, \d{4}$/;
      expect(dateText).to.match(dateFormatRegex);
    });
  });

  it('updates the date when the refresh button is clicked', () => {
    // Get the initial date from the date display element
    let initialDate;
    cy.get('#date-display').invoke('text').then((text) => {
      initialDate = text;
    });

    // Click the refresh button
    cy.get('#refresh-button').click();

    // Get the updated date from the date display element
    cy.get('#date-display').invoke('text').then((updatedText) => {
      // Assert that the updated date is different from the initial date
      expect(updatedText).to.not.equal(initialDate);
    });
  });

  it('shows and hides the loading indicator when refreshing', () => {
    // Click the refresh button
    cy.get('#refresh-button').click();

    // Assert that the loading indicator is visible
    cy.get('#date-display').should('contain', 'Updating...');

    // Wait for the loading indicator to disappear
    cy.get('#date-display').should('not.contain', 'Updating...');

    // Assert that the date display is visible again
    cy.get('#date-display').invoke('text').should('match', /^[A-Z][a-z]+ \d{2}, \d{4}$/);
  });
});

// TODO: Implement tests for accessibility features, such as keyboard navigation and screen reader compatibility
// TODO: Add tests for different viewport sizes to ensure responsive design
// TODO: Consider adding performance tests, such as checking load times and responsiveness
// TODO: Implement tests for any error states or offline functionality
// TODO: Consider implementing visual regression tests using Cypress plugins