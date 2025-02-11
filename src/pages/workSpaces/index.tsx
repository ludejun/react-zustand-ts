import { AntdTable, HomeCard, WidthSpace } from '@/components';
import { Button, Input } from 'antd';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';

export const WorkSpaces = () => {
  const ds = [
    {
      name: 'mc_2_hive',
      modal: '简单模式',
      status: '运行中',
      startDate: '2024-12-29',
      admin: 'xudalei1977, Dalei',
      resId: 'rg-acfmyzosnygfe5a'
    }
  ];

  const columns = [
    {
      title: '工作空间名称/显示名',
      dataIndex: 'name'
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '模式',
      dataIndex: 'modal'
    },
    {
      title: '创建时间',
      dataIndex: 'startDate'
    },
    {
      title: '管理员',
      dataIndex: 'admin'
    },
    {
      title: '资源组ID',
      dataIndex: 'resId',
      fixed: 'right',
      render: () => (
        <p className="table-handlers">
          <span>详情</span>
          <span>快速进入</span>
          <span>管理</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];
  return (
    <HomeCard>
      <h1>工作空间列表</h1>

      <div className="button-list">
        <Button type="primary">创建工作空间</Button>
        <WidthSpace width={8} />
        <div style={{ width: 300 }}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="请输入工作空间/显示名"
          />
        </div>
      </div>
      <AntdTable dataSource={ds} columns={columns} />
    </HomeCard>
  );
};
