import { apiConfigs } from '@/services';
import configs from '.';

// 真实环境请求的url
export function apiURL(type: keyof typeof apiConfigs) {
  if (apiConfigs[type] && apiConfigs[type].length > 0) {
    if (configs.mockWhiteList.indexOf(apiConfigs[type]) >= 0) {
      return `${configs.apiServer['mock']}${apiConfigs[type]}`; // Mock服务器代理
    }
    // @ts-ignore
    return `${configs.apiServer[window.APP_ENV || 'local']}${apiConfigs[type]}`;
  } else {
    throw new Error('该api匹配不到url，请检查api名称或apiConfig配置');
  }
}

// 基本的Get请求options封装
export function ajaxGetOptions(headers: HeadersInit = {}): RequestInit {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };
}

// 基本的Post请求options封装
export function ajaxPostOptions(
  headers: HeadersInit = {},
  data: any
): RequestInit {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    credentials: 'include',
    body: JSON.stringify(data)
  };
}

// form表单请求Post的options封装
export function ajaxFormPostOptions(
  headers: HeadersInit = {},
  data: { [key: string]: any }
): RequestInit {
  const formData = new FormData();
  Object.keys(data).forEach((key: string) =>
    formData.append(key, JSON.stringify(data[key]))
  );
  return {
    method: 'POST',
    headers: {
      ...headers
    },
    credentials: 'include',
    body: formData
  };
}
