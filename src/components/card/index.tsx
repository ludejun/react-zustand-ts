import { Divider } from 'antd';
import './index.less';

export const HomeCard = props => {
  const { title, headerLine = false, children } = props;
  return (
    <div className="home-card">
      {title ? <p className="home-card-title">{title}</p> : null}
      {headerLine ? <Divider /> : null}
      {children}
    </div>
  );
};

export const StatusCard = props => {
  const { label, value, status = 'normal', style } = props;
  const bgMap = {
    normal: 'rgba(250, 250, 250, 1)',
    danger: 'rgba(255, 237, 236, 1)',
    warning: 'rgba(252, 246, 234, 1)',
    success: 'rgba(234, 250, 236, 1)'
  };
  const colorMap = {
    normal: 'rgb(51, 51, 51)',
    danger: 'rgb(213, 11, 22)',
    warning: 'rgb(234, 168, 54)',
    success: 'rgb(0, 148, 49)'
  };
  return (
    <div
      className="status-card"
      style={{ backgroundColor: bgMap[status], ...style }}
    >
      <p className="status-card-label">{label}</p>
      <p className="status-card-value" style={{ color: colorMap[status] }}>
        {value}
      </p>
    </div>
  );
};

export const SimpleCard = props => {
  const { title, desc, height = 'unset' } = props;
  return (
    <div className="simple-card" style={{ height }}>
      {title ? <p className="simple-card-title">{title}</p> : null}
      <p className="simple-card-desc">{desc}</p>
    </div>
  );
};
