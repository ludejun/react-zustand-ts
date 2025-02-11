import MD5 from 'md5';
import Storage from './Storage';

export interface IUserInfo {
  loginCustNo: string;
  token: string;
  headUrl: string;
  realName: string; // 真名
  englishName: string; // 英文名
  teamName: string; // 团队名
  teamId: string; //  团队ID
  key?: string; // 计算签名使用
  uuid?: string;
}

export const getUserInfo = (): IUserInfo | null => {
  const { userInfo } = store.getState().user;
  if (userInfo && Object.keys(userInfo).length > 0 && userInfo.token) {
    return userInfo;
  }
  return Storage.get('userInfo') || null;
};

export const setUserInfo = (userInfo: IUserInfo) => {
  Storage.set('userInfo', userInfo, 60 * 24 * 30); // 一个月的缓存有效时间
};

export const removeUserInfo = () => {
  Storage.remove('userInfo'); // 一个月的缓存有效时间
};

export const getDeviceId = (): string => {
  let deviceId = Storage.get('deviceId');
  if (deviceId) {
    return deviceId;
  }

  deviceId = MD5(window.navigator.userAgent);
  Storage.set('deviceId', deviceId);
  return deviceId;
};
