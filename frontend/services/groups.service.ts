import { API_ENDPOINTS } from '@/constants/api';
import { GroupResponse, GroupsResponse } from '@/types';
import { api } from './api';

export const groupsService = {
  async getUserGroups(userId: number): Promise<GroupsResponse> {
    return api.get<GroupsResponse>(API_ENDPOINTS.GROUPS.GET_USER_GROUPS(userId));
  },

  async getGroupDetails(groupId: number): Promise<GroupResponse> {
    return api.get<GroupResponse>(API_ENDPOINTS.GROUPS.GET_GROUP(groupId));
  },

  async createGroup(data: {
    name: string;
    goal: string;
    startDate: string;
    createdBy: number;
  }): Promise<any> {
    return api.post(API_ENDPOINTS.GROUPS.CREATE_GROUP, data);
  },
};