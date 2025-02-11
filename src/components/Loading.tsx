import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

/**
 * Loading 加载中
 */

interface LoadingProps {
  isLoading?: boolean; // 是否加载中
  children?: React.ReactElement | null; // 容器组件
  loadingHeight?: number | string; // 容器高度
  color?: string;
  tip?: string;
  fontSize?: number | string;
  showChildren?: boolean; // 加载时是否要展示children
  wrapperClassName?: string;
}

export const Loading = (props: LoadingProps) => {
  const {
    isLoading,
    children,
    loadingHeight,
    fontSize = 24,
    color = '#DDDDDD',
    tip = '',
    showChildren = true,
    wrapperClassName = '',
  } = props;
  return (
    <div
      className={`${wrapperClassName} loading-container`}
      style={{ marginTop: 0, width: '100%' }}
    >
      <Spin
        style={{ height: loadingHeight }}
        spinning={isLoading}
        indicator={<LoadingOutlined style={{ fontSize, color }} />}
        tip={tip}
      >
        {isLoading && !showChildren ? null : children}
      </Spin>
    </div>
  );
};
