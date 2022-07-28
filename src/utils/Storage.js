import AsyncStorage from '@react-native-community/async-storage';

const token_key = 'AC-token';

const setToken =  value => {
  try {
     AsyncStorage.setItem(token_key, value);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(token_key);
  } catch (error) {
    console.log(error);
  }
};
const removeToken = async () => {
  try {
    return await AsyncStorage.removeItem(token_key);
  } catch (error) {
    console.log(error);
  }
};

export {setToken, getToken,removeToken};
