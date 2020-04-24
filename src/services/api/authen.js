import AsyncStorage from '@react-native-community/async-storage';

export default class Authen {
  inited = false;
  touchID = false;
  isLogined = false;
  isLogout = true;
  isFirstAuthen = true;
  isPhone= null;
  authenObject;

  constructor() { }

  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Authen();
    }
    return this.instance;
  }

  async initAuthen() {
    if(this.inited) return
    let authenJson = await AsyncStorage.getItem('@Session:authenObject');
    if (authenJson) {
      let authenObj = JSON.parse(authenJson);
      await this.saveAuthenObject(authenObj);
      this.inited = true;
    } else {
      this.inited = true;
    }
    console.log("Authen service initialized!");
  }

  async saveAuthenObject(headerData) {
    let authenObject = {
      'phone': headerData['phone'],
      'touchID' : headerData['touchID'],
      'logout' : headerData['logout'],
      'isFirstAuthen' : headerData['isFirstAuthen']
    }
    this.isPhone = headerData['phone'];
    this.isLogined = !headerData['logout'];
    this.isLogout = headerData['logout'];
    this.touchID = headerData['touchID'];
    this.isFirstAuthen = headerData['isFirstAuthen']
    this.authenObject = authenObject;
    await AsyncStorage.setItem('@Session:authenObject', JSON.stringify(authenObject));
  }

  async setAuthenObj(authenObj){
    this.touchID = authenObj['touchID'];
    this.isFirstAuthen = authenObj['isFirstAuthen'];
    this.isLogout = authenObj['logout'];
    this.isPhone = authenObj['phone']
  }

  async clearAuthenObject() {
    let authenJson = await AsyncStorage.getItem('@Session:authenObject');
    if (authenJson) {
      let authenObj = JSON.parse(authenJson);
      this.touchID = authenObj['touchID'];
      authenObj['logout'] = true
      this.isLogined = false;
      this.isLogout = true;
      this.inited = false;
      await AsyncStorage.setItem('@Session:authenObject', JSON.stringify(authenObj));
    }
  }
}