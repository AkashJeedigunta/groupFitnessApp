import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BackButtonProps {
  onPress: () => void;
  label?: string;
}

export function BackButton({ onPress, label = 'Back' }: BackButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.icon}>←</Text>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 8,
    paddingRight: 12,
  },
  icon: {
    fontSize: 24,
    color: Colors.primary,
  },
  text: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '600',
  },
});