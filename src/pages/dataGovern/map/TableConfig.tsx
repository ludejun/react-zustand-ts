import {
  AntdTable,
  FormRow,
  HomeCard,
  LineSpace,
  SimpleCard
} from '@/components';
import {
  AppstoreOutlined,
  MoreOutlined,
  TableOutlined
} from '@ant-design/icons';
import {
  Button,
  ConfigProvider,
  Descriptions,
  DescriptionsProps,
  Input,
  Tabs,
  Tag
} from 'antd';
import { data } from 'react-router-dom';

export const TableConfig = props => {
  const { label, id, onAddPans } = props;
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '产出任务',
      children: label,
      span: 'filled'
    },
    {
      key: '2',
      label: '环境',
      children: '生产',
      span: 'filled'
    },
    {
      key: '3',
      label: '空间所属区域',
      children: 'Hangzhou',
      span: 'filled'
    },
    {
      key: '33',
      label: '引擎所属区域',
      children: 'Shenzhen',
      span: 'filled'
    },
    {
      key: '4',
      label: '审批负责人',
      children: 'Dalei',
      span: 'filled'
    },
    {
      key: '44',
      label: 'Table Owner',
      children: 'Dalei',
      span: 'filled'
    },
    {
      key: '5',
      label: '创建时间',
      children: '2024年3月12日 12:15:10',
      span: 'filled'
    },
    {
      key: '6',
      label: '生命周期',
      children: '1',
      span: 'filled'
    },
    {
      key: '7',
      label: '是否分区表',
      children: '是',
      span: 'filled'
    },
    {
      key: '8',
      label: '存储量',
      children: '0B',
      span: 'filled'
    },
    {
      key: '9',
      label: '表说明',
      children: 'dwd层adx_dsp请求日志表',
      span: 'filled'
    },
    {
      key: '10',
      label: '表类型',
      children: 'EXTERNAL_TABLE',
      span: 'filled'
    },
    {
      key: '11',
      label: '标签',
      children: <Tag color="magenta">表责任人为主账号</Tag>,
      span: 'filled'
    }
  ];

  const onTableClick = (label, id) => {
    onAddPans({
      label: `表：${label}`,
      // children: (
      //   <SpaceConfig label={space.label} id={space.id} onAddPans={onAddPans} />
      // ),
      key: id
    });
  };
  const ds = [
    {
      no: '1',
      name: 'log_topic_id',
      type: 'string',
      desc: '日志中的topicid',
      base_desc: 'Dalei',
      key: '',
      for_key: '',
      hot: '3',
      level: ''
    },
    {
      no: '2',
      name: 'log_request_id',
      type: 'string',
      desc: '客户端发给adx的requestid',
      base_desc: 'Dalei',
      key: '',
      for_key: '',
      hot: '150',
      level: ''
    },
    {
      no: '3',
      name: 'data_center_name',
      type: 'string',
      desc: '数据中心名称',
      base_desc: 'Dalei',
      key: '',
      for_key: '',
      hot: '50',
      level: ''
    },
    {
      no: '4',
      name: 'log_send_ts',
      type: 'string',
      desc: '日志中的服务器发送时间',
      base_desc: 'Dalei',
      key: '',
      for_key: '',
      hot: '50',
      level: ''
    },
    {
      no: '5',
      name: 'creativity_id',
      type: 'string',
      desc: '广告创意ID',
      base_desc: 'Dalei',
      key: '',
      for_key: '',
      hot: '30',
      level: ''
    }
  ];
  const columns = [
    { title: '序号', render: (_, row, index) => <span>{index + 1}</span> },
    {
      title: '字段名称',
      dataIndex: 'name'
    },
    { title: '类型', dataIndex: 'type' },
    {
      title: '描述',
      dataIndex: 'desc'
    },
    {
      title: '业务描述',
      dataIndex: 'base_desc',
      width: 100
    },
    {
      title: '主键',
      dataIndex: 'key',
      width: 100
    },
    {
      title: '外键',
      dataIndex: 'for_key',
      width: 100
    },
    {
      title: '热度',
      dataIndex: 'hot'
    },
    {
      title: '安全等级',
      fixed: 'lever'
    }
  ];
  return (
    <div className="space-config">
      <div className="space-header">
        <div className="space-logo flex-center">
          <TableOutlined />
        </div>
        <div className="desc-cont">
          <p className="space-title">{label}</p>
          <p style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
            <Tag color="orange">MaxCompute</Tag>dwd层adx_dsp请求日志表
          </p>
          <LineSpace height={6} />
          <p>
            <Button type="primary" size="small">
              申请权限
            </Button>
            <Button size="small">加入/查看专辑</Button>
            <Button size="small">收藏</Button>
            <Button size="small">生成API</Button>
            <Button size="small">数据分析</Button>
          </p>
        </div>
      </div>
      <div className="space-main">
        <HomeCard title="表基础信息">
          <div className="flex-row">
            {[
              { value: 15, label: '浏览次数' },
              { value: 2, label: '读取次数' },
              { value: 5, label: '收藏次数' }
            ].map(item => (
              <div className="space-item" key={item.label}>
                <span className="item-value">{item.value}</span>
                <span className="item-label">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="info-list">
            <Descriptions
              items={items}
              size="small"
              styles={{
                label: {
                  width: 120
                }
              }}
            />
          </div>
        </HomeCard>
        <div className="table-cont">
          <Tabs
            type="card"
            items={[
              { key: '1', label: '明细信息' },
              { key: '2', label: '产出信息' },
              { key: '3', label: '血缘信息' },
              { key: '4', label: '使用说明' },
              { key: '5', label: '数据质量' },
              { key: '6', label: '使用记录' },
              { key: '7', label: '数据浏览' }
            ]}
          />
          {/* <LineSpace /> */}
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  titleFontSizeSM: 12
                }
              }
            }}
          >
            <Tabs
              items={[
                { key: '1', label: '字段信息' },
                { key: '2', label: '分区信息' },
                { key: '3', label: '变更记录' }
              ]}
              size="small"
            />
          </ConfigProvider>

          <div className="flex-row table-handler">
            <Input placeholder="搜索字段" size="small" style={{ width: 240 }} />
            <Button type="primary" size="small">
              编辑
            </Button>
            <Button size="small">推荐字段描述</Button>
            <Button size="small">生成Select</Button>
            <Button size="small">生成DDL</Button>
            <Button size="small">更多</Button>
          </div>
          <LineSpace />
          <AntdTable
            dataSource={[...ds, ...ds, ...ds]}
            columns={columns}
            showPagination
            totalRecord={1}
            // rowSelection={{ fixed: true }}
          />
        </div>
      </div>
    </div>
  );
};
