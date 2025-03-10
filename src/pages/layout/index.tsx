import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, ClusterOutlined, CodeOutlined, ConsoleSqlOutlined, DatabaseOutlined, GatewayOutlined, HomeOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './header';
import './index.less'
import { useCallback, useEffect, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];
export const Layout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  const items: MenuItem[] = [
    {
      key: '/outline',
      label: '概览',
      icon: <HomeOutlined />,
    },
    {
      key: '/resource',
      label: '资源组',
      icon: <ClusterOutlined />,
    },
    {
      key: '/purchased',
      label: '已购资源与服务',
      icon: <ShoppingOutlined />,
    },
    {
      key: '/spaces',
      label: '工作空间',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'dataIntergration',
      label: '数据集成',
      icon: <DatabaseOutlined />,
      children: [
        { key: '/dataSource', label: '数据源' },
        { key: '/syncTasks', label: '同步任务' },
      ],
    },
    {
      key: 'dataStudio',
      label: '数据开发',
      icon: <CodeOutlined />,
      children: [
        { key: '/workflow', label: 'Workflow' },
      ],
    },
    {
      key: 'dataGovern',
      label: '数据治理',
      icon: <GatewayOutlined />,
      children: [
        { key: '/dataMap', label: '数据地图' },
        { key: '/dataQuality', label: '数据质量', children: [
          {key:'/dataQuality/dashboard', label: '质量大盘'},{key:'/dataQuality/rules', label: '规则列表'}
        ] },
      ],
    },
    {
      key: 'dataAnalysis',
      label: '数据分析',
      icon: <ConsoleSqlOutlined />,
      children: [
        { key: '/sqlSearch', label: 'SQL查询' },
      ],
    },
  ];
  const findParentKeys = (target: string) => {
    const map = {};
    const findParent = (arr, parent) => {
      arr.forEach(item => {
        if (item && item.children && item.children.length > 0) {
          map[item.key] = [...(map[parent] || []), parent];
          return findParent(item.children, item.key);
        }
        map[item.key] = [...(map[parent] || []), parent];
      })
    }
    
    findParent(items, null);
    return map[target];
  }

  useEffect(() => {
    setSelectedKeys([window.location.pathname]);
    setOpenKeys(findParentKeys(window.location.pathname))
  }, [window.location.pathname])
  
  // const map = {
  //   outline: '/outline',
  //   resource: '/resource',
  //   spaces: '/spaces',
  //   dataSource: '/dataSource',
  //   syncTasks: '/syncTasks',
  //   workflow: './workflow',
  //   dataMap: '/dataMap',
  //   dataQuality: './dataQuality'
  // }
  const onClick = ({key}) => {
    setSelectedKeys([key])
    // if (map[key]) {
      navigate(key);
    // }
  }

  const onCollapseClick = useCallback((isCollapsed) => {
    if (isCollapsed !== collapsed) {
      setCollapsed(isCollapsed);
    }
  })
  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys);
  }
  return (
    <div className="layout-container">
      <Header onCollapseClick={onCollapseClick}/>
      <div className="flex-row flex1">
        <div className='layout-menu'>
          <Menu
            onClick={onClick}
            style={{ height: '100%' }}
            defaultSelectedKeys={['outline']}
            mode="inline"
            items={items}
            inlineCollapsed={collapsed}
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
          />
        </div>
        
        <div className="layout-main">
          <div className='layout-main-content'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>)
  ;
};
