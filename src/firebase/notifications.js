/* eslint-disable no-console */
import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const requestIosNotificaitionPermissions = async () => {
    const notificationPermissionStatus = await messaging().requestPermission();
    console.log('Authorization status:', notificationPermissionStatus);
};
const requestAndroidNotificaitionPermissions = async () => {
    const notificationPermissionStatus = await PermissionsAndroid
        .request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    console.log('Authorization status:', notificationPermissionStatus);
};
export const requestNotificationPermission = async () => {
    if (Platform.OS === 'ios') {
        await requestIosNotificaitionPermissions();
    } else {
        await requestAndroidNotificaitionPermissions();
    }
};
export const registerNotificationForegroundHandler = async () => {
    messaging()
        .onMessage(async remoteMessage => {
            console.info('Notification Received in Foreground');
            if (remoteMessage) {
                console.log('Foreground: ', JSON.stringify(remoteMessage));
            }
        });
};
export const registerNotificationBackgroundHandler = () => {
    messaging()
        .setBackgroundMessageHandler(async remoteMessage => {
            console.info('Notification Received in Background');
            if (remoteMessage) {
                console.log('Background: ', JSON.stringify(remoteMessage));
            }
        });
};
export const getInitialNotification = () => {
    // Notification caused app to open from quit state:
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                // eslint-disable-next-line no-console
                console.info('Notification caused app to open from quit state:', remoteMessage);
            }
        });
};
export const onNotificationOpenedApp = () => {
    // Notification caused app to open from background state
    messaging()
        .onNotificationOpenedApp(remoteMessage => {
            if (remoteMessage) {
                // eslint-disable-next-line no-console
                console.info(
                    'Notification caused app to open from background state:',
                    remoteMessage?.notification?.body,
                );
            }
        });
};
export const subscribeToTopic = async topic => {
    // Subscribe to UserId for receiving user specific notifications
    if (topic) {
        const uid = typeof topic !== 'string' ? topic.toString() : topic;
        messaging()
            .subscribeToTopic(uid)
            .then(() => console.log('Subscribed to topic!'))
            .catch(err => console.log(`Subscribed to topic Error!: ${err}`));
    }
};
export const unsubscribeToTopic = async topic => {
    // Unsubscribe to UserId for receiving user specific notifications
    if (topic) {
        const uid = typeof topic !== 'string' ? topic.toString() : topic;
        messaging()
            .unsubscribeFromTopic(uid)
            .then(() => console.log('Unsubscribed to topic!'))
            .catch(err => console.log(`Unsubscribed to topic Error!: ${err}`));
    }
};
