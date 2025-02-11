import { ConfigProvider, Input } from 'antd';

export const Search = () => {
  return (
    <div className="l-search flex-center">
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 16,
            fontSize: 12
          },
          components: {
            Input: {
              // selectorBg: '#10121a'
            }
          }
        }}
      >
        <Input.Search onSearch={() => {}} placeholder="请输入关键字" />
      </ConfigProvider>
    </div>
  );
};
