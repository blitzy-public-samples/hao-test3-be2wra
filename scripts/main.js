import { AppController } from './appController.js';

const APP_VERSION = "1.0.0";

/**
 * Initializes the application when the DOM content is loaded
 */
function initializeApp() {
    try {
        AppController.initializeApp();
        console.log(`Hello World App Version: ${APP_VERSION}`);
    } catch (error) {
        console.error('Failed to initialize the application:', error);
        // TODO: Implement proper error handling and user feedback
    }
}

// Add an event listener for 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', initializeApp);

// TODO: Implement a mechanism to check for updates or new versions
// TODO: Add performance monitoring or analytics initialization
// TODO: Implement a system for managing and updating the APP_VERSION
// TODO: Consider adding a feature flag system for easy enabling/disabling of features