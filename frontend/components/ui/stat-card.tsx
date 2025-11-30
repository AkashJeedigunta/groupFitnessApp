import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  subtext: string;
}

export function StatCard({ icon, label, value, subtext }: StatCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.subtext}>{subtext}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    width: '48%',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  icon: {
    fontSize: 18,
  },
  label: {
    fontSize: 12,
    color: Colors.gray[500],
    fontWeight: '500',
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.gray[800],
  },
  subtext: {
    fontSize: 12,
    color: Colors.gray[400],
    marginTop: 4,
  },
});