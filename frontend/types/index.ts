export interface User {
  id: number;
  name: string;
  email: string;
  currentWeight: number;
  targetWeight: number;
  height: number;
}

export interface Group {
  id: number;
  name: string;
  goal: string;
  startDate: string;
  memberCount: number;
  members?: Member[];
}

export interface Member {
  id: number;
  name: string;
  progress: number;
  target: number;
}

export interface FormData {
  email: string;
  password: string;
  weight: string;
  workout: string;
  meal: string;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface GroupsResponse {
  success: boolean;
  groups: Group[];
}

export interface GroupResponse {
  success: boolean;
  group: Group;
}