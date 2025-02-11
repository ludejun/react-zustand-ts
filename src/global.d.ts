// declare module 'whatwg-fetch';

interface Window {
  APP_ENV: 'local' | 'mock' | 'dev' | 'prod';
}
declare var window: Window & typeof globalThis;
