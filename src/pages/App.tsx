import { FC } from 'react';
import { Link } from 'react-router';
import { Count } from '@/components';
import logo from './logo.svg';
import './App.less';
import { useCountStore } from '../store';

export const App: FC = () => {
  // 仅作为简单示例，组件复杂时不能直接解构整个useCountStore，可以参考 Login 组件
  const { count, loading, addValues, addAsyncValues } = useCountStore();
  return (
    <div className="App">
      <h1>React19 + Zustand + webpack5示例</h1>
      <img src={logo} className="App-logo" />
      <p>当前计数：{count}</p>
      <Count
        onAddClick={() => addValues()}
        onAddAsyncClick={() => addAsyncValues()}
      />
      {loading ? <p>Loading...</p> : null}
      <Link to={'/login'} className="App-link">
        跳转登录页
      </Link>
    </div>
  );
};
