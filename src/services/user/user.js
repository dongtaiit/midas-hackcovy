import AsyncStorage from '@react-native-community/async-storage';
import Authen from '../api/authen';

export const userConnect = (userPhone, userPassword) => {
  return new Promise((resolve, reject) => {
    userPhone = userPhone.replace(/[\W_]+/g, ' ');
    var rex = /(849||841[2|6|8|9]||09||01[2|6|8|9])+([0-9]{8})\b/g
    if (!rex.test(userPhone)) {
      reject("Số điện thoại không hợp lệ");
      return;
    }
    if (!userPhone) {
      reject("Vui lòng nhập số điện thoại");
      return;
    }
    if (!userPassword) {
      reject("Vui lòng nhập mã OTP");
      return;
    }
    resolve(userUpdateProfile(userPhone))
  });
}

export const userConnectWithTouch = (status) => {
  return new Promise((resolve, reject) => {
    resolve(userUpdateSession())
  });
}


export const userUpdateSession = async () => {
  let authenJson = await AsyncStorage.getItem('@Session:authenObject');
  return new Promise((resolve, reject) => {
    if (authenJson) {
      let authenObj = JSON.parse(authenJson);
      authenObj['logout'] = false
      AsyncStorage.setItem('@Session:authenObject', JSON.stringify(authenObj), () => {
        resolve(authenObj);
      });
    }
  });
};

export const userUpdateProfile =  (phone) => {
  return new Promise((resolve, reject) => {
    const authen = Authen.getInstance();
    let authenObject = {}
    if(phone === authen.isPhone){
      authenObject = {
        'phone': phone,
        'touchID' : authen.touchID,
        'logout' : false,
        'isFirstAuthen' : false
      }}
    else{
        authenObject = {
          'phone': phone,
          'touchID' : false,
          'logout' : false,
          'isFirstAuthen' : true
      }
    }
    authen.setAuthenObj(authenObject);
    AsyncStorage.setItem('@Session:authenObject', JSON.stringify(authenObject), () => {
      resolve(authenObject);
    });
  });
};

export const userDisconnect = async () => {
  const authen = Authen.getInstance();
  await authen.clearAuthenObject();
};

