import { LineSpace } from '../Space';

export const NoData = (props: {
  noDataHeight?: number;
  isBuilding?: boolean;
  noDateText?: string;
  background?: string;
  noDataStyle?: React.CSSProperties;
}) => {
  const {
    noDataHeight = 200,
    isBuilding = false,
    noDateText = '暂无数据',
    background = '#fafafa',
    noDataStyle
  } = props || {};

  const middleHeight = (noDataHeight - (isBuilding ? 78 : 47)) / 2;

  return (
    <div
      className="noData-container"
      style={{
        paddingTop: middleHeight,
        height: noDataHeight,
        background,
        ...noDataStyle
      }}
    >
      {isBuilding ? (
        <div className="noData-content">
          <div className="flex-box">
            <div className="animate-turn">
              <i className="iconfont icon-gear icon-gear-big img"></i>
            </div>
            <div className="animate-turn-alternate mt--8">
              <i className="iconfont icon-gear icon-gear-sm img"></i>
            </div>
          </div>
          <p>功能正在建设中，欢迎提出宝贵建议...</p>
        </div>
      ) : (
        <div className="noData-content">
          <i className="iconfont icon-noData img"></i>
          <LineSpace height={5} background="unset" />
          <p className="f14 lh-half">{noDateText}</p>
        </div>
      )}
    </div>
  );
};
