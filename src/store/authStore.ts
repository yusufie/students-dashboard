import {create} from 'zustand';

type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true',
  login: () => {
    if (typeof window !== 'undefined') {
      // Save authentication state in local storage
      localStorage.setItem('isLoggedIn', 'true');
    }
    set({ isLoggedIn: true });
  },
  logout: () => {
    if (typeof window !== 'undefined') {
      // Remove authentication state from local storage
      localStorage.removeItem('isLoggedIn');
    }
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;
