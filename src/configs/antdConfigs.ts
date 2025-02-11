import { Segmented, Steps } from 'antd';

export const antdTheme = {
  token: {
    borderRadius: 2,
    marginLG: 0
  },
  components: {
    Table: {
      lineHeight: 1.1428571428571428,
      fontWeightStrong: 400
    },
    Tabs: {
      colorPrimary: '#4A90E2' // 需和style.less中 primary-color定义一致
    },
    Button: {
      colorLink: '#4A90E2', // 需和style.less中 primary-color定义一致
      colorPrimary: '#4A90E2' // 需和style.less中 primary-color定义一致
    },
    Radio: {
      colorLink: '#4A90E2', // 需和style.less中 primary-color定义一致
      colorPrimary: '#4A90E2', // 需和style.less中 primary-color定义一致
      fontSize: 12
    },
    Segmented: {
      itemSelectedColor: '#4A90E2' // 需和style.less中 primary-color定义一致
    },
    Steps: {
      fontSize: 12,
      iconSizeSM: 16
    },
    Tree: { indentSize: 12 },
    Form: {
      labelFontSize: 12
    }
  }
};
