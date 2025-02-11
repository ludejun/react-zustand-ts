import { AntdTable, FormRow, HomeCard, WidthSpace } from '@/components';
import { Button, Input, Select } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

export const DataSource = () => {
  const ds = [
    {
      id: '01',
      data: 'MySQL_Source',
      info: {
        add: 'rm-bp1z69dodhh85z9qa.mysql.rds.aliyuncs.com:3306',
        name: 'retail_e_commerce',
        url:
          'jdbc:mysql://rm-bp1z69dodhh85z9qa.mysql.rds.aliyuncs.com:3306/retail_e_commerce',
        user: 'workshop'
      },
      desc: '',
      createTime: '2025-01-03 17:28:58'
    },
    {
      id: '02',
      data: 'emr_workshop_mysql8',
      info: {
        add:
          'emr-workshop-mysql8.chl9yxs6uftz.us-east-1.rds.amazonaws.com:3306',
        name: 'salesdb',
        url:
          'jdbc:mysql://emr-workshop-mysql8.chl9yxs6uftz.us-east-1.rds.amazonaws.com:3306/sale',
        user: 'admin'
      },
      desc: 'emr-workshop-mysql8',
      createTime: '2024-12-01 22:28:30'
    },
    {
      id: '03',
      data: 'mc_2_oss',
      info: {
        add: 'LTAI5tQwAkmCvYbyArqWTHfZ',
        name: 'xudalei-demo',
        url: 'https://oss-cn-hangzhou-internal.aliyuncs.com',
        user: 'workshop'
      },
      desc: '',
      createTime: '2024-04-18 13:09:09'
    },
    {
      id: '04',
      data: 'maxcompute',
      info: {
        add: 'rm-bp1z69dodhh85z9qa.mysql.rds.aliyuncs.com:3306',
        name: 'mc_2_hive',
        url: 'http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api',
        user: 'workshop'
      },
      desc: '',
      createTime: '2024-03-13 22:27:36'
    }
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'id'
    },
    {
      title: '数据源信息',
      dataIndex: 'data'
    },
    {
      title: '连接信息',
      dataIndex: 'info',
      render: info => (
        <div>
          <p>
            <span style={{ color: 'green', fontWeight: 'bold' }}>Address</span>
            ：{info.add}
          </p>
          <p>
            <span style={{ color: 'green', fontWeight: 'bold' }}>数据库名</span>
            ：{info.name}
          </p>
          <p>
            <span style={{ color: 'green', fontWeight: 'bold' }}>JdbcUrl</span>
            ：{info.url}
          </p>
          <p>
            <span style={{ color: 'green', fontWeight: 'bold' }}>用户名</span>：
            {info.user}
          </p>
        </div>
      )
    },
    {
      title: '描述',
      dataIndex: 'desc'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime'
    },
    {
      title: '操作',
      fixed: 'right',
      render: () => (
        <p className="table-handlers">
          <span>编辑</span>
          <span>查看关联任务</span>
          <span>删除</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];
  return (
    <HomeCard>
      <h1>数据源列表</h1>

      <div className="button-list">
        <Button type="primary">新增数据源</Button>
        <WidthSpace width={8} />
        <Button type="primary">批量新增数据源</Button>
        <WidthSpace width={8} />
        <FormRow
          formRowLabelCol={[12, 12, 0]}
          formList={[
            [
              {
                label: '数据源类型',
                type: 'select',
                placeholder: '请选择类型',
                options: [
                  { name: '全部类型', value: 'all' },
                  { name: 'DB2', value: 'db2' },
                  { name: 'Elasticsearch', value: 'elasticsearch' },
                  { name: 'HBase', value: 'hbase' },
                  { name: 'Hive', value: 'hive' },
                  { name: 'Kafka', value: 'kafka' },
                  { name: 'MongoDB', value: 'MongoDB' },
                  { name: 'MySQL', value: 'MySQL' },
                  { name: 'Oracle', value: 'Oracle' },
                  { name: 'MaxCompute', value: 'MaxCompute' },
                  { name: 'PolarDB', value: 'PolarDB' },
                  { name: 'PostgreSQL', value: 'PostgreSQL' },
                  { name: 'Redis', value: 'Redis' },
                  { name: 'S3', value: 'S3' },
                  { name: 'SSH', value: 'SSH' },
                  { name: 'TiDB', value: 'TiDB' }
                ]
              },
              {
                label: '数据源名称',
                type: 'input',
                placeholder: '请输入名称'
              }
            ]
          ]}
        />
      </div>
      <AntdTable dataSource={ds} columns={columns} />
    </HomeCard>
  );
};
