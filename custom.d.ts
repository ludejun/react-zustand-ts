declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.module.less' {
  const content: { [key: string]: string };
  export default content;
}

declare module 'whatwg-fetch';

interface Window {
  APP_ENV: 'local' | 'mock' | 'dev' | 'prod';
}
declare var window: Window & typeof globalThis;

/**
 * Selection Type is used to describe the selection of a Form
 */
declare namespace SelectionType {
  /**
   * Options Item Type
   */
  type OptionItemType = {
    value: string;
    name: string;
    label?: string;
    [key: string]: any;
  };
  /**
   * Options List Type
   */
  type OptionListType = OptionItemType[];
}
