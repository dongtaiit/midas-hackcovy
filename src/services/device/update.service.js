import Config from '../config';
import CodePush from "react-native-code-push";
import { Platform } from 'react-native';
import I18n from '../../utils/i18n';

export default class UpdateService {
  version = {};
  constructor() { }

  checkForUpdate(callbackWhenDone) {
    let config = Config.getInstance();
    if (__DEV__) {
      console.log('I am in debug');
      if (callbackWhenDone) callbackWhenDone();
    } else {
      let deploymentKey = "";
      if (Platform.OS === 'ios') {
        deploymentKey = config.codepush.ios_key;
      } else if (Platform.OS === 'android') {
        deploymentKey = config.codepush.android_key;
      }

      CodePush.sync(
        {
          deploymentKey: deploymentKey,
          updateDialog: false,
          installMode: CodePush.InstallMode.IMMEDIATE
        },
        (status) => {
          if (status == CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
            // show loading ....
          } else if (status == CodePush.SyncStatus.UPDATE_INSTALLED || status == CodePush.SyncStatus.UP_TO_DATE) {
            // hide loading ....
            if (callbackWhenDone) callbackWhenDone();
          }
        }
      );
    }
  }

  wrapIntoCodepush(screen) {
    let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
    const App = CodePush(codePushOptions)(screen);
    return App;
  }
  async getVersion(){
    let metadata = await CodePush.getUpdateMetadata();
    if(!metadata){
      this.version = {label: "Debug", version: "test", description: ""};
    } else {
      this.version = {label: metadata.label, version: metadata.appVersion, description: metadata.description}
    }
    return this.version
  }

}