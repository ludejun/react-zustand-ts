import { useShallow } from 'zustand/react/shallow';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useUserStore } from '@/store';
import { Logo } from './Logo';
import { useState } from 'react';
import { SpaceSelector } from './SpaceSelector';
import { Search } from './Search';
import { User } from './User';

export const Header = ({ onCollapseClick }) => {
  const { userInfo } = useUserStore(
    useShallow(state => ({
      userInfo: state.userInfo
    }))
  );
  const [fold, setFold] = useState(true);
  const onMenuToggleClick = () => {
    setFold(!fold);
    onCollapseClick(fold);
  };
  return (
    <div className="flex-center flex-row l-header">
      <div className="flex-row">
        <div className="flex-center l-menu-toggle" onClick={onMenuToggleClick}>
          {fold ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </div>
        <Logo />
        <SpaceSelector />
      </div>
      <div className="flex-row" style={{ height: '100%' }}>
        <Search />
        <User username="Dalei" />
      </div>
    </div>
  );
};
