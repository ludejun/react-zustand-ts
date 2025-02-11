import { useState } from 'react';
import { Pagination as PaginationAntd } from 'antd';
import { WidthSpace } from '../Space';
import { PaginationProps } from 'antd/lib/pagination';
import './index.less';

type IPaginationProps = PaginationProps & {
  current?: number;
  total?: number;
  onChange?: (pageNum: number, size?: number) => void;
  showSizeChanger?: boolean;
  pageSize?: number;
  pageSizeOptions?: string[];
  restProps?: object;
};
export const Pagination = (props: IPaginationProps) => {
  const {
    current = 1, // 不要给我注释掉，我需要用！！！
    total = 0,
    onChange,
    showSizeChanger = true,
    pageSize = 5,
    restProps,
    pageSizeOptions = ['5', '10', '20', '50', '100']
  } = props;
  // const { total = 0, onChange = () => {} } = props;
  const [pageSizeNo, setPageSizeNo] = useState(10);
  if (!total) return null;
  return (
    <div
      className="pagination-antd"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}
    >
      <div>
        总共
        {total} 条记录
      </div>
      <WidthSpace />
      <PaginationAntd
        current={current}
        total={total}
        showSizeChanger={showSizeChanger}
        pageSizeOptions={pageSizeOptions}
        pageSize={pageSize || Number(pageSizeNo)}
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onShowSizeChange={(current: number, size: number) => {
          setPageSizeNo(size);
        }}
        onChange={(pageNum: number, size?: number) => {
          if (pageSize) {
            if (pageSize === size)
              typeof onChange === 'function' && onChange(pageNum, size);
            if (pageSize !== size)
              typeof onChange === 'function' && onChange(1, size);
          } else {
            if (pageSizeNo === size)
              typeof onChange === 'function' && onChange(pageNum, size);
            if (pageSizeNo !== size)
              typeof onChange === 'function' && onChange(1, size);
          }
        }}
        size="small"
        {...restProps}
      />
    </div>
  );
};
