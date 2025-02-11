import { Drawer } from 'antd';
import { useState } from 'react';
import {
  FileTextOutlined,
  MessageOutlined,
  PoweroffOutlined,
  UserOutlined
} from '@ant-design/icons';

export const User = props => {
  const { username = '' } = props;
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="l-user flex-center" onClick={showDrawer}>
        <span>{username}</span>
      </div>
      <Drawer
        onClose={onClose}
        open={open}
        destroyOnClose
        rootClassName="l-user-drawer"
        width={310}
      >
        <div className="l-drawer-block">
          <p className="l-drawer-title">
            Dalei <span>先生</span>
            <span>ID: #34asdf432dqew1</span>
          </p>
          <div>
            <span>上海亚马逊</span>
            <span style={{ marginLeft: 20 }}>DataCenter历320天</span>
          </div>
        </div>
        <div className="l-drawer-block">
          <p className="l-drawer-title">个人工作台</p>
          <div className="drawer-space">
            {[
              { value: 8, label: '未运行任务' },
              { value: 0, label: '等资源任务' },
              { value: 3, label: '运行失败' },
              { value: 1, label: '运行成功' },
              { value: 3, label: '数据风险' },
              { value: 5, label: '待优化问题' }
            ].map(item => (
              <div className="space-item" key={item.label}>
                <span className="item-value">{item.value}</span>
                <span className="item-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="l-drawer-block">
          <p className="l-drawer-title">菜单</p>
          <div className="drawer-menu">
            <p className="menu-item">
              <UserOutlined />
              <span className="item-text">用户信息</span>
            </p>
            <p className="menu-item">
              <FileTextOutlined />
              <span className="item-text">用户手册</span>
            </p>
            <p className="menu-item">
              <MessageOutlined />
              <span className="item-text">产品反馈</span>
            </p>
            <p className="menu-item">
              <PoweroffOutlined />
              <span className="item-text">退出</span>
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
};
