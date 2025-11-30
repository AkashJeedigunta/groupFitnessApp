import { Button } from '@/components/ui/button';
import { InputField } from '@/components/ui/input-field';
import { Colors } from '@/constants/colors';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    const result = await login(email, password);
    if (result.success) {
      router.replace('/dashboard');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>⚡</Text>
          </View>
          <Text style={styles.title}>FitTogether</Text>
          <Text style={styles.subtitle}>Track, compete, and achieve together</Text>
        </View>

        <View style={styles.form}>
          <InputField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <InputField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
          />

          <Button
            title="Login"
            onPress={handleLogin}
            loading={loading}
            style={styles.loginButton}
          />

          <Text style={styles.demoText}>
            Demo credentials: alex@example.com / demo123
          </Text>

          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 30,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: Colors.blue[100],
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoIcon: {
    fontSize: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.gray[800],
  },
  subtitle: {
    fontSize: 14,
    color: Colors.gray[500],
    marginTop: 5,
  },
  form: {
    gap: 15,
  },
  loginButton: {
    marginTop: 10,
  },
  demoText: {
    textAlign: 'center',
    color: Colors.success,
    fontSize: 12,
    marginTop: 10,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    color: Colors.gray[500],
    fontSize: 13,
    marginTop: 15,
  },
  signupLink: {
    color: Colors.primary,
    fontWeight: '600',
  },
});