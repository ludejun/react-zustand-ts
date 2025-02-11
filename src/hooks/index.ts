import { useState, useEffect } from 'react';

interface UseRequestOptions {
  manual?: boolean;  // 是否手动触发请求
  pollingInterval?: number;  // 轮询间隔，单位毫秒
  defaultParams?: any[];  // 默认请求参数
}

export function useRequest<T>(
  requestFn: (...args: any[]) => Promise<T>,
  options: UseRequestOptions = {}
): {
  data: T | undefined;
  error: Error | undefined;
  loading: boolean;
  run: (...args: any[]) => Promise<T>;
} {
  const { manual = false, pollingInterval = 0, defaultParams = [] } = options;
  const [state, setState] = useState<{
    data: T | undefined;
    error: Error | undefined;
    loading: boolean;
  }>({
    data: undefined,
    error: undefined,
    loading: false,
  });

  // 发起请求的函数
  const run = async (...args: any[]): Promise<T> => {
    try {
      setState(prevState => ({ ...prevState, loading: true }));
      const response = await requestFn(...(args.length ? args : defaultParams));
      setState({ data: response, error: undefined, loading: false });

      // 如果设置了轮询间隔，则再次调用run
      if (pollingInterval) {
        setTimeout(() => run(...(args.length ? args : defaultParams)), pollingInterval);
      }

      return response;
    } catch (error) {
      setState({ data: undefined, error: error as Error, loading: false });
      throw error;
    }
  };

  // 如果不是手动触发，则在组件挂载时运行请求
  useEffect(() => {
    if (!manual) {
      run(...defaultParams);
    }
  }, [manual, ...defaultParams]); // 注意这里的依赖项

  return {
    ...state,
    run,
  };
}
