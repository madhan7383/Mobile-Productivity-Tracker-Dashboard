/**
 * Validate if a string is not empty.
 * @param {string} input
 * @returns {boolean}
 */
export const isNotEmpty = (input) => {
  return input && input.trim().length > 0;
};

/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate a task title (e.g., at least 3 characters).
 * @param {string} taskTitle
 * @returns {boolean}
 */
export const isValidTaskTitle = (taskTitle) => {
  return taskTitle.length >= 3;
};
