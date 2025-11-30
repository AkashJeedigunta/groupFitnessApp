import { useFitnessLogs } from '@/hooks/use-fitness-logs';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';

interface QuickLogSectionProps {
  userId: number;
  onWeightLogged?: (weight: number) => void;
}

export function QuickLogSection({ userId, onWeightLogged }: QuickLogSectionProps) {
  const [weight, setWeight] = useState('');
  const [workout, setWorkout] = useState('');
  const [meal, setMeal] = useState('');
  
  const { logWeight, logActivity } = useFitnessLogs(userId);

  const handleLogWeight = async () => {
    await logWeight(weight, (newWeight) => {
      setWeight('');
      onWeightLogged?.(newWeight);
    });
  };

  const handleLogWorkout = async () => {
    await logActivity('workout', workout);
    setWorkout('');
  };

  const handleLogMeal = async () => {
    await logActivity('meal', meal);
    setMeal('');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Quick Log</Text>
      
      <View style={styles.logItem}>
        <Text style={styles.label}>Log Weight</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.flex]}
            value={weight}
            onChangeText={setWeight}
            placeholder="Weight (lbs)"
            keyboardType="numeric"
            placeholderTextColor={Colors.gray[400]}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogWeight}>
            <Text style={styles.buttonText}>Log</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.logItem}>
        <Text style={styles.label}>Log Workout</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.flex]}
            value={workout}
            onChangeText={setWorkout}
            placeholder="e.g., 5 mile run"
            placeholderTextColor={Colors.gray[400]}
          />
          <TouchableOpacity style={[styles.button, styles.buttonGreen]} onPress={handleLogWorkout}>
            <Text style={styles.buttonText}>Log</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.logItem}>
        <Text style={styles.label}>Log Meal</Text>
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.flex]}
            value={meal}
            onChangeText={setMeal}
            placeholder="e.g., Salad lunch"
            placeholderTextColor={Colors.gray[400]}
          />
          <TouchableOpacity style={[styles.button, styles.buttonOrange]} onPress={handleLogMeal}>
            <Text style={styles.buttonText}>Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.gray[800],
    marginBottom: 15,
  },
  logItem: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.gray[700],
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    backgroundColor: Colors.white,
  },
  flex: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonGreen: {
    backgroundColor: Colors.success,
  },
  buttonOrange: {
    backgroundColor: Colors.warning,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '600',
  },
});