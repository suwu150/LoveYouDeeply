import { AsyncStorage } from 'react-native';

const LocalKeyStore = {
  getKey: (keyName, callback) => AsyncStorage.getItem(keyName, (error, value) => { // callback: error, value
    if (error) {
      console.log('Error getting item (' + keyName + ') from local storage! ' + error.message);
      if (callback) callback(error, null);
    } else {
      const json = JSON.parse(value);
      if (callback) callback(null, json);
    }
  }),

  setKey: (keyName, value, callback) => { // callback: error
    if (value) {
      const encoded = JSON.stringify(value);
      return AsyncStorage.setItem(keyName, encoded, (error) => {
        if (error) {
          console.log('Error setting item (' + keyName + ') to local storage! ' + error.message);
          if (callback) callback(error);
        } else {
          if (callback) callback(null);
        }
      });
    } else { // eslint-disable-line
      return AsyncStorage.removeItem(keyName, (error) => { // callback: error
        if (error) {
          console.log('Error removing item (' + keyName + ') from local storage! ' + error.message);
          if (callback) callback(error);
        } else {
          if (callback) callback(null);
        }
      });
    }
  }
};

export default LocalKeyStore;
