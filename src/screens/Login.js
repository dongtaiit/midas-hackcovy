import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Device from '../services/device';
import Config from '../services/config';
import Authen from '../services/api/authen';
import { theme } from '../config/theme';

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
      // -> login
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

  componentDidMount() {
    this.initServiceAndCheck();
  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log('remove screen login');
  }



  render() {
    return (
      <View style={styles.containerStyle}>
        <Text> Screen Login</Text>
      </View>
    );
  }
}

function mapStateToProps({  }) {
  return {  };
}

export default connect(
  mapStateToProps,
  { }
)(Login);

const styles = {
  containerStyle: {
    backgroundColor: theme.mainColor,
    flex: 1,
    paddingTop: 5
  },
  
};
