import React, { Component } from 'react';
import { StatusBar,View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import RootStackContainer from './src/navigation/RootStackNavigator';
import store from './src/store';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {theme} from './src/config/theme';

const STATUS_BAR_HEIGHT = getStatusBarHeight(true);


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.disableYellowBox = true;
    console.log('app is launched');
  }

  componentWillUnmount() {
    console.log('app is killed');
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
          <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: theme.mainColor }}>
            <StatusBar translucent backgroundColor={theme.mainColor} barStyle="light-content" />
          </View>
          <RootStackContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}
