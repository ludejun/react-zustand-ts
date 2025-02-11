import { CSSProperties, ReactNode } from 'react';
import { Table, TableColumnsType } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { Pagination, LineSpace, Loading, NoData } from '../index';
import { TableProps as AntdTableProps, ColumnsType } from 'antd/lib/table';
import cls from './AntdTable.module.less';
import './index.less';

type TableProps<T = any> = AntdTableProps<T> & {
  columns?: ColumnsType<T>;
  wrapStyle?: CSSProperties;
  styleProps?: CSSProperties;
  size?: SizeType;
  showSizeChanger?: boolean; // 是否可以选择每页多少条
  showPagination?: boolean; // 是否展示分页
  pageNo?: number; // 当前页码
  pageSize?: number; // 每页条数
  totalRecord?: number; // 总数
  onPaginationChange?: any; //(pageNo: number, pageSize: number) => void; Record<string, unknown>
  loading?: boolean;
  height?: number | string;
  noDataHeight?: number;
  loadingHeight?: number;
  onChange?: (
    pagination: any,
    filters: any,
    sorter: { columnKey: string }
  ) => void;
  local?: boolean;
  remark?: ReactNode;
  renderRemark?: () => void;
  remarkHeight?: number | string;
  pageSizeOptions?: string[];
  wrapperClassName?: string;
  showScrollbar?: boolean;
  wrapBordered?: boolean;
  footerSpaceHeight?: number | string;
};

// eslint-disable-next-line import/prefer-default-export
export const AntdTable = <T extends object = any>(props: TableProps<T>) => {
  const {
    columns = [],
    dataSource = [],
    styleProps = {}, // table 样式
    size = 'small', // table 大小
    showSizeChanger = true, //  是否可以选择每页多少条
    showPagination = true, // 是否展示分页
    pageNo = 1, // 当前页码
    totalRecord = 0, // 总数
    pageSize = 5, // 每页条数
    onPaginationChange,
    loading = false,
    noDataHeight = 200,
    rowKey = Math.random().toString(),
    loadingHeight = 270,
    remark,
    remarkHeight = 24,
    bordered = false,
    pageSizeOptions = ['5', '10', '20', '50', '100'],
    wrapperClassName,
    onRow,
    wrapStyle,
    showHeader = true,
    showScrollbar = false,
    wrapBordered = true,
    footerSpaceHeight = 12,
    renderRemark = null,
    ...restProps
  } = props;
  const canClick = onRow?.({} as T).onClick;

  return (
    <Loading isLoading={loading} loadingHeight={loadingHeight}>
      <section
        className={`antd-table ${showScrollbar &&
          cls.showScrollbar} ${wrapperClassName}`}
        style={wrapStyle}
      >
        <div className={`${wrapBordered} table-border`}>
          <Table<T>
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            loading={false}
            style={{
              fontSize: 12,
              color: '#333',
              width: '100%',
              ...styleProps
            }}
            bordered={bordered}
            size={size}
            rowKey={rowKey}
            rowClassName={(_record, index) => {
              if (bordered) {
                return canClick ? cls.hasEventOnRow : '';
              } else {
                let className = 'light-row';
                if (index % 2 === Number(!!showHeader)) className = 'dark-row';
                return canClick ? cls.hasEventOnRow : className;
              }
            }}
            onRow={onRow}
            showHeader={showHeader}
            {...restProps}
          />
          {!loading &&
          (!dataSource || (dataSource && dataSource.length === 0)) ? (
            <NoData noDataHeight={noDataHeight} />
          ) : null}
        </div>
        {showPagination || remark || renderRemark ? (
          <LineSpace height={remarkHeight} />
        ) : null}
        {(remark || renderRemark) && showPagination ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              position: 'relative'
            }}
            className="remark-pagination"
          >
            <Pagination
              current={pageNo}
              pageSize={pageSize}
              total={totalRecord}
              showSizeChanger={showSizeChanger}
              onChange={onPaginationChange}
              pageSizeOptions={pageSizeOptions}
            />
          </div>
        ) : null}

        {!remark && !renderRemark && showPagination ? (
          <Pagination
            current={pageNo}
            pageSize={pageSize}
            total={totalRecord}
            showSizeChanger={showSizeChanger}
            onChange={onPaginationChange}
            pageSizeOptions={pageSizeOptions}
          />
        ) : null}
        {remark || renderRemark || showPagination ? (
          <LineSpace height={footerSpaceHeight} />
        ) : null}
      </section>
    </Loading>
  );
};

export type TableColumnsTypeWithSummary<D, RecordType> = (TableColumnsType<
  RecordType
>[number] & {
  summaryColSpan?: number;
  cellRender?: (
    data?: D,
    dataSource?: RecordType[],
    index?: number
  ) => ReactNode;
})[];

interface AntdTableSummaryProps<D, RecordType> {
  dataSource?: RecordType[];
  data?: D;
  rowClassName?: string;
  columns: TableColumnsTypeWithSummary<D, RecordType>;
}

export const AntdTableSummary = <D, RecordType = any>({
  dataSource,
  data,
  rowClassName = cls.tableSummaryRow,
  columns
}: AntdTableSummaryProps<D, RecordType>) => {
  if (!data && !dataSource) return null;
  return (
    <Table.Summary>
      <Table.Summary.Row className={rowClassName}>
        {columns.map((c, i) => {
          if (c.summaryColSpan === 0) return null;
          return (
            <Table.Summary.Cell
              className={c.className}
              key={i}
              index={i}
              colSpan={c.summaryColSpan}
              align={c.align}
            >
              {c.cellRender?.(data, dataSource, i)}
            </Table.Summary.Cell>
          );
        })}
      </Table.Summary.Row>
    </Table.Summary>
  );
};
