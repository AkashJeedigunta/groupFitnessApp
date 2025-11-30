import { groupsService } from '@/services/groups.service';
import { Group } from '@/types';
import { useState } from 'react';

export function useGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUserGroups = async (userId: number) => {
    setLoading(true);
    try {
      const data = await groupsService.getUserGroups(userId);
      if (data.success) {
        setGroups(data.groups);
      }
    } catch (error) {
      console.error('Load groups error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadGroupDetails = async (groupId: number) => {
    setLoading(true);
    try {
      const data = await groupsService.getGroupDetails(groupId);
      if (data.success) {
        setSelectedGroup(data.group);
      }
    } catch (error) {
      console.error('Load group details error:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    groups,
    selectedGroup,
    loading,
    loadUserGroups,
    loadGroupDetails,
    setSelectedGroup,
  };
}