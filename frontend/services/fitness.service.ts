import { API_ENDPOINTS } from '@/constants/api';
import { api } from './api';

export const fitnessService = {
  async logWeight(userId: number, weight: number): Promise<any> {
    return api.post(API_ENDPOINTS.LOGS.WEIGHT, { userId, weight });
  },

  async logActivity(userId: number, type: string, detail: string): Promise<any> {
    return api.post(API_ENDPOINTS.LOGS.ACTIVITY, { userId, type, detail });
  },

  async getWeightHistory(userId: number): Promise<any> {
    return api.get(API_ENDPOINTS.LOGS.GET_WEIGHT_HISTORY(userId));
  },

  async getActivityHistory(userId: number): Promise<any> {
    return api.get(API_ENDPOINTS.LOGS.GET_ACTIVITY_HISTORY(userId));
  },
};