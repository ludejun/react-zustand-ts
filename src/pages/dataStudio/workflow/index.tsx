import { useEffect, useRef } from 'react';
import { Button, Input, Menu, Radio, Select, Tabs, Tree } from 'antd';
import {
  ApartmentOutlined,
  AppstoreAddOutlined,
  BlockOutlined,
  CodeOutlined,
  DatabaseOutlined,
  FilterOutlined,
  NodeIndexOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { Node } from './Node';
import './index.less';
import { LineSpace, WidthSpace } from '@/components';

export const Workflow = () => {
  const items = [
    {
      key: '1',
      // icon: undefined,
      title: '业务流程',
      children: [
        {
          key: '11',
          title: 'Workflow',
          icon: <ApartmentOutlined />,
          children: [
            { key: '111', title: '数据集成', icon: <DatabaseOutlined /> },
            { key: '112', title: 'MaxComputer', icon: <NodeIndexOutlined /> },
            { key: '113', title: '算法', icon: <CodeOutlined /> },
            { key: '114', title: '通用', icon: <BlockOutlined /> },
            { key: '115', title: '数据库', icon: <DatabaseOutlined /> },
            { key: '116', title: '自定义', icon: <AppstoreAddOutlined /> }
          ]
        }
      ]
    }
  ];
  return (
    <div className="workflow-card">
      <div className="left-menu">
        <div className="menu-title">
          <span>数据开发</span>
          <Button type="primary" size="small">
            + 新建
          </Button>
        </div>
        <Radio.Group
          defaultValue={'all'}
          size="small"
          style={{ padding: '4px 8px', fontSize: 12 }}
          optionType="button"
          buttonStyle="solid"
          block
        >
          <Radio.Button value="all">全部</Radio.Button>
          <Radio.Button value="owner">我负责的</Radio.Button>
          <Radio.Button value="collect">我收藏的</Radio.Button>
        </Radio.Group>
        <div style={{ padding: '0 8px' }} className="flex-row">
          <Input
            prefix={<SearchOutlined />}
            placeholder="文件名称/创建人"
            size="small"
          />
          <WidthSpace width={2} />
          <FilterOutlined />
        </div>
        <LineSpace height={10} />
        <Tree
          showIcon
          defaultExpandAll
          // defaultSelectedKeys={['1', '11']}
          treeData={items}
          blockNode
        />
      </div>
      <div className="right-main">
        <Tabs
          defaultActiveKey="1"
          items={[ApartmentOutlined].map((Icon, i) => {
            const id = String(i + 1);
            return {
              key: id,
              label: 'Workflow',
              icon: <Icon />
            };
          })}
          type="card"
        />
        <Node />
      </div>
    </div>
  );
};
