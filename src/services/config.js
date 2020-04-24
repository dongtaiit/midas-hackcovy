import AsyncStorage from '@react-native-community/async-storage';

const APP_CONFIG = [
  {
    id: 'staging',
    base_url: "https://www.youtube.com/",
    codepush: {
      android_key: "STOqM3p7rD58gSM9w43Gx_V5ndCpsCIMZa7gO",
      ios_key: "",
    }
  },
  {
    id: 'develop',
    base_url: "https://www.google.com/",
    codepush: {
      android_key: "STOqM3p7rD58gSM9w43Gx_V5ndCpsCIMZa7gO",
      ios_key: "",
    }
  },
];

export default class Config {
  server_id = '';
  base_url = '';
  codepush;
  inited = false;

  constructor() {
    // this.initConfig();
  }

  async initConfig() {
    if (this.inited == true) return;
    const serverId = await AsyncStorage.getItem('@Config:serverId');
    await this.setConfig(serverId || 'staging');
    this.inited = true;
    console.log("Config service initialized!", this);
    return true;
  }

  async setConfig(serverId) {
    if (this.server_id == serverId) {
      return;
    }
    let configData = APP_CONFIG.filter(item => item.id == serverId);
    if (!configData || configData.length <= 0) {
      configData = [APP_CONFIG[0]];
    }
    this.server_id = configData[0].id;
    this.base_url = configData[0].base_url;
    this.codepush = configData[0].codepush;
    await AsyncStorage.setItem('@Config:serverId', this.server_id);
  }

  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Config();
    }
    return this.instance;
  }
}