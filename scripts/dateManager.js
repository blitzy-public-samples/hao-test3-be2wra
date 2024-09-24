// Import required functions from date-fns library
import { format, isWeekend, differenceInDays } from 'date-fns';

/**
 * Retrieves the current date and formats it
 * @returns {string} Formatted current date string
 */
export function getCurrentDate() {
    // Create a new Date object representing the current date and time
    const currentDate = new Date();

    // Use date-fns format function to format the date
    // TODO: Decide on the exact date format to be used (e.g., 'MMMM dd, yyyy')
    // TODO: Consider adding localization support for different regions
    const formattedDate = format(currentDate, 'MMMM dd, yyyy');

    // Return the formatted date string
    return formattedDate;
}

/**
 * Checks if the given date is a weekend
 * @param {Date} date - The date to check
 * @returns {boolean} True if the date is a weekend, false otherwise
 */
export function isWeekendDate(date) {
    // Use date-fns isWeekend function to check if the given date is a weekend
    return isWeekend(date);
}

/**
 * Calculates the number of days since the last refresh
 * @param {Date} lastRefreshDate - The date of the last refresh
 * @returns {number} Number of days since the last refresh
 */
export function getDaysSinceLastRefresh(lastRefreshDate) {
    // Get the current date
    const currentDate = new Date();

    // Use date-fns differenceInDays function to calculate the difference
    // between the current date and the last refresh date
    const daysDifference = differenceInDays(currentDate, lastRefreshDate);

    // Return the calculated difference
    return daysDifference;
}

// TODO: Implement error handling for date operations
// TODO: Consider adding more date utility functions as needed for future requirements
// TODO: Ensure all date operations account for different timezones if necessary
// TODO: Write unit tests for each function in this module

// TODO: Implement a mechanism to store and retrieve the last refresh date
// TODO: Decide if getDaysSinceLastRefresh should be used to display information to the user