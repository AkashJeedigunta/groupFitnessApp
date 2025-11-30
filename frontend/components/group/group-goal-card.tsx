import { ProgressBar } from '@/components/ui/progress-bars';
import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GroupGoalCardProps {
  goal: string;
  currentProgress: number;
  targetProgress: number;
  progressPercent: number;
}

export function GroupGoalCard({ 
  goal, 
  currentProgress, 
  targetProgress, 
  progressPercent 
}: GroupGoalCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Group Challenge</Text>
      <Text style={styles.goalText}>{goal}</Text>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressLabel}>Total Progress</Text>
          <Text style={styles.progressLabel}>
            {currentProgress} / {targetProgress} lbs
          </Text>
        </View>
        <ProgressBar 
          progress={progressPercent} 
          color={Colors.white} 
          backgroundColor="rgba(255,255,255,0.3)" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 15,
    opacity: 0.95,
  },
  progressContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 15,
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '500',
  },
});