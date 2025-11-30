// Update based on your environment
export const API_URL = 'http://localhost:3001/api';

// For Android emulator use: http://10.0.2.2:3001/api
// For iOS simulator use: http://localhost:3001/api
// For real device use: http://YOUR_LOCAL_IP:3001/api

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  USERS: {
    GET_USER: (id: number) => `/users/${id}`,
  },
  GROUPS: {
    GET_USER_GROUPS: (userId: number) => `/groups/user/${userId}`,
    GET_GROUP: (id: number) => `/groups/${id}`,
    CREATE_GROUP: '/groups',
  },
  LOGS: {
    WEIGHT: '/logs/weight',
    ACTIVITY: '/logs/activity',
    GET_WEIGHT_HISTORY: (userId: number) => `/logs/weight/${userId}`,
    GET_ACTIVITY_HISTORY: (userId: number) => `/logs/activity/${userId}`,
  },
};