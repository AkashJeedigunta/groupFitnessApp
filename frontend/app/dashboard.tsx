import { GroupCard } from '@/components/group/group-card';
import { QuickLogSection } from '@/components/quick-log-section';
import { StatsGrid } from '@/components/stats-grid';
import { Button } from '@/components/ui/button';
import { Colors } from '@/constants/colors';
import { useAuth } from '@/hooks/use-auth';
import { useGroups } from '@/hooks/use-groups';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen() {
  const { user, logout, updateUser } = useAuth();
  const { groups, loadUserGroups, setSelectedGroup } = useGroups();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      loadUserGroups(user.id);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const handleGroupPress = async (group: any) => {
    setSelectedGroup(group);
    router.push(`/group/${group.id}`);
  };

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <View style={styles.headerUser}>
            <Text style={styles.headerUserName}>Welcome, {user.name}</Text>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          {/* Stats Grid */}
          <StatsGrid user={user} />

          {/* Quick Log */}
          <QuickLogSection 
            userId={user.id}
            onWeightLogged={(weight) => updateUser({ currentWeight: weight })}
          />

          {/* Groups */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>My Groups</Text>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Create Group</Text>
              </TouchableOpacity>
            </View>
            
            {groups.length === 0 ? (
              <Text style={styles.emptyText}>No groups yet. Create one to get started!</Text>
            ) : (
              groups.map(group => (
                <GroupCard
                  key={group.id}
                  group={group}
                  onPress={() => handleGroupPress(group)}
                />
              ))
            )}
          </View>

          {/* Logout Button */}
          <Button
            title="Logout"
            onPress={handleLogout}
            variant="danger"
            style={styles.logoutButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray[50],
  },
  header: {
    backgroundColor: Colors.white,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.gray[800],
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerUserName: {
    fontSize: 13,
    color: Colors.gray[500],
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
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray[800],
  },
  createButton: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  createButtonText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: Colors.gray[400],
    fontSize: 14,
    paddingVertical: 20,
  },
  logoutButton: {
    marginTop: 10,
    marginBottom: 30,
  },
});