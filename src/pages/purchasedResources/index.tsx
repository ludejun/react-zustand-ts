import { AntdTable, HomeCard, LineSpace, WidthSpace } from '@/components';
import { Button, Input, Tabs } from 'antd';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import './index.less';

export const PurchasedResources = () => {
  const ds = [
    {
      name: '增值版本',
      modal: '基础版',
      status: '华东1（杭州）',
      startDate: '正常',
      admin: '13天',
      orderStart: '2024年11月8日',
      orderEnd: '2025年3月9日',
      orderId: '62ff7a45-e435-4202-9d62-71005e00ea83'
    },
    {
      name: '增值版本',
      modal: '基础版',
      status: '华南1（深圳）',
      startDate: '正常',
      admin: '23天',
      orderStart: '2024年12月18日',
      orderEnd: '2025年3月19日',
      orderId: '78df736c-9884-4fce-acfa-e9b096d3f610'
    }
  ];

  const columns = [
    {
      title: '商品类型',
      dataIndex: 'name'
    },
    {
      title: '一级规格',
      dataIndex: 'status'
    },
    {
      title: '开通地域',
      dataIndex: 'modal'
    },
    {
      title: '状态',
      dataIndex: 'startDate'
    },
    {
      title: '距到期日',
      dataIndex: 'admin'
    },
    {
      title: '订单开始时间',
      dataIndex: 'orderStart'
    },
    {
      title: '订单结束时间',
      dataIndex: 'orderEnd'
    },
    {
      title: '订单实例ID',
      dataIndex: 'orderId'
    },
    {
      title: '资源组ID',
      dataIndex: 'resId',
      fixed: 'right',
      render: () => (
        <p className="table-handlers">
          <span>续费</span>
          <span>升级</span>
          <span>降级</span>
          <span>
            <MoreOutlined />
          </span>
        </p>
      )
    }
  ];
  return (
    <HomeCard>
      <h1>已购资源与服务</h1>

      <div className="purchased-type-cont">
        <div className="type-item">
          <img src="https://img.alicdn.com/imgextra/i4/O1CN01V252aZ1CiiHc71ShB_!!6000000000115-2-tps-128-128.png" />
          <div className="type-info flex">
            <div className="type-header">
              <span className="type-name">按量付费</span>
              <div className="flex-row">
                <Button size="small" type="primary">
                  新购
                </Button>
                <WidthSpace width={8} />
                <Button size="small">充值</Button>
                <WidthSpace width={8} />
                <Button size="small">计费文档</Button>
              </div>
            </div>
            <div className="number-items flex-row">
              <div className="number-item">
                <p>
                  <span className="number">2</span>
                  <span className="handler">加购</span>
                </p>
                <LineSpace height={6} />
                <p>DataWorks按量付费</p>
              </div>
            </div>
          </div>
        </div>
        <WidthSpace width={10} />
        <div className="type-item">
          <img src="https://img.alicdn.com/imgextra/i4/O1CN01V252aZ1CiiHc71ShB_!!6000000000115-2-tps-128-128.png" />
          <div className="type-info flex">
            <div className="type-header">
              <span className="type-name">包年包月</span>
            </div>
            <div className="number-items flex-row">
              <div className="number-item">
                <p>
                  <span className="number">2</span>
                  <span className="handler">加购</span>
                </p>
                <LineSpace height={6} />
                <p>DataWorks按量付费</p>
              </div>
              <div className="number-item">
                <p>
                  <span className="number">0</span>
                  <span className="handler">加购</span>
                </p>
                <LineSpace height={6} />
                <p>数据建模</p>
              </div>
              <div className="number-item">
                <p>
                  <span className="number">0</span>
                  <span className="handler">加购</span>
                </p>
                <LineSpace height={6} />
                <p>独享资源</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LineSpace />
      <Tabs
        defaultActiveKey="1"
        type="card"
        items={[
          {
            key: 'orderType1',
            label: '包年包月-功能类'
          },
          {
            key: 'orderType2',
            label: '包年包月-资源类'
          },
          {
            key: 'orderType3',
            label: '按量付费'
          }
        ]}
      />
      <div className="button-list">
        <Button type="primary">开通新的地域</Button>
        <WidthSpace width={8} />
        <div style={{ width: 300 }}>
          <Input prefix={<SearchOutlined />} placeholder="请输入实例ID" />
        </div>
      </div>
      <AntdTable dataSource={ds} columns={columns} />
    </HomeCard>
  );
};
