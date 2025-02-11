import {
  ArrowRightOutlined,
  DownOutlined,
  MoreOutlined
} from '@ant-design/icons';
import { AntdTable, FormRow, HomeCard, WidthSpace } from '@/components';
import { Button, Divider, Select, Steps } from 'antd';
import './index.less';

export const SyncTasks = () => {
  const ds = [
    {
      id: '24873',
      name: 'sync_mysql_to_odps_20250103_134910',
      info: [
        '整库离线',
        'MySQL: emr_workshop_mysql8',
        'MaxCompute: maxcompute'
      ],
      status: '已停止',
      result: [
        { title: '结构迁移' },
        { title: '全量同步' },
        { title: '增量同步', status: 'error', description: '已停止' }
      ]
    }
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '名称',
      dataIndex: 'name'
    },
    {
      title: '数据源同步方案',
      dataIndex: 'info',
      render: info => (
        <>
          {info.map(item => (
            <p style={{ marginTop: 12 }}>{item}</p>
          ))}
        </>
      )
    },
    {
      title: '状态',
      dataIndex: 'status'
    },
    {
      title: '执行概况',
      dataIndex: 'result',
      render: re => (
        <Steps direction="vertical" current={2} items={re} size="small" />
      )
    },
    {
      title: '操作',
      fixed: 'right',
      render: () => (
        <p className="table-handlers">
          <span>启动</span>
          <span>更多</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];
  return (
    <HomeCard>
      <div className="sync-tasks">
        <h1>数据源列表</h1>
        <p className="desc">
          完全向导式白屏化配置，轻松上手企业级数据同步任务配置。先选择您要同步的來源和去向类型，系统会自动展示它们支持的所有同步方案，一步即可建立所需同步任务。
        </p>
        <div className="task-create">
          <Select
            placeholder="来源：请选择"
            style={{ flex: 1 }}
            options={[
              { label: 'DB2', value: 'db2' },
              { label: 'Elasticsearch', value: 'elasticsearch' },
              { label: 'HBase', value: 'hbase' },
              { label: 'Hive', value: 'hive' },
              { label: 'Kafka', value: 'kafka' },
              { label: 'MongoDB', value: 'MongoDB' },
              { label: 'MySQL', value: 'MySQL' },
              { label: 'Oracle', value: 'Oracle' },
              { label: 'MaxCompute', value: 'MaxCompute' },
              { label: 'PolarDB', value: 'PolarDB' },
              { label: 'PostgreSQL', value: 'PostgreSQL' },
              { label: 'Redis', value: 'Redis' },
              { label: 'S3', value: 'S3' },
              { label: 'SSH', value: 'SSH' },
              { label: 'TiDB', value: 'TiDB' }
            ]}
          />
          <WidthSpace width={12} />
          <ArrowRightOutlined />
          <WidthSpace width={12} />
          <Select
            placeholder="去向：请选择"
            style={{ flex: 1 }}
            options={[
              { label: 'DB2', value: 'db2' },
              { label: 'Elasticsearch', value: 'elasticsearch' },
              { label: 'HBase', value: 'hbase' },
              { label: 'Hive', value: 'hive' },
              { label: 'Kafka', value: 'kafka' },
              { label: 'MongoDB', value: 'MongoDB' },
              { label: 'MySQL', value: 'MySQL' },
              { label: 'Oracle', value: 'Oracle' },
              { label: 'MaxCompute', value: 'MaxCompute' },
              { label: 'PolarDB', value: 'PolarDB' },
              { label: 'PostgreSQL', value: 'PostgreSQL' },
              { label: 'Redis', value: 'Redis' },
              { label: 'S3', value: 'S3' },
              { label: 'SSH', value: 'SSH' },
              { label: 'TiDB', value: 'TiDB' }
            ]}
          />
          <WidthSpace width={8} />
          <Button type="primary">新增同步任务</Button>
        </div>
        <Divider />
        <div className="task-list">
          <p className="list-title">任务列表</p>
          <div className="list-form">
            <FormRow
              formItemLabelCol={{ span: 6 }}
              formItemWrapperCol={{ span: 18 }}
              formRowLabelCol={[12, 12, 0]}
              formList={[
                [
                  {
                    label: '任务名称',
                    type: 'input',
                    placeholder: '请输入任务名'
                  },
                  {
                    label: '任务ID',
                    type: 'input',
                    placeholder: '请输入任务 ID'
                  }
                ]
              ]}
            />
            <WidthSpace width={16} />
            <Button size="small">搜索</Button>
            <WidthSpace />
            <Button size="small">搜索</Button>
            <WidthSpace />
            <span className="form-toggle">
              展开 <DownOutlined />
            </span>
          </div>

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
