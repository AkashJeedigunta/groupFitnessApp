import { API_ENDPOINTS } from '@/constants/api';
import { LoginResponse } from '@/types';
import { api } from './api';

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    return api.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
      email,
      password,
    });
  },

  async register(data: {
    name: string;
    email: string;
    password: string;
    currentWeight: number;
    targetWeight: number;
    height: number;
  }): Promise<any> {
    return api.post(API_ENDPOINTS.AUTH.REGISTER, data);
  },
};