import { authService } from '@/services/auth.service';
import { User } from '@/types';
import { useState } from 'react';
import { Alert } from 'react-native';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return { success: false };
    }

    setLoading(true);
    try {
      const data = await authService.login(email, password);
      
      if (data.success && data.user) {
        setUser(data.user);
        return { success: true, user: data.user };
      } else {
        Alert.alert('Login Failed', data.error || 'Invalid credentials');
        return { success: false };
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Could not connect to server. Make sure the backend is running.');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updatedData });
    }
  };

  return { user, loading, login, logout, updateUser };
}