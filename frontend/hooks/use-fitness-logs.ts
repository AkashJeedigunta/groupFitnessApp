import { fitnessService } from '@/services/fitness.service';
import { useState } from 'react';
import { Alert } from 'react-native';

export function useFitnessLogs(userId: number | undefined) {
  const [loading, setLoading] = useState(false);

  const logWeight = async (weight: string, onSuccess?: (weight: number) => void) => {
    if (!weight) {
      Alert.alert('Error', 'Please enter weight');
      return;
    }

    if (!userId) {
      Alert.alert('Error', 'User not found');
      return;
    }

    setLoading(true);
    try {
      const data = await fitnessService.logWeight(userId, parseFloat(weight));
      
      if (data.success) {
        Alert.alert('Success', 'Weight logged successfully');
        onSuccess?.(parseFloat(weight));
      }
    } catch (error) {
      console.error('Log weight error:', error);
      Alert.alert('Error', 'Failed to log weight');
    } finally {
      setLoading(false);
    }
  };

  const logActivity = async (type: string, detail: string) => {
    if (!detail) {
      Alert.alert('Error', `Please enter ${type} details`);
      return;
    }

    if (!userId) {
      Alert.alert('Error', 'User not found');
      return;
    }

    setLoading(true);
    try {
      const data = await fitnessService.logActivity(userId, type, detail);
      
      if (data.success) {
        Alert.alert('Success', `${type} logged successfully`);
      }
    } catch (error) {
      console.error('Log activity error:', error);
      Alert.alert('Error', `Failed to log ${type}`);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logWeight, logActivity };
}