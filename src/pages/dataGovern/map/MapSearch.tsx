import { useEffect, useRef } from 'react';
import { Button, Input, List, Menu, Radio, Select, Tabs, Tree } from 'antd';
import {
  ApartmentOutlined,
  ApiOutlined,
  AppstoreAddOutlined,
  AppstoreOutlined,
  BlockOutlined,
  CodeOutlined,
  GatewayOutlined,
  NumberOutlined,
  TableOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { LineSpace, WidthSpace } from '@/components';
import { SpaceConfig } from './SpaceConfig';

export const MapSearch = props => {
  const { onAddPans } = props;
  const items = [
    {
      key: '1',
      icon: <TableOutlined />,
      label: '表'
    },
    {
      key: '2',
      icon: <CodeOutlined />,
      label: '代码'
    },
    {
      key: '3',
      icon: <ApiOutlined />,
      label: 'API'
    },
    {
      key: '4',
      icon: <AppstoreOutlined />,
      label: '工作空间'
    }
  ];
  const spaces = [
    {
      value: 'default_workspace_ehsc',
      label: '默认工作空间',
      desc: 'Created by DataWorks',
      id: '120978',
      user: 'Dalei',
      type: '简单模式',
      groupNum: 2
    },
    {
      value: 'mc_2_hive',
      label: 'mc_2_hive',
      desc: 'Created by mc_2_hive',
      id: '122343',
      user: 'xudalei1977',
      type: '简单模式',
      groupNum: 2
    }
  ];
  const onItemClick = (space: {
    value?: string;
    label: any;
    desc?: string;
    id?: string;
    user?: string;
    type?: string;
    groupNum?: number;
  }) => {
    onAddPans({
      label: `工作空间：${space.label}`,
      children: (
        <SpaceConfig label={space.label} id={space.id} onAddPans={onAddPans} />
      ),
      key: space.id
    });
  };
  return (
    <div className="map-search">
      <div className="left-menu">
        <div className="options">
          <p className="title">类型</p>
          <Menu
            defaultSelectedKeys={['4']}
            mode="inline"
            items={items}
            inlineIndent={8}
          />
        </div>
        <div className="options">
          <p className="title">筛选条件</p>
          <p>负责人</p>
          <LineSpace height={8} />
          <Select
            placeholder="请输入成员名称进行搜索"
            size="small"
            style={{ width: '100%' }}
            options={[{ label: 'Dalei', value: 'Dalei' }]}
          />
          <LineSpace height={12} />
          <Radio>保留当前筛选</Radio>
        </div>
      </div>
      <div className="right-main">
        <div className="flex-row search-select">
          <Select
            options={[{ label: '相关性', value: '相关性' }]}
            prefix={<span style={{ marginRight: 8 }}>排序</span>}
            style={{ width: 160 }}
            defaultValue={'相关性'}
            size="small"
          />
          <WidthSpace width={12} />
          <span>共2条结果</span>
        </div>

        <List
          itemLayout="vertical"
          size="large"
          dataSource={spaces}
          renderItem={space => (
            <List.Item
              key={space.id}
              onClick={() => onItemClick(space)}
              actions={[
                <span className="handler-item">
                  <NumberOutlined />
                  <span className="handle-text">{space.id}</span>
                </span>,
                <span className="handler-item">
                  <UserOutlined />
                  <span className="handle-text">{space.user}</span>
                </span>,
                <span className="handler-item">
                  <TeamOutlined />
                  <span className="handle-text">{space.groupNum}</span>
                </span>,
                <span className="handler-item">
                  <GatewayOutlined />
                  <span className="handle-text">{space.type}</span>
                </span>
              ]}
            >
              <List.Item.Meta
                title={
                  <span>
                    <AppstoreOutlined />
                    <span className="space-title">
                      {space.label}（{space.value}）
                    </span>
                  </span>
                }
                description={space.desc}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
