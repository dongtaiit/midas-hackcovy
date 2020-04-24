import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import  {firebaseInit,firebaseListnerRegister} from './src/services/firebase';
firebaseInit();
firebaseListnerRegister();

AppRegistry.registerComponent(appName, () => App);
