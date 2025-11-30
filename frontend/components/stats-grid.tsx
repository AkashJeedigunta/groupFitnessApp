import { User } from '@/types';
import { calculateBMI } from '@/utils/calculations';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatCard } from './ui/stat-card';

interface StatsGridProps {
  user: User;
}

export function StatsGrid({ user }: StatsGridProps) {
  const bmi = calculateBMI(user.currentWeight, user.height);

  return (
    <View style={styles.grid}>
      <StatCard
        icon="📉"
        label="Current Weight"
        value={`${user.currentWeight} lbs`}
        subtext={`Target: ${user.targetWeight} lbs`}
      />
      <StatCard
        icon="🎯"
        label="BMI"
        value={bmi}
        subtext="Normal range"
      />
      <StatCard
        icon="❤️"
        label="Avg Heart Rate"
        value="72"
        subtext="bpm (healthy)"
      />
      <StatCard
        icon="⚡"
        label="Steps Today"
        value="8,432"
        subtext="Goal: 10,000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
});