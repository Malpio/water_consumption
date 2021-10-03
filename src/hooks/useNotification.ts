import {useEffect} from 'react';
import PushNotification, {Importance} from 'react-native-push-notification';
import {notificationConfig} from '../core/configs/notificationConfig';

const useNotification = () => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: notificationConfig.channelId,
        channelName: notificationConfig.channelName,
        channelDescription: notificationConfig.channelDescription,
        playSound: false,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      _ => {},
    );
    PushNotification.configure({
      onNotification: function (_) {},
    });

    PushNotification.localNotificationSchedule({
      channelId: notificationConfig.channelId,
      vibration: 300,

      message: notificationConfig.message,

      date: new Date(Date.now() + notificationConfig.repeatPeriod),
      repeatType: 'time',
      repeatTime: notificationConfig.repeatPeriod,
    });
  }, []);
};

export default useNotification;
