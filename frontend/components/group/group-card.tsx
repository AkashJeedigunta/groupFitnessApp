import { Colors } from '@/constants/colors';
import { Group } from '@/types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface GroupCardProps {
  group: Group;
  onPress: () => void;
}

export function GroupCard({ group, onPress }: GroupCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.name}>{group.name}</Text>
        <Text style={styles.members}>{group.memberCount} members</Text>
      </View>
      <Text style={styles.icon}>👥</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: Colors.gray[200],
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.gray[800],
  },
  members: {
    fontSize: 13,
    color: Colors.gray[500],
    marginTop: 4,
  },
  icon: {
    fontSize: 28,
  },
});