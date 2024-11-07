import moment from 'moment';

/**
 * Format a date string to a readable format.
 * @param {string | Date} date
 * @param {string} format
 * @returns {string}
 */
export const formatDate = (date, format = 'YYYY-MM-DD') => {
  return moment(date).format(format);
};

/**
 * Calculate the difference between two dates.
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {string} Difference in days, hours, etc.
 */
ex
