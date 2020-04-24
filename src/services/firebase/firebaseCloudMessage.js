
import messaging from '@react-native-firebase/messaging';
import { createNotification } from "../../utils/helper"
async function registerAppWithFCM() {
    console.log("registerAppWithFCM")
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log("TOKEN FIREBASE", token)
}
async function requestUserPermission() {
    console.log("requestUserPermission")
    const settings = await messaging().requestPermission();

    if (settings) {
        console.log('Permission settings:', settings);
    }
}

function onMessageReceived(message) {
    console.log(message);
    createNotification(message.notification.title)

}

export const firebaseListnerRegister = () => {
    messaging().onMessage(onMessageReceived);
    messaging().setBackgroundMessageHandler(onMessageReceived);

}
export const firebaseInit = () => {
    requestUserPermission();
    registerAppWithFCM();

}




