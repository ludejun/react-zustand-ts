import { FC, useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Form, Input, Button, Checkbox, Tabs, ConfigProvider } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Storage from '@/utils/Storage';
import { useUserStore } from '@/store';

// import logoImg from '@/images/logo.svg';
import BGImg from '@/images/login/BG.jpg';
import bigBall from '@/images/login/bigBall.svg';
import middleBall from '@/images/login/middleBall.svg';
import smallBall from '@/images/login/smallBall.svg';
import './index.less';
import { RandomShow } from './components/randomShow';
import { Slogan1 } from './components/slogan1';
import { Slogan2 } from './components/slogan2';
import { Slogan3 } from './components/solgan3';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import configs from '@/configs';
import monitor from '@/utils/monitor';
import { useRequest } from '@/hooks';
import { wrapRequest } from '@/services';
import { Logo } from '../layout/header/Logo';

export const Login: FC = () => {
  const { userInfo, loginLoading, fetchLogin } = useUserStore(
    useShallow(state => ({
      userInfo: state.userInfo,
      loginLoading: state.loginLoading,
      fetchLogin: state.fetchLogin
    }))
  );
  const [form] = Form.useForm();
  const [activeIndex, setActiveIndex] = useState('0');
  const [loginDisabled, setLoginDisabled] = useState(true); // 默认不能点击立即登录
  const [second, setSecond] = useState(0); // 倒计时时间
  const [submitSecondText, setSubmitSecondText] = useState(false); // 倒计时文案
  const [errMsg, setErrMsg] = useState('');
  const [isShowPhone, setIsShowPhone] = useState(false); // 是否展示手机号码输入框
  const [isShowErrMsg, setIsShowErrMsg] = useState(false); // 是否展示报错信息
  const intervalHandle: React.MutableRefObject<undefined | number> = useRef();
  const intervalCode: React.MutableRefObject<undefined | number> = useRef();
  const navigate = useNavigate();
  const {
    loading: codeLoading,
    run: fetchCode,
    error: codeError
  } = useRequest(wrapRequest('code'), { manual: true });
  const { userName, password } = form?.getFieldsValue();

  useEffect(() => {
    const accountInfo = Storage.getItem('accountInfo');
    if (accountInfo && accountInfo.userName) {
      form.setFieldsValue({
        userName: accountInfo.userName || '',
        remember: true
      });
    }

    // getQrcode();

    // let monitorTimeoutId = null;

    // const skeletonDomloaded = Number(window.localStorage.getItem('skeletonDomloaded')) || 0;
    // if (monitor) {
    //   monitorTimeoutId = setTimeout(() => {
    //     monitor.trackEv('FT', 'FT02000001', getPerformanceTiming());
    //     // 上报骨架屏渲染时间
    //     if (skeletonDomloaded) {
    //       const navigationStart = Number(getPerformanceTiming()?.timing?.navigationStart) || 0; // navigationStart、fetchStart、requestStart都弃用了
    //       monitor.trackEv('FT', 'FT02000002', {
    //         skeletonTime: (skeletonDomloaded as number) - (navigationStart as number),
    //       });
    //       window.localStorage.removeItem('skeletonDomloaded');
    //     }
    //   }, 500);
    // }

    return () => {
      // if (monitorTimeoutId) {
      //   clearTimeout(monitorTimeoutId);
      // }
      clearInterval(intervalCode.current);
      clearTimeout(intervalHandle.current);
      // clearSkeletonTimerId();
    };
  }, []);
  useEffect(() => {
    if (second === 0) {
      clearInterval(intervalCode.current);
      setSubmitSecondText(false);
      setSecond(60);
    }
  }, [second]);

  const formChange = (
    hangedValues: { userName?: string; password?: string },
    allValues: { userName: string; password: string; phoneCode: string }
  ) => {
    if (hangedValues?.userName) {
      setIsShowPhone(false);
    }
    if (hangedValues?.userName || hangedValues?.password) {
      setIsShowErrMsg(false);
    }
    if (allValues.userName && allValues.password && second) {
    } else if (!allValues.userName || !allValues.password) {
      form.setFieldsValue &&
        form.setFieldsValue({
          phoneCode: ''
        });
    }
    if (allValues.userName && allValues.password && allValues.phoneCode) {
      setLoginDisabled(false);
    } else if (
      !allValues.userName ||
      !allValues.password ||
      !allValues.phoneCode
    ) {
      setLoginDisabled(true);
    }
  };

  const tabClick = (index: string) => {
    if (index !== activeIndex) {
      setActiveIndex(index);

      // if (index === 1) {
      //   if (!qrCodeError) {
      //     getQrcode();
      //   }
      // } else {
      //   clearTimeout(intervalHandle.current);
      //   clearSkeletonTimerId();
      //   const accountInfo = JSON.parse(
      //     window.localStorage.getItem('accountInfo') || '{}'
      //   ); // hotfix: 修复login无accountInfo的JSON.parse报错
      //   if (
      //     window.localStorage.getItem('accountInfo') &&
      //     Object.keys(accountInfo).length > 0
      //   ) {
      //     form.setFieldsValue &&
      //       form.setFieldsValue({
      //         userName: accountInfo.userName || '',
      //         remember: true
      //       });
      //   }
      // }
    }
  };

  const onKeyDown = (e: { keyCode: unknown }) => {
    if (e.keyCode === 13) {
      submitLogin();
    }
  };

  const getPhoneCodeData = () => {
    setErrMsg('');
    setIsShowErrMsg(true);
    clearInterval(intervalCode.current);
    setSecond(60);
    const { userName, password, userPhoneNum } = form.getFieldsValue();
    fetchCode({
      userName,
      password: md5(password),
      mobile: isShowPhone ? userPhoneNum : ''
    }).then(() => {
      setSubmitSecondText(true);

      if (second === 0) {
        setSubmitSecondText(false);
        setSecond(60);
      } else {
        intervalCode.current = setInterval(() => {
          setSecond(preCount => preCount - 1);
        }, 1000);
      }
    });
    // sendSmsCode({
    //   params: {
    //     userName,
    //     password: AES.encryptECB(password),
    //     mobile: isShowPhone ? userPhoneNum : '',
    //   },
    //   apiName: 'sendSmsCode',
    // }).then(data => {
    //   if (data?.errCode === '9006') {
    //     setIsShowPhone(true);
    //     setErrMsg(data?.errMsg || '');
    //   } else if (!data) {
    //     setSubmitSecondText(true);

    //     if (second === 0) {
    //       setSubmitSecondText(false);
    //       setSecond(60);
    //     } else {
    //       intervalCode.current = setInterval(() => {
    //         setSecond(preCount => preCount - 1);
    //       }, 1000);
    //     }
    //   } else {
    //     setErrMsg(data?.errMsg || '');
    //   }
    // });
  };

  const submitLogin = () => {
    setErrMsg('');
    setIsShowErrMsg(true);
    const {
      remember,
      userName,
      password,
      phoneCode,
      userPhoneNum
    } = form.getFieldsValue();

    fetchLogin({
      userName,
      password: md5(password),
      phoneCode,
      appName: configs.name, // 应用名称
      userAgent: window.navigator.userAgent,
      mobile: isShowPhone ? userPhoneNum : ''
    }).then(data => {
      setErrMsg(data?.errMsg || '');
      // if (data && Object.keys(data).length > 0 && !data?.errCode) {
      if (
        userName === 'Dalei' &&
        password === 'abccba' &&
        phoneCode === '708807'
      ) {
        console.log(4444, data);
        Storage.setItem('userInfo', data || '');
        monitor.setUser(data?.loginCustNo || '');
        // 登录成功，更新qiankun全局状态
        // actions.setGlobalState({ userInfo: data });
        // clearSkeletonTimerId();
        navigate('/outline');

        if (remember) {
          Storage.setItem(
            'accountInfo',
            JSON.stringify({
              userName
            })
          );
        } else {
          Storage.removeItem('accountInfo');
        }
      }
    });
  };

  return (
    <div className="login">
      <img src={BGImg} className="bg-img" alt="" />
      <img src={bigBall} className="bg-big-ball" alt="" />
      <img src={middleBall} className="bg-middle-ball" alt="" />
      <img src={smallBall} className="bg-small-ball" alt="" />

      <div style={{ minHeight: '600px', minWidth: '800px' }}>
        <div className="logo-position">
          <Logo size="big" />
        </div>
        <div className="login-centent">
          <RandomShow>
            <Slogan1 />
            <Slogan2 />
            <Slogan3 />
          </RandomShow>
          <div
            className="login-box"
            style={{ height: isShowPhone ? 468 : 378 }}
          >
            <Form
              name="normal_login"
              className="login-form"
              form={form}
              onValuesChange={formChange}
            >
              <div className="login-box-tabs">
                <Tabs
                  defaultActiveKey="0"
                  items={[
                    {
                      key: '0',
                      label: '账户登录'
                    },
                    {
                      key: '1',
                      label: '扫码登录'
                    }
                  ]}
                  indicator={{ size: origin => origin - 30, align: 'center' }}
                  onChange={tabClick}
                  size="large"
                  centered
                  tabBarGutter={64}
                />
              </div>
              {/* 账号登录 */}
              {activeIndex === '0' ? (
                <div>
                  <Form.Item name="userName">
                    <Input placeholder="手机号 / 姓名拼音" size="large" />
                  </Form.Item>
                  <Form.Item name="password">
                    <Input.Password
                      className="input-password"
                      type="password"
                      placeholder="密码与邮箱一致"
                      size="large"
                      iconRender={visible =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                      }
                    />
                  </Form.Item>
                  {isShowPhone ? (
                    <Form.Item name="userPhoneNum">
                      <Input
                        placeholder="请输入手机号"
                        size="large"
                        maxLength={11}
                        status="error"
                      />
                    </Form.Item>
                  ) : null}
                  <div className="get-code">
                    <Form.Item
                      name="phoneCode"
                      style={{
                        width: 'calc(100% - 110px)'
                      }}
                    >
                      <Input
                        type="phoneCode"
                        placeholder="手机验证码"
                        disabled={!userName || !password}
                        style={{
                          width: '100%',
                          borderRadius: '2px 0px 0px 2px',
                          borderRight: 'none'
                        }}
                        onKeyDown={onKeyDown}
                        size="large"
                      />
                    </Form.Item>
                    <Button
                      type="primary"
                      disabled={second >= 0 && submitSecondText ? true : false}
                      onClick={getPhoneCodeData}
                      style={{
                        width: 110,
                        height: '38px',
                        borderRadius: '0px 2px 2px 0px',
                        border: 'none',
                        background: '#4A90E2',
                        opacity: second >= 0 && submitSecondText ? 0.6 : 1,
                        color: '#fff'
                      }}
                      loading={codeLoading}
                    >
                      {second >= 0 && submitSecondText
                        ? `${second}秒`
                        : '获取验证码'}
                    </Button>
                  </div>
                  <p className="err-message">
                    {isShowErrMsg && errMsg ? errMsg : ''}
                  </p>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住账户</Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      disabled={loginDisabled}
                      type="primary"
                      className="login-form-button"
                      onClick={submitLogin}
                      style={{
                        width: '100%',
                        height: '48px',
                        borderRadius: '0px 2px 2px 0px',
                        marginTop: '8px',
                        border: 'none',
                        background: '#4A90E2',
                        opacity: loginDisabled ? 0.6 : 1,
                        color: '#fff',
                        fontSize: '16px'
                      }}
                      loading={loginLoading}
                    >
                      立即登录
                    </Button>
                  </Form.Item>
                </div>
              ) : null}
              {activeIndex === '1' ? (
                <div className="login-qrcode">
                  {/* <div
                    className="qrcode"
                    style={{
                      boxShadow: firstQrCode
                        ? 'none'
                        : '0 4px 9px 0 rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <img
                      src={firstQrCode ? imageImg : getqrCodePictuer}
                      alt=""
                      className="qrcode-img"
                    />
                    {qrCodeError ? (
                      <div className="qrcode-refresh" onClick={getQrcode}>
                        <div>
                          <p>二维码已过期</p>
                          <Button type="primary">点击刷新</Button>
                        </div>
                      </div>
                    ) : null}
                  </div> */}
                </div>
              ) : null}
            </Form>
          </div>
        </div>
      </div>
      <p className="copy-right">
        Copyright 2024-{new Date().getFullYear()} © DataCenter版权所有
      </p>
    </div>
  );
};
