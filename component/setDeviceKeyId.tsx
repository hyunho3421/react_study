import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Application from 'expo-application';

const saveAppId = async () => {
    try {
      const appId = Application.getAndroidId();

      console.log("get appId is " + appId);

      await AsyncStorage.setItem('my-appId', JSON.stringify(appId));
    } catch (e) {
      console.log("error" + e);
    }
}

const getAppId = async () => {
    try {
        const value = await AsyncStorage.getItem('my-appId');
        
        console.log("my app key is " + value);

        return value;
    } catch (e) {
        console.log("error" + e);
        return '';
    }
};

export const checkingAppId = () => {
    const myAppId = getAppId();
    
    if (myAppId == null) {
        saveAppId();
    }
}