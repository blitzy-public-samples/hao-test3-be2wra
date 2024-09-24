// Import required modules
import * as DateManager from './dateManager.js';
import * as UIManager from './uiManager.js';

/**
 * Initializes the application by setting up event listeners and displaying the initial date
 */
export function initializeApp() {
    try {
        // Call updateDateDisplay to show the initial date
        updateDateDisplay();

        // Set up the refresh button listener using UIManager.setRefreshButtonListener
        UIManager.setRefreshButtonListener(updateDateDisplay);

        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Failed to initialize the application:', error);
        UIManager.showErrorMessage('Failed to initialize the application. Please refresh the page and try again.');
    }
}

/**
 * Updates the date display with the current date
 */
export function updateDateDisplay() {
    try {
        // Call UIManager.showLoadingIndicator to display a loading state
        UIManager.showLoadingIndicator();

        // Get the current formatted date using DateManager.getCurrentDate
        const currentDate = DateManager.getCurrentDate();

        // Update the UI with the new date using UIManager.updateDateDisplay
        UIManager.updateDateDisplay(currentDate);

        // Call UIManager.hideLoadingIndicator to remove the loading state
        UIManager.hideLoadingIndicator();
    } catch (error) {
        console.error('Failed to update date display:', error);
        UIManager.hideLoadingIndicator();
        UIManager.showErrorMessage('Failed to update the date. Please try again.');
    }
}

// Implement a simple debounce function to prevent rapid successive updates
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to updateDateDisplay
export const debouncedUpdateDateDisplay = debounce(updateDateDisplay, 300);

// TODO: Implement comprehensive error handling throughout the controller
// TODO: Add logging for important events and errors
// TODO: Consider implementing a state management system for more complex app states
// TODO: Write unit tests for the AppController module
// TODO: Optimize performance by minimizing DOM updates and function calls
// TODO: Ensure all functions in this module are properly documented with JSDoc comments