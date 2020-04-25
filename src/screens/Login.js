import React, { Component } from 'react';
import { View, Text, TextInput, Image, Dimensions, TouchableOpacity, StyleSheet, Picker, Alert } from 'react-native';
import { connect } from 'react-redux';
import { initLogin, userLogin, clearError, validateError,userLoginTouchID } from '../actions';
import { NavigationActions, StackActions } from 'react-navigation';
import { Spinner } from '../components';
import Device from '../services/device';
import Config from '../services/config';
import Authen from '../services/api/authen';
import I18n from '../utils/i18n';
import { theme } from '../config/theme';
import { createNotification } from '../utils/helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth';
import TouchID from 'react-native-touch-id';
const deviceWidth = Dimensions.get("window").width;
const Passcode = '000000'

class Login extends Component {
  _isMounted = false;
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      userPhone: '',
      userPassword: '',
      clickChangeServer: 0,
      infoVersion: {}
    };
  }

  async initServiceAndCheck() {
    this.setState({
      isLoading: true
    })
    const config = Config.getInstance();
    const authen = Authen.getInstance();
    await Promise.all([config.initConfig(), authen.initAuthen()]);
    this.setState({
      userPhone: authen.isPhone
    })
    Device.updateService.checkForUpdate(this.checkAlreadyLogined.bind(this));
  }
  async checkAlreadyLogined() {
    const config = Config.getInstance();
    const authen = Authen.getInstance();
    if (authen.isLogined) {
      this._hideLoading()
      this.redirectTo('Home');
    }
    if (authen.isLogout && !!authen.touchID) {
      this._touchIdHandler()
    }
    else {
      this._hideLoading()
      let version = await Device.updateService.getVersion()
      this.setState({ infoVersion: version, serverActive: config.server_id });
    }
  }
  _hideLoading(){
    this.setState({
      isLoading: false
    })
  }
  _showLoading(){
    this.setState({
      isLoading: true
    })
  }

  redirectTo(page, params) {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: page, params: params })]
      })
    );
  }
  componentDidMount() {
    this.initServiceAndCheck();
    this.props.initLogin();
    this._isMounted = true;
  }
  autoAuthenFirebase(){
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("SUCCESS", user.phoneNumber, user.uid);
        let { phoneNumber,uid } =  user;
        let userPassword =  '000000';
        this.props.userLogin({userPhone:phoneNumber,userPassword})
      }
    })
  }
  componentWillUnmount() {
    this._isMounted = false;
    console.log('remove screen login');
  }
  confirmCode = (otp) => {
    const { confirmResult, userPhone,userPassword } = this.state;
    // Use debug
    if(otp === Passcode){
      this.props.userLogin({userPhone,userPassword})
      return
    }
    //  End --------------
    if (confirmResult && otp.length) {
      confirmResult.confirm(otp)
        .then((user) => {
          this.props.userLogin({ userPhone, userPassword });
        })
        .catch(error => {
          console.log("ERR", error)
          createNotification("Mã xác thực không hợp lệ!");
          this.setState({ message: `Code Confirm Error: ${error.message}`, isLoading: false })
        });
    }
    else {
      createNotification("Mã xác thực không hợp lệ!");
      this.setState({ isLoading: false, userPassword: "" });
    }


  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(!this._isMounted) return
    let { user, error } = this.props;
    if (user && user !== prevProps.user) {
      this._hideLoading()
      this.redirectTo('Home');
    }
    if (error && error !== prevProps.error) {
      this.setState({ isLoading: false });
    }
  }
  _validate = (phone,otp) => {
    if(!phone){
      this.props.validateError("Vui lòng nhập số điện thoại")
      this._hideLoading()
      return false
    }
    if(!otp){
      this.props.validateError("Vui lòng nhập mã xác thực")
      this._hideLoading()
      return false
    }
    return true
  }

  _onUserPhoneChanged = userPhone => {
    this.setState({ userPhone });
  };

  _onUserPasswordChanged = userPassword => {
    this.setState({ userPassword });
  };

  _onButtonPress = () => {
    const { userPassword,userPhone } = this.state;
    this.props.clearError()
    this._showLoading()
    if(this._validate(userPhone,userPassword)) this.confirmCode(userPassword)
  };
  _touchIdHandler = async () => {
    const authen = Authen.getInstance();
    if(!authen.touchID){
      createNotification("Bạn chưa kích hoạt tính năng quét vân tay");
      this._hideLoading()
      return
    }
    const optionalConfigObject = {
      title: 'Xác thực vân tay', // Android
      // imageColor: '#e00606', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
      fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
      unifiedErrors: false, // use unified error messages (default false)
      passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
    };
    TouchID.authenticate('Xin mời quét vân tay để đăng nhập', optionalConfigObject)
      .then(success => {
        this.props.userLoginTouchID(success)
        this._hideLoading()
      })
      .catch(error => {
        this._hideLoading()
        createNotification('Xác minh vân tay không thành công')
      });
  }
   
  _sendOTPSms = () => {
    this.setState({
      isLoading: true
    })
    var userPhone = this.state.userPhone;
    userPhone = userPhone.replace(/[\W_]+/g, ' ');
    var rex = /(849||841[2|6|8|9]||09||01[2|6|8|9])+([0-9]{8})\b/g
    if (!rex.test(userPhone)) {
      this.props.validateError("Số điện thoại không hợp lệ")
      return;
    }
    if (!userPhone) {
      this.props.validateError("Vui lòng nhập số điện thoại")
      return;
    }

    var number = this.state.userPhone;
    if (number && number.substring(0, 1) == '0') {
      number = "+84" + parseInt(number)
    }
    if (number && number.substring(0, 2) == '84') {
      number = "+" + parseInt(number)
    }
    console.log(number)
    if (number.length != 12 && number.length != 13) {
      this.props.validateError("Số điện thoại không hợp lệ")
      return;
    }
    this.props.clearError();
    auth().signInWithPhoneNumber(number).then(confirmResult => {
      createNotification('Gửi mã xác nhận thành công')
      this.autoAuthenFirebase()
      this.setState({
        isLoading: false,
        confirmResult
      })
    })
      .catch(error => {
        console.log(error)
        createNotification('Gửi mã xác nhận không thành công! Vui lòng thử lại sau!')
        this.setState({
          isLoading: false
        })
      });;

  }


  render() {
    return (
      <View style={styles.containerStyle}>
        <KeyboardAwareScrollView
          extraScrollHeight={100}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <Spinner visible={this.state.isLoading} />
          <View style={styles.logoViewStyle}>
            <TouchableOpacity activeOpacity={1} >
              <Image style={{ width: 150, height: 150, borderRadius: 1000 }} source={require('../assets/images/logo.png')} />
            </TouchableOpacity>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
              <Text style={styles.logoTextTitle}>{I18n.t('COMMON.SubText1')}</Text>
              <Text style={styles.logoTextTitle}>{I18n.t('COMMON.SubText2')}</Text>
            </View>
            <Text style={styles.logoTextSubTitle}>{I18n.t('COMMON.subLogoText')}</Text>
          </View>
          <View style={styles.inputViewStyle}>
            <TextInput
              label="Số điện thoại"
              placeholder="Số điện thoại"
              style={styles.inputStyle}
              duration={100}
              autoCorrect={false}
              maxLength={20}
              textAlign={'center'}
              keyboardType='numeric'
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
              onChangeText={this._onUserPhoneChanged}
              keyboardType='numeric'
              value={this.state.userPhone}
            />
          </View>

          <View style={styles.inputViewStyle}>
            <TextInput
              value={this.state.userPassword}
              placeholder="Mã OTP"
              style={styles.inputStyle}
              duration={100}
              keyboardType='numeric'
              autoCorrect={false}
              textAlign={'center'}
              maxLength={6}
              placeholderTextColor="#fff"
              underlineColorAndroid="transparent"
              onChangeText={this._onUserPasswordChanged}
            />
          </View>
          <View style={styles.textViewStyle}>
            <TouchableOpacity onPress={this._sendOTPSms}>
              <Text
                style={styles.textStyle}
                duration={100}
                textAlign={'left'}
                autoCorrect={false}
                placeholderTextColor="#fff"
                underlineColorAndroid="transparent"
              >Gửi mã OTP</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
          <View style={styles.buttonStyle}>
            <TouchableOpacity onPress={this._onButtonPress} style={styles.button}>
              <Text style={{fontSize: 18, fontWeight: '700', fontFamily: 'SF Compact Text',color: theme.mainColor}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textViewStyle}>
            <TouchableOpacity onPress={this._touchIdHandler} style={{ marginTop: 24 }}>
              <Image style={{ width: 48, height: 48, borderRadius: 0 }} source={require('../assets/images/icon_Fingerprint.png')} />
            </TouchableOpacity>
          </View>
          <View style={[styles.footerViewStyle]}>
            <Text style={styles.footerTextStyle}>Version : 1.0</Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

function mapStateToProps({ login }) {
  const { error, user } = login;
  return { error, user };
}

export default connect(
  mapStateToProps,
  { initLogin, userLogin, clearError, validateError, userLoginTouchID }
)(Login);

const styles = {
  containerStyle: {
    backgroundColor: theme.mainColor,
    flex: 1,
    paddingTop: 5
  },
  logoViewStyle: {
    marginTop: 30,
    alignItems: 'center',
    borderRadius: 100,
  },
  logoTextTitle: {
    color: '#fff',
    fontSize: 16,
    paddingTop: 2,
    fontFamily: 'SF Compact Text',
  },
  logoTextSubTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: 'SF Compact Text',
  },
  picker: {
    height: 50,
    width: deviceWidth / 4,
    color: '#fff'
  },
  inputViewStyle: {
    marginLeft: 28,
    marginRight: 28,
    marginTop: 5,
    borderBottomWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    flexDirection: "row",

  },
  inputStyle: {
    fontSize: 16,
    backgroundColor: theme.mainColor,
    color: '#fff',
    fontFamily: 'SF Compact Text',
    alignSelf: 'center',
    flex: 1,
    alignSelf: 'center',

  },
  textViewStyle: {
    marginLeft: 28,
    marginRight: 28,
    marginTop: 8,
    flexDirection: "row",
    alignSelf: 'center',

  },
  textStyle: {
    fontSize: 16,
    backgroundColor: theme.mainColor,
    color: '#00FFD1',
    fontFamily: 'SF Compact Text',
    alignSelf: 'center',
    textDecorationLine: 'underline'
  },
  buttonStyle: {
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 15,
    borderRadius: 25,
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#FA5858',
    paddingTop: 10
  },
  footerViewStyle: {
    paddingLeft: 28,
    paddingRight: 28,
    marginTop: 5,
    flexDirection: 'column'
  },
  footerTextStyle: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#fff'
  },
  server: {
    alignSelf: 'center',

  },
  item: {
    backgroundColor: 'red'
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    marginLeft: 12,
    marginRight: 12,
    height: 50,
    width:deviceWidth-50,
    alignItems:'center',
    justifyContent: 'center'
  }
};
