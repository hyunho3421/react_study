import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Application from 'expo-application';
import axios from 'axios';
import * as Device from 'expo-device';


export const saveCertifyId = async (certifyId:string) => {
    try {
      await AsyncStorage.setItem('certifyId', JSON.stringify(certifyId));
    } catch (e) {
      console.log("error" + e);
    }
}

const getCertifyId = async () => {
    try {
        const certifyId = await AsyncStorage.getItem('certifyId');

        console.log("certifyId is " + certifyId);

        return certifyId;
    } catch (e) {
        console.log("error" + e);
        return null;
    }
};

const saveCertifyCode = async (certifyId:string) => {
    try {
        await AsyncStorage.setItem('certifyId', JSON.stringify(certifyId));
      } catch (e) {
        console.log("error" + e);
      }
}

const getFirstCertify = async () => {
    try {
        const brand = Device.brand;
        const modelName = Device.modelName;
        const manufacturer = Device.manufacturer;   
        const appId = Application.getAndroidId();

        const response = await axios.post(
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

        if (response.data.responses[0] == null) {
            return "";
        }

        return response.data.responses[0];
    } catch (e) {
        console.log("error" + e);
        
    }

    return '';
}

export const checkingCertifyId = async () => {
    const certifyId = await getCertifyId();

    if (certifyId == null || certifyId == "") {
        // 인증아이디 없을떄 - 서버 등록 요청
        const response = await getFirstCertify();

        if (response.result == "NO_GRANT") {
            console.log("");
            return "NO_GRANT";
        } else if (response.result == "PERMISION_GRANT") {
            const response_certify = response.certifyId;
            console.log("PERMISION_GRANT " + response_certify);
            await saveCertifyCode(response_certify);

            return "EXIST_CERTIFYID";
        } else {
            console.log("REGIST_CERTIFYID");
            return "REGIST_CERTIFYID";
        }
    } else {
        console.log("EXIST_CERTIFYID");
        return "EXIST_CERTIFYID";
    }
}