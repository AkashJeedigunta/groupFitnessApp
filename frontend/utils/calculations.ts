import { Member } from '@/types';

export const calculateBMI = (weight: number, height: number): string => {
  if (!weight || !height) return '0.0';
  return ((weight / (height * height)) * 703).toFixed(1);
};

export const calculateProgress = (current: number, target: number): number => {
  if (!target) return 0;
  return Math.min(Math.round((current / target) * 100), 100);
};


export const calculateGroupProgress = (members: Member[]) => {
  const totalProgress = members.reduce((sum, member) => sum + member.progress, 0);
  const totalTarget = members.reduce((sum, member) => sum + member.target, 0);
  const progressPercent = totalTarget > 0 ? Math.round((totalProgress / totalTarget) * 100) : 0;
  
  return {
    totalProgress,
    totalTarget,
    progressPercent,
  };
};