import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Application from 'expo-application';
import axios from 'axios';
import * as Device from 'expo-device';


const saveAppId = async () => {
    try {
      const appId = Application.getAndroidId();

      console.log("get appId is " + appId);

      await AsyncStorage.setItem('my-appId', appId);
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

const saveCertifyCode = async () => {
    try {
        const brand = Device.brand;
        const modelName = Device.modelName;
        const manufacturer = Device.manufacturer;   
        const appId = Application.getAndroidId();

        const result = await axios.post(
            'uri',
            {
                
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log("result.data.choices[0].message.content is " + result.data.choices[0].message.content);
        return result.data.choices[0].message.content;
        
        // const appId = Application.getAndroidId();
        // console.log("get appId is " + appId);
        // await AsyncStorage.setItem('isVGServerCertify', JSON.stringify(appId));
      } catch (e) {
        console.log("error" + e);
      }
}

const getCertifyCode = async () => {
    try {
        const certifyCode = await AsyncStorage.getItem('isVGServerCertify');
        
        console.log("visionGrammarAppCertify is " + certifyCode);

        return certifyCode;
    } catch (e) {
        console.log("error" + e);
        return '';
    }
}

export const getFirstCertify = async () => {
    try {
        const brand = Device.brand;
        const modelName = Device.modelName;
        const manufacturer = Device.manufacturer;   
        const appId = Application.getAndroidId();

        const result = await axios.post(
            'https://vision-427210.as.r.appspot.com/app/first',
            {
                brand: brand,
                modelName: modelName,
                manufacturer: manufacturer,
                appId: appId
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
    } catch (e) {
        console.log("error" + e);
        
    }

    return '';
}

export const checkingAppId = () => {
    const myAppId = getAppId();
    
    if (myAppId == null) {
        saveAppId();
    }
}