import { ConfigProvider, Select } from 'antd';

export const SpaceSelector = () => {
  // const options = [
  //   {
  //     name: 'default_workspace_ehsc',
  //     label: (
  //       <div className="l-space-item">
  //         <p>默认工作空间</p>
  //         <p>default_workspace_ehsc</p>
  //       </div>
  //     )
  //   },
  //   {
  //     name: 'mc_2_hive',
  //     label: (
  //       <div className="l-space-item">
  //         <p>mc_2_hive</p>
  //         <p>mc_2_hive</p>
  //       </div>
  //     )
  //   }
  // ];
  const options = [
    {
      value: 'default_workspace_ehsc',
      label: '默认工作空间'
    },
    {
      value: 'mc_2_hive',
      label: 'mc_2_hive'
    }
  ];
  return (
    <div className="l-space">
      <ConfigProvider
        theme={{
          components: {
            Select: {
              // selectorBg: '#10121a'
              optionSelectedBg: 'rgba(93, 134, 255, .2)',
              optionActiveBg: 'rgba(255,255,255,.06)'
            }
          }
        }}
      >
        <Select
          options={options}
          variant="borderless"
          style={{ width: '280px', height: '100%' }}
          labelRender={({ value, label }) => (
            <div className="l-space-label">
              <p className="l-space-item-label">{label}</p>
              <p className="l-space-item-value">{value}</p>
            </div>
          )}
          defaultValue={'default_workspace_ehsc'}
          optionRender={option => (
            <div className="">
              <p className="l-space-item-label">{option.data.label}</p>
              <p className="l-space-item-value">{option.data.value}</p>
            </div>
          )}
          popupClassName="l-space-item"
        />
      </ConfigProvider>
    </div>
  );
};
