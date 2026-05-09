import { create } from 'zustand';
import { AuthState, User } from '@/types/auth';

interface AuthActions {
  setUser: (user: User, token: string) => void;
  clearAuth: () => void;
  setLoading: (isLoading: boolean) => void;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  ...initialState,

  setUser: (user, token) =>
    set({ user, token, isAuthenticated: true, isLoading: false }),

  clearAuth: () => set(initialState),

  setLoading: (isLoading) => set({ isLoading }),
}));
