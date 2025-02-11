import { ExportOutlined, RightOutlined } from '@ant-design/icons';
import { LineSpace, SimpleCard, WidthSpace } from '@/components';
import { Button, Divider } from 'antd';

export const HomeSteps = props => {
  const { curKey } = props;
  const data = [
    {
      desc: '',
      key: '准备工作',
      steps: [
        {
          title: '加入工作空间',
          desc:
            '工作空间是DataWorks管理任务、成员，分配角色和权限的基本单元，所有开发工作都将在具体的工作空间内完成。因此，进行任务开发前您需要先加入或者创建工作空间。',
          handlers: ['加入工作空间', '创建工作空间'],
          height: 128
        },
        {
          title: '创建数据源',
          desc:
            '您需要先将您的数据库或数据仓库，通过创建数据源的方式添加至DataWorks工作空间，或将您的集群注册至DataWorks工作空间，以便进行数据同步、数据分析与开发、数据调度等操作。',
          hrefLabel: '进入管理中心',
          hrefUrl: '/',
          height: 128
        }
      ]
    },
    {
      desc:
        '数据集成是稳定高效、弹性伸缩的数据同步平台，致力于提供复杂网络环境下、丰富的异构数据源之间高速稳定的数据移动及同步能力，支持离线、实时、以及两者混合的同步方式，同时具备表级别粒度以及库级别粒度的同步控制。',
      key: '数据集成',
      hrefUrl: '/dataSource',
      steps: [
        {
          title: '创建同步任务',
          render: (
            <>
              <SimpleCard
                title="创建同步任务"
                desc="选择来源与去向数据源类型。"
                height={70}
              />
              <LineSpace height={8} />
              <SimpleCard
                title="选择同步类型"
                desc="支持选择一次性全量/增量、周期性全量/增量。"
                height={88}
              />
            </>
          )
        },
        {
          title: '网络与资源配置',
          render: (
            <>
              <SimpleCard
                title="创建同步资源组"
                desc="提供稳定的同步任务资源支撑。"
                height={79}
              />
              <LineSpace height={8} />
              <SimpleCard
                title="打通网络"
                desc="打通源端与目标端网络。"
                height={79}
              />
            </>
          )
        },
        {
          title: '同步任务配置',
          render: (
            <>
              <SimpleCard
                title="同步任务配置"
                desc="选择要同步的库表，并配置源表属性、目标表属性及表字段映射关系。"
                height={166}
              />
            </>
          )
        },
        {
          title: '启动同步任务',
          render: (
            <>
              <SimpleCard
                title="启动同步任务"
                desc="运行已配置完毕的同步任务。"
                height={166}
              />
            </>
          )
        }
      ]
    },
    {
      desc:
        '数据开发（DataStudio）是一站式大数据开发平台，支持在线开发MaxCompute、EMR、HOLO、CDP、ADB等多种大数据引擎的数据处理任务。它集成了强大的任务调度能力，能够支持千万级的任务混合编排和调度。它还提供了一套任务发布的管控流程，保障任务产出的稳定性。',
      key: '数据开发',
      hrefUrl: '/syncTasks',
      steps: [
        {
          title: '数据汇聚',
          render: (
            <>
              <SimpleCard
                title="创建离线同步任务"
                desc="定期批量迁移数据。"
                height={160}
              />
              <LineSpace height={8} />
              <SimpleCard
                title="创建实时同步任务"
                desc="即时捕捉数据变更，保持两侧数据数据一致性。"
                height={160}
              />
            </>
          )
        },
        {
          title: '数据开发',
          render: (
            <>
              <SimpleCard
                title="加工数据"
                desc="新建业务流程->新建表->新建节点->编辑节点->定义节点调度属性->调试代码->保存并提交节点->冒烟测试->发布任务"
                height={328}
              />
            </>
          )
        },
        {
          title: '任务运维',
          render: (
            <>
              <SimpleCard
                title="管理周期任务"
                desc="展示调度任务列表与环境实例，并支持修改任务信息和手动触发，以生成待运行、补数据或测试实例。"
                height={142}
              />
              <LineSpace height={8} />
              <SimpleCard
                title="智能监控"
                desc="全面监控周期任务、实时计算任务和资源水位，支持自定义规则和智能基线进行报警，同时提供多种报警方式，并确保报警信息及时准确地传达给值班人员。"
                height={178}
              />
            </>
          )
        },
        {
          title: '质量校验',
          render: (
            <>
              <SimpleCard
                title="创建质量规则"
                desc="支持按表配置或按模板配置质量监控规则。"
                height={160}
              />
              <LineSpace height={8} />
              <SimpleCard
                title="配置去噪规则"
                desc="支持对当前工作空间某一时间内，数据质量规则校验异常的数据不触发报警，且不阻塞任务运行。"
                height={160}
              />
            </>
          )
        },
        {
          title: '数据共享',
          render: (
            <>
              <SimpleCard
                title="创建数据服务API"
                desc="创建API分组->新建业务流程->生成API->测试API->发布API->调用API->查看与管理API"
                height={328}
              />
            </>
          )
        }
      ]
    }
  ];
  const curData = data.filter(item => item.key === curKey)[0] || {};

  return (
    <>
      <p className="home-base-desc">
        {curData.hrefUrl ? (
          <span className="desc-link-button">
            <a href={curData.hrefUrl}>
              <ExportOutlined />
              <span style={{ marginLeft: 4 }}>立即进入</span>
            </a>
          </span>
        ) : null}
        {curData.desc}
      </p>
      <div className="step-list">
        {(curData.steps || []).map((item, index) => {
          return [
            index !== 0 ? (
              <div className="step-divider" key={`${item.title}-divider`}>
                <RightOutlined />
                <div />
              </div>
            ) : null,
            <div className="flex1" key={item.title}>
              <p className="step-title">
                {item.title}{' '}
                {item.hrefUrl ? (
                  <span
                    style={{
                      color: '#4a90e2',
                      display: 'inline',
                      marginLeft: 8
                    }}
                  >
                    <ExportOutlined />
                    <span style={{ marginLeft: 4 }}>{item.hrefLabel}</span>
                  </span>
                ) : null}
              </p>
              <Divider />
              <LineSpace />
              {item.render ? (
                item.render
              ) : (
                <div
                  className="simple-card simple-card-btw"
                  style={{ height: item.height }}
                >
                  <p className="simple-card-desc">{item.desc}</p>
                  {item.handlers ? (
                    <div>
                      {item.handlers.map((handler, index) => (
                        <Button
                          type={index === 0 ? 'primary' : 'default'}
                          key={handler}
                          style={{ marginLeft: index !== 0 ? 8 : 0 }}
                        >
                          {handler}
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ];
        })}
      </div>
    </>
  );
};
