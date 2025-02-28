import {
  AntdTable,
  FormRow,
  HomeCard,
  LineSpace,
  SimpleCard
} from '@/components';
import { AppstoreOutlined, MoreOutlined } from '@ant-design/icons';
import { Descriptions, DescriptionsProps } from 'antd';
import { TableConfig } from './TableConfig';

export const SpaceConfig = props => {
  const { label, id, onAddPans } = props;
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: '名称',
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
      label: '技术负责人',
      children: 'Dalei',
      span: 'filled'
    },
    {
      key: '44',
      label: '业务负责人',
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
      label: '描述',
      children: '生产环境工作空间表信息',
      span: 'filled'
    }
  ];

  const onTableClick = (label, id) => {
    onAddPans({
      label: `表：${label}`,
      children: <TableConfig label={label} id={id} onAddPans={onAddPans} />,
      key: `table_${id}`
    });
  };
  const ds = [
    {
      id: 'table_123',
      name: 'dim_adx_creative_dd_external',
      desc: 'adx的买方creative公用字段表',
      admin: 'Dalei',
      memory: '0 B',
      circle: '3650',
      updateTime: '2024-03-28 19:34:14'
    },
    {
      id: 'table_2',
      name: 'dwd_log_athena_miniapp_di_external',
      desc: 'athena客户端日志明细表日表',
      admin: 'Dalei',
      memory: '0 B',
      circle: '1',
      updateTime: '2024-03-28 21:00:14'
    },
    {
      id: 'table_3',
      name: 'dwd_log_adx_dsp_request_hi_external',
      desc: 'dwd层adx_dsp请求日志表',
      admin: 'Dalei',
      memory: '372 KB',
      circle: '1',
      updateTime: '2025-01-28 19:34:14'
    },
    {
      id: 'table_4',
      name: 'dws_device_control_log',
      desc: 'App控制设备日志数据',
      admin: 'Dalei',
      memory: '2.11 MB',
      circle: '366',
      updateTime: '2024-03-29 19:57:14'
    },
    {
      id: 'table_5',
      name: 'dwd_trade_order',
      desc: '交易下单明细事实表，包含初步清洗和业务逻辑处理',
      admin: 'Dalei',
      memory: '27 MB',
      circle: '365',
      updateTime: '2024-01-09 14:20:14'
    },
    {
      id: 'table_6',
      name: 'ads_top_selling_categories',
      desc: '每日最畅销商品类目排名表',
      admin: 'Dalei',
      memory: '3.62 KB',
      circle: '3650',
      updateTime: '2024-01-28 10:00:14'
    },
    {
      id: 'table_7',
      name: 'dim_adx_creative_dd',
      desc: 'ADX的买方creative公用字段表',
      admin: 'Dalei',
      memory: '0 B',
      circle: '-',
      updateTime: '2024-03-22 11:23:14'
    },
    {
      id: 'table_8',
      name: 'dim_item_info',
      desc: '商品基础信息维度表',
      admin: 'Dalei',
      memory: '362.23 KB',
      circle: '365',
      updateTime: '2025-01-03 14:32:12'
    }
  ];
  const columns = [
    {
      title: '表名',
      dataIndex: 'name',
      render: (_, row) => {
        const { id } = row;
        return (
          <span className="table-name" onClick={() => onTableClick(_, id)}>
            {_}
          </span>
        );
      }
    },
    {
      title: '表说明',
      dataIndex: 'desc'
    },
    {
      title: '负责人',
      dataIndex: 'admin',
      width: 100
    },
    {
      title: '存储量',
      dataIndex: 'memory',
      width: 100
    },
    {
      title: '生命周期',
      dataIndex: 'circle',
      width: 100
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime'
    },
    {
      title: '操作',
      fixed: 'right',
      width: 160,
      render: () => (
        <p className="table-handlers">
          <span>收藏</span>
          <span>申请权限</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];
  return (
    <div className="space-config">
      <div className="space-header">
        <div className="space-logo flex-center">
          <AppstoreOutlined />
        </div>
        <div className="desc-cont">
          <p className="space-title">{label}</p>
        </div>
      </div>
      <div className="space-main">
        <HomeCard title="基础信息">
          <div className="flex-row">
            {[
              { value: 18, label: '总表数' },
              { value: 2, label: '成员' }
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
          <FormRow
            formRowLabelCol={[6, 8, 0]}
            formList={[
              [
                {
                  label: '表名',
                  type: 'input',
                  placeholder: '请输入名称'
                },
                {
                  label: '负责人',
                  type: 'select',
                  placeholder: '请输入成员明晨进行搜索',
                  options: [
                    { name: 'Dalei', value: 'Dalei' },
                    { name: 'xudalei1977', value: 'xudalei1977' }
                  ]
                }
              ]
            ]}
          />
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
    </div>
  );
};
