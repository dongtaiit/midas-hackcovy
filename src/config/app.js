import { Platform } from 'react-native';

const ios = Platform.OS === 'ios';

export const selectMediaOptions = {
  storageOptions: {
    cameraRoll: true,
    path: 'images',
  },
  title: 'Chọn ảnh',
  cancelButtonTitle: 'Huỷ',
  takePhotoButtonTitle: 'Chụp ảnh',
  chooseFromLibraryButtonTitle: 'Chọn từ thư viện',
  mediaType: 'photo',
  permissionDenied: {
    title: 'Không có quyền truy cập',
    text: 'Vui lòng cho phép ứng dụng truy cập thư viện ảnh',
    reTryTitle: 'Thử lại',
    okTitle: 'OK'
  }
};

export const commentStatuses = {
  PENDING: 1,
  SENDING: 2,
  SENT: 3,
  SEND_FAILURE: 4
};

export const app = {
  VERSION: ios ? '1.0' : '1.0',
};
