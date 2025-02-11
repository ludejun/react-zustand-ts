import { ajaxGetOptions, ajaxPostOptions, apiURL } from '@/configs/api';
import request from '@/utils/request';

export function wrapRequest<T>(
  apiName: keyof typeof apiConfigs,
  options?: RequestInit
) {
  const { method = 'POST', headers = {} } = options || {};
  const map = {
    POST: ajaxPostOptions,
    GET: ajaxGetOptions
  };

  return (body: any) =>
    request(apiURL(apiName), map[method as keyof typeof map](headers, body));
}

// API对应url配置
export const apiConfigs = {
  count: '/count', // 示例接口
  login: '/login', // 登陆接口
  code: '/code' // 短信验证码接口
};
