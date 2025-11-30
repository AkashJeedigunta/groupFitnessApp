import { MemberProgressCard } from '@/components/member-progress-card';
import { Card } from '@/components/ui/card';
import { Colors } from '@/constants/colors';
import { Member } from '@/types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface MembersListProps {
  members: Member[];
}

export function MembersList({ members }: MembersListProps) {
  if (!members || members.length === 0) {
    return (
      <Card>
        <Text style={styles.emptyText}>No members yet</Text>
      </Card>
    );
  }

  return (
    <Card>
      <Text style={styles.title}>Member Progress</Text>
      {members.map(member => (
        <MemberProgressCard key={member.id} member={member} />
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray[800],
    marginBottom: 15,
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.gray[400],
    fontSize: 14,
    paddingVertical: 20,
  },
});