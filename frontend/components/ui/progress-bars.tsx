import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';

interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  backgroundColor?: string;
  height?: number;
}

export function ProgressBar({ 
  progress, 
  color = Colors.primary,
  backgroundColor = Colors.gray[200],
  height = 10,
}: ProgressBarProps) {
  return (
    <View style={[styles.container, { backgroundColor, height }]}>
      <View 
        style={[
          styles.fill, 
          { 
            width: `${Math.min(progress, 100)}%`,
            backgroundColor: color,
            height,
          }
        ]} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  fill: {
    borderRadius: 10,
  },
});