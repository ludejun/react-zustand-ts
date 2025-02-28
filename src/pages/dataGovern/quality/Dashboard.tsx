import { HomeCard, StatusCard } from '@/components';
import { DatePicker, Empty, Tabs } from 'antd';
import { Chart } from '@antv/g2';
import './index.less';
import dayjs from 'dayjs';
import { useEffect } from 'react';

export const Dashboard = () => {
  const items = [
    {
      label: '已配置表数',
      desc: '资产比率',
      num: '6%',
      key: '1'
    },
    {
      label: '未配置质量规则',
      desc: '表数',
      num: '17',
      key: '2'
    },
    {
      label: '未启用质量规则',
      desc: '表数',
      num: '0',
      key: '3'
    },
    {
      label: '关联调度配置缺失',
      desc: '表数',
      num: '1',
      key: '4'
    },
    {
      label: '告警接收对象缺失',
      desc: '表数',
      num: '0',
      key: '5'
    }
  ];
  useEffect(() => {
    const chart = new Chart({
      container: 'chart-cont',
      height: 280,
      padding: 0,
      inset: 0,
      autoFit: true
    });

    // chart.coordinate({ type: 'theta', innerRadius: 0.6 });

    const facetRect = chart
      .facetRect()
      .data([{ type: '表质量通过率', percent: 56.4, color: '#0a9afe' }])
      .encode('x', 'type')
      .axis(false)
      .legend(false)
      .view()
      .attr('frame', false)
      .coordinate({ type: 'theta', innerRadius: 0.6, outerRadius: 0.8 });

    facetRect
      .interval()
      .encode('y', 100)
      .scale('y', { zero: true })
      .style('fill', '#e8e8e8')
      .tooltip(false)
      .animate(false);

    facetRect
      .interval()
      .encode('y', 'percent')
      .encode('color', 'color')
      .scale('color', { type: 'identity' })
      .tooltip(data => ({
        name: data.type,
        value: data.percent
      }))
      .animate('enter', { type: 'waveIn', duration: 1000 });
    facetRect
      .text()
      .encode('text', 'percent')
      .style('textAlign', 'center')
      .style('textBaseline', 'middle')
      .style('fontSize', 30)
      .style('color', '#8c8c8c')
      .style('x', '50%')
      .style('y', '50%')
      .style('dx', -10)
      .style('dy', -20);
    facetRect
      .text()
      .encode('text', '%')
      .style('textAlign', 'center')
      .style('textBaseline', 'middle')
      .style('fontSize', 30)
      .style('color', '#8c8c8c')
      .style('x', '50%')
      .style('y', '50%')
      .style('dx', 35)
      .style('dy', -20);
    facetRect
      .text()
      .encode('text', 'type')
      .style('textAlign', 'center')
      .style('textBaseline', 'middle')
      .style('fontSize', 14)
      // .style('fontWeight', 500)
      .style('color', '#666666')
      .style('x', '50%')
      .style('y', '50%')
      .style('dy', 30);

    chart.render();
  }, []);

  return (
    <HomeCard>
      <div className="dashboard-title flex-row">
        <h1>质量大盘</h1>
        <DatePicker style={{ height: 24 }} defaultValue={dayjs()} />
      </div>
      <Tabs
        items={[
          {
            key: 'all',
            label: '全部'
          },
          {
            key: 'MaxCompute',
            label: 'MaxCompute'
          }
        ]}
      />
      <div className="dashboard-cont">
        <HomeCard title="质量维度通过率">
          <div className="total-data">
            <div id="chart-cont"></div>
            <div className="chart-legend">
              <p>1. 完整性：80%</p>
              <p>2. 准确性：67%</p>
              <p>3. 一致性：40%</p>
              <p>4. 时效性：69%</p>
              <p>5. 唯一性：38%</p>
              <p>6. 有效性：60%</p>
            </div>
          </div>
        </HomeCard>
        <HomeCard title="重点关注">
          <div className="focus">
            <StatusCard label="已配置规则表数" value={1} />
            <StatusCard label="质量问题表数" value={0} />
            <StatusCard label="强规则问题表数" value={10} />
            <StatusCard label="弱规则问题表数" value={5} />
          </div>
        </HomeCard>
        <HomeCard title="实例趋势分析">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </HomeCard>
        <HomeCard title="实例运行状态">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </HomeCard>
        <HomeCard title="TOP质量问题表">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </HomeCard>
        <HomeCard title="TOP质量问题负责人">
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </HomeCard>
      </div>

      <HomeCard title="质量配置分析">
        <div className="dashboard-tab-custom">
          {items.map(item => (
            <div className="dashboard-tab-item" key={item.key}>
              <p className="tab-label">{item.label}</p>
              <p className="tab-desc">{item.desc}</p>
              <p className="tab-num">{item.num}</p>
            </div>
          ))}
        </div>
      </HomeCard>
    </HomeCard>
  );
};
