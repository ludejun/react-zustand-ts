import { Button, DatePicker, Input, Tabs, Tree } from 'antd';
import {
  BarChartOutlined,
  BlockOutlined,
  CodeOutlined,
  ConsoleSqlOutlined,
  DatabaseOutlined,
  FilterOutlined,
  NodeIndexOutlined,
  SearchOutlined,
  ShoppingOutlined,
  TableOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons';
import { AntdTable, LineSpace, WidthSpace } from '@/components';
import dayjs from 'dayjs';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { sql } from '@codemirror/lang-sql';
import './index.less';

export const SQLSearch = () => {
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      title: '我的文件'
    },
    {
      key: '2',
      icon: <TeamOutlined />,
      title: '他人文件'
    },

    {
      key: '3',
      icon: <DatabaseOutlined />,
      title: '公共数据',
      children: [
        {
          key: '111',
          title: '数字商业',
          icon: <ShoppingOutlined />,
          children: [
            {
              key: '1111',
              title: 'commerce_ali_e_commerce',
              icon: <TableOutlined />
            }
          ]
        },
        { key: '112', title: '生活服务', icon: <NodeIndexOutlined /> },
        { key: '113', title: '性能测试', icon: <CodeOutlined /> },
        { key: '114', title: '科技教育', icon: <BlockOutlined /> }
      ]
    }
  ];
  const defaultSql = `-- ********************************************************************--
-- author:xudalei1977
-- create time:2025-01-03 14:39:43
-- ********************************************************************--·

SELECT rank, count(*) as cnt FROM ads_top_selling_categories WHERE pt=\${bizdate}
group by rank
order by cnt desc;
`;
  const panes = [
    {
      label: '结果1',
      key: '1'
    },
    {
      label: '结果2',
      key: '3'
    }
  ];

  const ds = [
    {
      rank: '1',
      cate_id: '823423423',
      cate_name: 'DataCenter',
      total_sales_amount: 2988,
      order_count: 2,
      pt: 1.43
    }
  ];
  const columns = [
    {
      title: 'rank',
      dataIndex: 'rank',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: ds.map(item => ({
        text: item.rank
      }))
    },
    {
      title: 'cate_id',
      dataIndex: 'cate_id',
      width: 100,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: ds.map(item => ({
        text: item.cate_id
      }))
    },
    {
      title: 'cate_name',
      dataIndex: 'cate_name',
      width: 120,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: ds.map(item => ({
        text: item.cate_name
      }))
    },
    {
      title: 'total_sales_amount',
      dataIndex: 'total_sales_amount',
      width: 80,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: ds.map(item => ({
        text: item.total_sales_amount
      }))
    },
    {
      title: 'order_count',
      dataIndex: 'order_count',
      width: 100,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: ds.map(item => ({
        text: item.order_count
      }))
    },
    {
      title: 'pt',
      dataIndex: 'pt',
      width: 80,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
      filters: ds.map(item => ({
        text: item.pt
      }))
    }
  ];
  return (
    <div className="workflow-card sql-search-cont">
      <div className="left-menu">
        <div style={{ padding: '16px 8px 0' }} className="flex-row">
          <Input
            prefix={<SearchOutlined />}
            placeholder="搜索"
            size="small"
            // style={}
          />
          <WidthSpace width={8} />
          <FilterOutlined />
          <WidthSpace width={8} />
          <UnorderedListOutlined />
        </div>
        <LineSpace height={10} />
        {/* <ConfigProvider
          theme={{
            components: {
              Tree: { indentSize: 12 }
            }
          }}
        > */}
        <Tree
          showIcon
          defaultExpandAll
          treeData={items}
          blockNode
          defaultSelectedKeys={['1111']}
        />
        {/* </ConfigProvider> */}
      </div>
      <div className="right-main">
        <Tabs
          defaultActiveKey="1"
          items={[TableOutlined].map((Icon, i) => {
            const id = String(i + 1);
            return {
              key: id,
              label: 'commerce_ali_e_commerce',
              icon: <Icon />,
              closable: true
            };
          })}
          type="editable-card"
          hideAdd
        />
        <div className="sql-search-main">
          <div className="analysis-handler">
            <Button type="primary" size="small">
              运行
            </Button>
            <WidthSpace width={8} />
            <Button size="small">保存</Button>
            <WidthSpace width={8} />
            <Button size="small">格式化</Button>
            <WidthSpace width={8} />
            <DatePicker defaultValue={dayjs()} style={{ height: 24 }} />
          </div>
          <div className="sql-cont">
            <CodeMirror value={defaultSql} height="100%" extensions={[sql()]} />
          </div>
          <div className="sql-result">
            <Tabs
              items={panes}
              size="small"
              type="editable-card"
              hideAdd
              tabBarStyle={{ height: 28 }}
            />
            <div className="result-zone">
              <div className="left-handler">
                <div className="handler-item flex-center active">
                  <TableOutlined />
                </div>
                <div className="handler-item flex-center">
                  <BarChartOutlined />
                </div>
                <div className="handler-item flex-center">
                  <ConsoleSqlOutlined />
                </div>
              </div>
              <div className="right-table">
                <AntdTable dataSource={ds} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
