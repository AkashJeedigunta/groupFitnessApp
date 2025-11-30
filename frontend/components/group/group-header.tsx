import { BackButton } from '@/components/ui/back-button';
import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GroupHeaderProps {
  title: string;
  onBackPress: () => void;
}

export function GroupHeader({ title, onBackPress }: GroupHeaderProps) {
  return (
    <View style={styles.header}>
      <BackButton onPress={onBackPress} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.gray[800],
    flex: 1,
  },
});