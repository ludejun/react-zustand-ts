// @ts-nocheck
const configs = {
  version: '0.0.1', // 代码版本，一般会放在api请求中
  name: 'React-Zustand-TS', // 用作localstorage的namespace等命名空间
  storage: 'local', // 持久缓存放着localStorage(取值local)，还是sessionStorage（取值session）
  htmlTitle: 'React-Zustand-TS', // SPA应用html的title
  APP_ENV: typeof window !== 'undefined' ? window.APP_ENV : 'dev',
  successCode: { key: 'errCode', value: '0000' }, // API请求的业务正常Code
  apiServer: {
    local: 'http://localhost:5590/apiserver',
    dev: 'http://localhost:5590/apiserver',
    prod: '/',
    mock: '/'
  } as Record<Window['APP_ENV'], string>, // API请求各环境的Domain配置
  mockWhiteList: [] as string[] // 后端Mock Server的白名单，在白名单中可走Mock服务器，不然还是走DEV服务器
};

export default configs;
