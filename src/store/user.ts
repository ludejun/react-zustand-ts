import { create } from 'zustand';
import { IUserInfo } from '@/utils/userInfo';
import { wrapRequest } from '@/services';

interface UserState {
  userInfo: IUserInfo | null;
  loginLoading: boolean;
  codeLoading: boolean;
  fetchLogin: (data: any) => Promise<unknown>;
}

export const useUserStore = create<UserState>(set => ({
  userInfo: null,
  loginLoading: false,
  codeLoading: false,
  fetchLogin: async loginData => {
    set({ loginLoading: true });
    try {
      const data = await wrapRequest('login')(loginData);
      set({ userInfo: data as IUserInfo });
      set({ loginLoading: false });
      return data;
    } catch (e) {
      set({ loginLoading: false });
    }
  }
}));
