import { Member } from '@/types';
import { calculateProgress } from '@/utils/calculations';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import { ProgressBar } from './ui/progress-bars';

interface MemberProgressCardProps {
  member: Member;
}

export function MemberProgressCard({ member }: MemberProgressCardProps) {
  const progress = calculateProgress(member.progress, member.target);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.info}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <View>
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.progressText}>
              {member.progress} / {member.target} lbs lost
            </Text>
          </View>
        </View>
        <Text style={styles.percent}>{progress}%</Text>
      </View>
      <ProgressBar progress={progress} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: Colors.gray[200],
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray[800],
  },
  progressText: {
    fontSize: 12,
    color: Colors.gray[500],
    marginTop: 2,
  },
  percent: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
});