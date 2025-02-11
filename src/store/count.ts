import { wrapRequest } from '@/services';
import { create } from 'zustand';

interface CountState {
  count: number;
  loading: boolean;
  addValues: () => void;
  addAsyncValues: () => Promise<void>;
}

export const useCountStore = create<CountState>((set, get) => ({
  count: 0,
  loading: false,
  addValues: () => set(state => ({ count: state.count + 1 })),
  addAsyncValues: async () => {
    set({ loading: true });
    try {
      await new Promise(res => setTimeout(res, 2000));
      const fake = await wrapRequest('count')({});
      set({ count: get().count + 1 });
    } catch (e) {
      set({ loading: false });
    }
  }
}));
