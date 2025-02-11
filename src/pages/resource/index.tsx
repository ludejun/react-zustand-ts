import { AntdTable, HomeCard, LineSpace, WidthSpace } from '@/components';
import { Button, Input, Tabs } from 'antd';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import './index.less';

export const Resource = () => {
  const ds = [
    {
      name: 'DataWorks_RG_1',
      id: 'Serverless_res_group_479276069128834',
      useType: '通用型',
      status: '运行中',
      fee: '按量付费',
      endDate: '',
      startDate: '2024-12-29',
      curUse: '0.00CU'
    }
  ];

  const columns = [
    {
      title: '资源组名称/订单实例ID/备注',
      dataIndex: 'name',
      fixed: 'left'
    },
    {
      title: '资源组ID',
      dataIndex: 'id',
      width: 200
    },
    {
      title: '用途',
      dataIndex: 'useType'
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '计费形式/规格',
      dataIndex: 'fee'
    },
    {
      title: '到期时间',
      dataIndex: 'endDate'
    },
    {
      title: '创建时间',
      dataIndex: 'startDate'
    },
    {
      title: '当前利用',
      dataIndex: 'curUse'
    },
    {
      title: '操作',
      fixed: 'right',
      render: () => (
        <p className="table-handlers">
          <span>详情</span>
          <span>网络设置</span>
          <span>绑定工作空间</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];
  return (
    <HomeCard>
      <h1>资源组列表</h1>
      <Tabs
        type="card"
        items={[
          { key: '0', label: '独享资源组' },
          { key: '1', label: '公共资源组' }
        ]}
      />
      <LineSpace />
      <div className="button-list">
        <Button type="primary">创建资源组</Button>
        <WidthSpace width={8} />
        <div style={{ width: 300 }}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="请输入资源组名称/订单实例ID/备注"
          />
        </div>
      </div>
      <AntdTable dataSource={ds} columns={columns} showScrollbar />
    </HomeCard>
  );
};
