// import '@babel/polyfill';
// import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import Routes from './routes';
import Storage from './utils/Storage';
import configs from './configs';
import monitor from './utils/monitor';
import { antdTheme } from './configs/antdConfigs';
import './index.less';

dayjs.locale('zh-cn');

Storage.setNamespace(configs.name);
monitor.init({
  appName: configs.name,
  headerName: 'loyalvalleylog',
  apiUrl: 'http://localhost:3000/log.gif'
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ConfigProvider locale={zhCN} theme={antdTheme}>
    <Routes />
  </ConfigProvider>
);
