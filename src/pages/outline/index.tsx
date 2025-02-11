import {
  CloudSyncOutlined,
  FileTextOutlined,
  MessageOutlined,
  NodeIndexOutlined,
  PoweroffOutlined,
  TableOutlined,
  UserOutlined
} from '@ant-design/icons';
import { HomeCard, LineSpace, StatusCard, WidthSpace } from '@/components';
import { Divider, List, Segmented, Select } from 'antd';
import { useState } from 'react';
import { HomeSteps } from './HomeSteps';
import './index.less';

export const Outline = () => {
  const [value, setValue] = useState<string>('准备工作');

  return (
    <div className="main-outline">
      <div className="outline-left">
        <HomeCard title="快速开始与最佳实践">
          <Segmented<string>
            options={[
              '准备工作',
              '数据集成',
              '数据开发',
              '数据分析',
              '数据建模'
            ]}
            value={value}
            onChange={setValue}
          />
          <HomeSteps curKey={value} />
        </HomeCard>
        <LineSpace height={16} background="transparent" />
        <HomeCard title="最近浏览">
          <div className="history-list">
            {[
              {
                title: '同步任务',
                icon: <CloudSyncOutlined />,
                list: [
                  {
                    label: 'sync_mysql_to_odps_20250110_141519',
                    id: '25115',
                    user: 'Dalei'
                  },
                  {
                    label: 'sync_mysql_to_odps_20250110_141531',
                    id: '25116',
                    user: 'Dalei'
                  }
                ]
              },
              {
                title: '节点',
                icon: <NodeIndexOutlined />,
                list: [
                  {
                    label: 'dwd_trade_order',
                    id: '25115',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_info',
                    id: '25116',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_order',
                    id: '25117',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_info',
                    id: '25118',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_order',
                    id: '25119',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_info',
                    id: '25110',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_order',
                    id: '25111',
                    user: 'Dalei'
                  },
                  {
                    label: 'dwd_trade_info',
                    id: '25112',
                    user: 'Dalei'
                  }
                ]
              },
              {
                title: '表',
                icon: <TableOutlined />,
                list: [
                  {
                    label: 'dws_daily_category_sales',
                    id: '25115',
                    user: 'Dalei'
                  },
                  {
                    label: 'dws_daily_category_demo',
                    id: '25116',
                    user: 'Dalei'
                  }
                ]
              }
            ].map((card, index) => {
              return [
                index !== 0 ? <WidthSpace /> : null,
                <div className="history-card" key={card.title}>
                  <p className="history-title">
                    {card.icon}
                    <span style={{ marginLeft: 4 }}>{card.title}</span>
                  </p>
                  <List
                    itemLayout="horizontal"
                    dataSource={card.list}
                    bordered
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          title={item.label}
                          description={
                            <p>
                              <span style={{ marginRight: 12 }}>
                                # {item.id}
                              </span>
                              <UserOutlined />
                              <span style={{ marginLeft: 4 }}>{item.user}</span>
                            </p>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              ];
            })}
          </div>
        </HomeCard>
      </div>
      <div className="outline-right">
        <HomeCard title={'Dalei'}>
          {/* <p>204362110216724027</p> */}
          <StatusCard label="全部待我审批" value={1} />
          <LineSpace />
          <Divider />
          <LineSpace />
          <Select
            defaultValue="default_workspace_ehsc"
            style={{ width: '100%' }}
            options={[
              {
                value: 'default_workspace_ehsc',
                label: '默认工作空间'
              },
              {
                value: 'mc_2_hive',
                label: 'mc_2_hive'
              }
            ]}
          />
          <LineSpace />
          <div className="user-platform">
            {[
              { label: '待治理问题', value: 10, status: 'normal' },
              { label: '未运行实例', value: 2, status: 'danger' },
              { label: '运行失败实例', value: 4, status: 'danger' },
              { label: '基线破线', value: 0, status: 'danger' },
              { label: '基线预警', value: 1, status: 'warning' },
              { label: '等待资源实例', value: 5, status: 'warning' },
              { label: '运行成功实例', value: 2, status: 'success' },
              { label: '质量任务-报警和阻塞', value: 10, status: 'normal' }
            ].map(item => (
              <StatusCard
                key={item.label}
                label={item.label}
                value={item.value}
                status={item.status}
                style={{ width: 148 }}
              />
            ))}
          </div>
        </HomeCard>
        <LineSpace height={16} background="transparent" />
        <HomeCard title="常用功能">
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
        </HomeCard>
      </div>
    </div>
  );
};
