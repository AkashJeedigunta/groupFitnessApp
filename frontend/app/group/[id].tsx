import { GroupGoalCard } from '@/components/group/group-goal-card';
import { GroupHeader } from '@/components/group/group-header';
import { MembersList } from '@/components/group/members-list';
import { Colors } from '@/constants/colors';
import { useGroups } from '@/hooks/use-groups';
import { calculateGroupProgress } from '@/utils/calculations';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function GroupDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { selectedGroup, loadGroupDetails, loading } = useGroups();
  const router = useRouter();

  useEffect(() => {
    if (id) {
      loadGroupDetails(Number(id));
    }
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  // No group found
  if (!selectedGroup) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Group not found</Text>
      </View>
    );
  }

  // Calculate group progress
  const groupProgress = selectedGroup.members 
    ? calculateGroupProgress(selectedGroup.members)
    : { totalProgress: 0, totalTarget: 0, progressPercent: 0 };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <GroupHeader 
        title={selectedGroup.name} 
        onBackPress={() => router.back()} 
      />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <GroupGoalCard
            goal={selectedGroup.goal}
            currentProgress={groupProgress.totalProgress}
            targetProgress={groupProgress.totalTarget}
            progressPercent={groupProgress.progressPercent}
          />
          
          <MembersList members={selectedGroup.members || []} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[50],
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 15,
    paddingBottom: 30,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray[50],
  },
  errorText: {
    fontSize: 16,
    color: Colors.gray[500],
    textAlign: 'center',
  },
});