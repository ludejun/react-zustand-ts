import { AntdTable, HomeCard, LineSpace, WidthSpace } from '@/components';
import { Button, Input, Select, Tree } from 'antd';
import {
  MoreOutlined,
  ProductOutlined,
  SearchOutlined
} from '@ant-design/icons';

export const Rules = () => {
  const ds = [
    {
      name: '28556806 / dim_adx_creative_dd_external表行数',
      desc: '时效性',
      table: 'ods_trade_order',
      level: '表级',
      template: '表行数，1天差值',
      monitor: '表行数上周期差值',
      range: 'pt=$[yyyymmdd-1]',
      type: '弱规则',
      status: '启用',
      link: '未关联'
    },
    {
      name: '29556111 / ods_trade_order表行数',
      desc: '一致性',
      table: 'dim_adx_creative_dd_external',
      level: '表级',
      template: '表行数，7天差值',
      monitor: '表行数上周期差值',
      range: 'pt=$[yyyymmdd-1]',
      type: '弱规则',
      status: '启用',
      link: '未关联'
    },
    {
      name: '28533344 / dim_adx_creative_dd_external表行数',
      desc: '准确性',
      table: 'ods_trade_order',
      level: '表级',
      template: '表行数，30天差值',
      monitor: '表行数上周期差值',
      range: 'pt=$[yyyymmdd-1]',
      type: '弱规则',
      status: '启用',
      link: '未关联'
    }
  ];
  const columns = [
    {
      title: 'ID/规则名称',
      dataIndex: 'name'
    },
    {
      title: '质量维度',
      dataIndex: 'desc',
      width: 80
    },
    {
      title: '表名',
      dataIndex: 'table',
      width: 100
    },
    {
      title: '关联范围',
      dataIndex: 'level',
      width: 80
    },
    {
      title: '规则模板',
      dataIndex: 'template',
      width: 100
    },
    {
      title: '监控阈值',
      dataIndex: 'monitor',
      width: 80
    },
    {
      title: '质量监控数据范围',
      dataIndex: 'range'
    },
    {
      title: '重要程度',
      dataIndex: 'type',
      width: 80
    },
    {
      title: '启用状态',
      dataIndex: 'status',
      width: 80
    },
    {
      title: '关联调度',
      dataIndex: 'link',
      width: 80
    },
    {
      title: '操作',
      fixed: 'right',
      width: 160,
      render: () => (
        <p className="table-handlers">
          <span>修改</span>
          <span>告警订阅</span>
          <span>删除</span>
          <span>操作日志</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];

  const items = [
    {
      key: '3',
      // icon: <DatabaseOutlined />,
      title: 'MaxCompute',
      children: [{ key: '111', title: 'mc_2_hive', icon: <ProductOutlined /> }]
    }
  ];
  return (
    <HomeCard>
      <div className="dashboard-title flex-row">
        <h1>规则列表</h1>
        <Button type="primary">创建规则</Button>
      </div>
      <div className="rules-main">
        <HomeCard title="数据源">
          <Tree showIcon defaultExpandAll treeData={items} blockNode />
        </HomeCard>
        <div className="rules-list">
          <div className="rules-handler">
            <Input
              prefix={<SearchOutlined />}
              placeholder="请输入表名查表"
              size="small"
              style={{ width: 200 }}
            />
            <WidthSpace width={8} />
            <Select
              options={[
                { label: '平均值，1、7、30天波动率', value: 'avg' },
                { label: '汇总值，1、7、30天波动率', value: 'sum' },
                { label: '最小值，1、7、30天波动率', value: 'min' },
                { label: '最大值，1、7、30天波动率', value: 'max' }
              ]}
              prefix={<span style={{ marginRight: 8 }}>规则模板</span>}
              style={{ width: 200 }}
              defaultValue={'相关性'}
              size="small"
            />
            <WidthSpace width={8} />
            <Select
              options={[
                { label: '数据质量', value: '1' },
                { label: '数据开发', value: '2' },
                { label: '数据标准', value: '3' }
              ]}
              prefix={<span style={{ marginRight: 8 }}>配置来源</span>}
              style={{ width: 160 }}
              defaultValue={'相关性'}
              size="small"
            />
            <WidthSpace width={8} />
            <Select
              options={[
                { label: '有效性', value: 'avg' },
                { label: '时效性', value: 'sum' },
                { label: '唯一性', value: 'min' },
                { label: '准确性', value: '4' },
                { label: '一致性', value: '5' },
                { label: '完整性', value: '6' }
              ]}
              prefix={<span style={{ marginRight: 8 }}>质量维度</span>}
              style={{ width: 160 }}
              defaultValue={'相关性'}
              size="small"
            />
          </div>
          <LineSpace />
          <AntdTable
            dataSource={ds}
            columns={columns}
            showPagination
            totalRecord={1}
            rowSelection={{ fixed: true }}
          />
        </div>
      </div>
    </HomeCard>
  );
};
