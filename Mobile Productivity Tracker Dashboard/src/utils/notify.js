import PushNotification from 'react-native-push-notification';

/**
 * Schedule a local notification.
 * @param {string} title
 * @param {string} message
 * @param {Date} date
 */
export const scheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date,
    allowWhileIdle: true, // Ensure notifications are sent even when the app is idle
  });
};

/**
 * Show an immediate notification.
 * @param {string} title
 * @param {string} message
 */
export const showImmediateNotification = (title, message) => {
  PushNotification.localNotification({
    title,
    message,
  });
};

/**
 * Cancel all scheduled notifications.
 */
export const cancelAllNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};
