import { create } from 'zustand';
import Cookies from 'universal-cookie';

interface User {
  email: string;
}

interface AuthStore {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string | null, password: string) => void;
  logout: () => void;
}

const cookies = new Cookies();

const useAuthStore = create<AuthStore>((set) => {
  let isLoggedIn = false;
  let storedUser = cookies.get('user');

  let initialUser: User | null = null;
  try {
    if (storedUser) {
      initialUser = JSON.parse(storedUser);
      isLoggedIn = true;
    }
  } catch (error) {
    // Handle JSON parse error, e.g., invalid JSON format
    console.error('Error parsing stored user:', error);
    cookies.remove('user');
  }

  return {
    isLoggedIn,
    user: initialUser,
    login: (email, password) => {
      if (email !== null) {
        const user = { email };
        set({ isLoggedIn: true, user });
        cookies.set('isLoggedIn', 'true');
        cookies.set('user', JSON.stringify(user));
      }
    },
    logout: () => {
      set({ isLoggedIn: false, user: null });
      cookies.remove('isLoggedIn');
      cookies.remove('user');
    },
  };
});

export default useAuthStore;
