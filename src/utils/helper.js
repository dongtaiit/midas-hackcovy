import {
    AsyncStorage,
    Platform,
    Alert,
    ToastAndroid,
    Linking
  } from 'react-native';
  const IMAGE_TYPES = {
    gif: 'image/gif',
    png: 'image/png',
    jpeg: 'image/jpeg',
    bmp: 'image/bmp',
    jpg: 'image/jpg'
  };
  

import { UPLOAD_IMG_URL } from '../config/api';

export function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;
    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
};

export function removeHTML(content) {
    if (!content) {
      return '';
    }
    return content
      .replace(/<\/p>/ig, '\n')
      .replace(/(<([^>]+)>|&nbsp;)/ig, '');
}

export function formatPoint(n, f){ 
  if (n === undefined || n === null) return 0
  if (f > 0) return parseFloat(n).toFixed(f).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  else return n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function openURL(url) {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      createNotification('Máy của bạn không hỗ trợ mở liên kết này')
    } else {
      return Linking.openURL(url);
    }
  }).catch(err => {
  });
}

export function uploadImages(files) {
  return new Promise((resolve, reject) => {
    upload(UPLOAD_IMG_URL, files)
      .then(data => {
        console.log('response: ', data);
        resolve(data)
      })
      .catch(err => reject(err))
  })
}

export function getImageType(name) {
  if (name) {
    return IMAGE_TYPES[name.split('.').pop().toLowerCase()]
  }
  return IMAGE_TYPES.jpg
}

export function gets(obj, path, defaultValue = null) {
    if (typeof path === 'number') {
      path = [path];
    }
    if (!path || path.length === 0) {
      return obj;
    }
    if (obj === null) {
      return defaultValue;
    }
    if (typeof path === 'string') {
      return gets(obj, path.split('.'), defaultValue);
    }
  
    let currentPath = getKey(path[0]);
    let nextObj = getShallowProperty(obj, currentPath);
    if (nextObj === void 0) {
      return defaultValue;
    }
  
    if (path.length === 1) {
      return nextObj;
    }
  
    return gets(obj[currentPath], path.slice(1), defaultValue);
}
let options = {};

function getKey(key) {
  let intKey = parseInt(key);
  if (intKey.toString() === key) {
    return intKey;
  }
  return key;
}

function getShallowProperty(obj, prop) {
  if (hasShallowProperty(obj, prop)) {
    return obj[prop];
  }
}
function hasOwnProperty(obj, prop) {
  if (obj === null) {
    return false
  }
  //to handle objects with null prototypes (too edge case?)
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

function hasShallowProperty(obj, prop) {
  return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
}


export function createNotification(message = '') {
    if (isAndroid()) {
      return ToastAndroid.show(message, ToastAndroid.SHORT);
    }
    return Alert.alert(messages.notificationTitle, message);
}
  
export function isAndroid() {
  return Platform.OS === 'android';
}