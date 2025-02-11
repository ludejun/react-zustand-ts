import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  FormInstance,
  FormItemProps,
  Input,
  InputNumber,
  Row,
  Select,
  Spin
} from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export type formListItemType = FormItemProps & {
  options?:
    | Record<string, React.ReactNode | string>
    | SelectionType.OptionListType;
  initValue?: string | any[];
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
  type?:
    | 'select'
    | 'input'
    | 'datePicker'
    | 'checkBox'
    | 'rangePicker'
    | 'inputNum'
    | 'inputGroup'
    | 'renderNode';
  subGroup?: { itemFormItemProps?: FormItemProps } & FormRowProps['formList'];
  formItemStyle?: React.CSSProperties;
  renderNode?: (...props: any) => React.ReactNode;
  formItemProps?: FormItemProps;
};
export type FormRowProps = {
  formItemLabelCol?: {
    span?: number;
    xxl?: number;
  };
  formItemWrapperCol?: {
    span?: number;
    xxl?: number;
  };
  formList?: formListItemType[][];
  formRef?: FormInstance;
  onFinish?: (values?: Record<string, any>) => void;
  formSize?: SizeType;
  optionObj?: Record<string, any>; // 这个属性已经废弃请不要再使用
  renderBtn?: (...props: any) => React.ReactNode;
  leftRenderBtn?: (...props: any) => React.ReactNode;
  qryTitle?: string;
  renderQryBtn?: boolean;
  formStyle?: React.CSSProperties;
  // qryLoading: boolean;
  formRowLabelCol?: [number, number, number];
  form?: FormInstance;
  isHasRightBtn?: boolean;
  onFormChange?: (changedValues: any, allValues: any) => void;
  qryCode?: string; // 查询按钮的事件码
  qryDisabled?: boolean; // 查询按钮是否禁用
};
export const FormRow = ({
  formItemLabelCol = { span: 8, xxl: 3 },
  formItemWrapperCol = { span: 16, xxl: 21 },
  formRowLabelCol = [8, 8, 8],
  formStyle,
  formSize = 'small',
  onFormChange,
  onFinish,
  formList = []
}: FormRowProps) => {
  const [formRow] = Form.useForm<FormInstance>();

  return (
    <div className={`form-row`}>
      <Form
        onValuesChange={onFormChange}
        name={`formRowForm${Math.random()}`}
        form={formRow}
        onFinish={onFinish}
        labelCol={formItemLabelCol}
        size={formSize}
        // initialValues={initialValues}
        wrapperCol={formItemWrapperCol}
        style={{
          // backgroundColor: '#f9f9f9',
          padding: '4px 0',
          ...formStyle
        }}
      >
        {formList.map((formItemList, index) => (
          <Row
            key={`${index?.toString()}k`}
            gutter={24}
            style={{
              marginBottom: index + 1 === formList.length ? 0 : '10px'
            }}
          >
            {formItemList.map(
              (
                {
                  initValue,
                  name,
                  label,
                  placeholder,
                  onChange,
                  options,
                  type,
                  subGroup = [],
                  formItemStyle = {},
                  renderNode,
                  formItemProps = {},
                  ...restProps
                },
                _itemIndex
              ) => (
                <Col span={formRowLabelCol[_itemIndex]} key={_itemIndex}>
                  {type === 'select' ? (
                    <Form.Item
                      label={label}
                      name={name}
                      style={{
                        marginBottom: 0,
                        width: '100%',
                        ...formItemStyle
                      }}
                      colon={false}
                      {...formItemProps}
                    >
                      <Select
                        placeholder={placeholder}
                        showSearch
                        optionFilterProp="children"
                        allowClear
                        {...restProps}
                      >
                        {(restProps?.loading || null) && (
                          <Select.Option
                            value={'loading'}
                            key={'loading'}
                            disabled
                          >
                            <Spin size="small" />
                          </Select.Option>
                        )}
                        {(!restProps?.loading || null) &&
                          options &&
                          options.map(({ name, value, label }) => (
                            <Select.Option
                              value={value}
                              key={value}
                              label={label || name}
                            >
                              {name}
                            </Select.Option>
                          ))}
                      </Select>
                    </Form.Item>
                  ) : null}
                  {type === 'checkBox' ? (
                    <Form.Item
                      label={' '}
                      valuePropName={'checked'}
                      name={name}
                      style={{ marginBottom: 0, ...formItemStyle }}
                      colon={false}
                      {...formItemProps}
                    >
                      <Checkbox
                        onChange={e => {
                          onChange && onChange(e, formRow);
                        }}
                      >
                        {label && <span className={'f12'}>{label}</span>}
                      </Checkbox>
                    </Form.Item>
                  ) : null}
                  {type === 'datePicker' ? (
                    <Form.Item
                      label={label}
                      name={name}
                      style={{ marginBottom: 0, ...formItemStyle }}
                      colon={false}
                      {...formItemProps}
                    >
                      <DatePicker
                        style={{ width: '100%' }}
                        allowClear
                        onChange={e => {
                          onChange && onChange(e);
                        }}
                        {...restProps}
                      />
                    </Form.Item>
                  ) : null}
                  {type === 'rangePicker' ? (
                    <Form.Item
                      label={label}
                      name={name}
                      style={{ marginBottom: 0, ...formItemStyle }}
                      colon={false}
                      {...formItemProps}
                    >
                      <DatePicker
                        dateType="rangePicker"
                        styleProps={{ width: '100%', height: '24px' }}
                        placeholder={
                          Array.isArray(placeholder)
                            ? placeholder
                            : ['开始时间', '结束时间']
                        }
                        allowClear
                        onChange={e => {
                          onChange && onChange(e, formRow);
                        }}
                        {...restProps}
                      />
                    </Form.Item>
                  ) : null}
                  {type === 'input' ? (
                    <Form.Item
                      label={label}
                      name={name}
                      style={{ marginBottom: 0, ...formItemStyle }}
                      colon={false}
                      {...formItemProps}
                    >
                      <Input
                        autoComplete={'off'}
                        placeholder={placeholder}
                        allowClear
                        onChange={e => {
                          onChange && onChange(e, formRow);
                        }}
                        {...restProps}
                      />
                    </Form.Item>
                  ) : null}
                  {type === 'inputNum' ? (
                    <Form.Item
                      label={label}
                      name={name}
                      style={{ marginBottom: 0, ...formItemStyle }}
                      colon={false}
                      {...formItemProps}
                    >
                      <InputNumber
                        style={{ width: '100%' }}
                        onChange={e => {
                          onChange && onChange(e, formRow);
                        }}
                        placeholder={placeholder}
                        size={'small'}
                        {...restProps}
                      />
                    </Form.Item>
                  ) : null}
                  {/* {type === 'inputGroup' ? (
                    <Form.Item
                      label={label}
                      key={name}
                      style={{ marginBottom: 0, ...formItemStyle }}
                      colon={false}
                      {...formItemProps}
                    >
                      <Space.Compact size="small">
                        {subGroup.map((item, index, arr) => {
                          const {
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            initValue,
                            name: itemName,
                            placeholder: itemPlaceholder,
                            options: itemOptions,
                            onChange: itemOnChange,
                            type: itemType,
                            itemFormItemProps = {},
                            ...restItemProps
                          } = item;

                          return (
                            <Fragment key={itemName}>
                              {itemType === 'select' ? (
                                <Form.Item
                                  // name={[name, itemName]}
                                  name={itemName}
                                  {...itemFormItemProps}
                                >
                                  <SelectOnSearch
                                    placeholder={itemPlaceholder}
                                    onChange={e => {
                                      itemOnChange && itemOnChange(e);
                                      // eslint-disable-next-line array-callback-return
                                      arr.map((_item, _index) => {
                                        if (_index > index) {
                                          // formRow.setFieldsValue({
                                          //   [name]: {
                                          //     [_item.name]: null,
                                          //   },
                                          // });

                                          formRow.setFieldsValue({
                                            [_item.name]: undefined
                                          });
                                        }
                                      });
                                    }}
                                    // style={{ with: '100% !important' }} 如果不加自定义宽度,select的宽度会根据内容来撑,长度会很短
                                    allowClear
                                    {...restItemProps}
                                  >
                                    {(restItemProps?.loading || null) && (
                                      <Select.Option
                                        value={'loading'}
                                        key={'loading'}
                                        disabled
                                      >
                                        <Spin size={'small'} />
                                      </Select.Option>
                                    )}
                                    {(!restItemProps?.loading || null) &&
                                      itemOptions &&
                                      !(
                                        optionObj[name] &&
                                        optionObj[name][itemName]
                                      ) &&
                                      itemOptions.map(
                                        ({ name, value, label }) => (
                                          <Select.Option
                                            value={value}
                                            key={value}
                                            label={label || name}
                                          >
                                            {name}
                                          </Select.Option>
                                        )
                                      )}
                                    {(!restItemProps?.loading || null) &&
                                      !itemOptions &&
                                      optionObj[name] &&
                                      optionObj[name][itemName] &&
                                      optionObj[name][itemName].map(
                                        ({ name, value, label }) => (
                                          <Select.Option
                                            value={value}
                                            key={value}
                                            label={label || name}
                                          >
                                            {name}
                                          </Select.Option>
                                        )
                                      )}
                                  </SelectOnSearch>
                                </Form.Item>
                              ) : null}
                              {itemType === 'input' ? (
                                <Form.Item
                                  // name={[name, itemName]}
                                  name={itemName}
                                  style={{ flex: 1 }}
                                  {...itemFormItemProps}
                                >
                                  <Input
                                    autoComplete={'off'}
                                    placeholder={itemPlaceholder}
                                    allowClear
                                    onChange={e => {
                                      itemOnChange && itemOnChange(e);
                                    }}
                                    {...restItemProps}
                                  />
                                </Form.Item>
                              ) : null}
                              {index !== arr.length - 1 ? <WidthSpace /> : null}
                            </Fragment>
                          );
                        })}
                      </Space.Compact>
                    </Form.Item>
                  ) : null} */}
                  {type === 'renderNode' && renderNode ? renderNode() : null}
                </Col>
              )
            )}
            {/* {index + 1 === chunkFormList.length && isHasRightBtn ? (
              // <Col span={24 - (formItemList.length % 3) * 8} style={{ marginBottom: 0 }} flex>
              // 如果formItemList的长度为1 那就就是 24 - formRowLabelCol[0], 如果是2个就是 24 - formRowLabelCol[0] - formRowLabelCol[1]
              <Col
                span={handleRightBtnCol(formItemList.length, formRowLabelCol)}
                style={{ marginBottom: 0 }}
                flex
              >
                {formItemList.length % 3 === 0 ? (
                  <LineSpace height={10} />
                ) : null}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flex: 1
                  }}
                >
                  {leftRenderBtn ? leftRenderBtn() : null}
                  {renderQryBtn && (
                    <Button
                      disabled={qryDisabled}
                      htmlType="submit"
                      width="70px"
                      size="small"
                      loading={qryLoading}
                    >
                      {qryTitle}
                    </Button>
                  )}
                  {renderBtn ? renderBtn() : null}
                </div>
              </Col>
            ) : null} */}
          </Row>
        ))}
      </Form>
    </div>
  );
};
