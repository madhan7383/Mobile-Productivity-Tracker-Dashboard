import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save a value to AsyncStorage.
 * @param {string} key
 * @param {any} value
 */
export const saveToStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

/**
 * Get a value from AsyncStorage.
 * @param {string} key
 * @returns {Promise<any>}
 */
export const getFromStorage = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data', e);
  }
};

/**
 * Remove a value from AsyncStorage.
 * @param {string} key
 */
export const removeFromStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing data', e);
  }
};
