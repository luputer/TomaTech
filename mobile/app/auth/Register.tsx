import { Button, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { s } from 'react-native-wind';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import AxiosInstance from '@/lib/axios';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    setLoading(true);
    try {
      const response = await AxiosInstance.post('/auth/register', {
        username,
        email,
        password,
      });

      Alert.alert('Success', 'Registration successful! Please login.');
      router.push('/auth/Login'); // Arahkan ke halaman login
    } catch (error: any) {
      console.error('Registration Error:', error);
      Alert.alert('Registration Failed', error.response?.data?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={s`flex items-center justify-center mi /5 bg-white p-6 rounded-lg shadow-md`}>
      <Text style={s`text-2xl font-bold mb-4 text-center`}>Register</Text>
      <View>
        <Text style={s`mb-2`}>Username</Text>
        <TextInput
          style={s`border border-gray-300 rounded p-2 mb-4`}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={s`mb-2`}>Email</Text>
        <TextInput
          style={s`border border-gray-300 rounded p-2 mb-4`}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={s`mb-2`}>Password</Text>
        <TextInput
          style={s`border border-gray-300 rounded p-2 mb-4`}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={s`mt-4`}>
          <TouchableOpacity
            onPress={handleRegister}
            style={s`bg-blue-500 rounded-md p-3`}
            disabled={loading}
          >
            <Text style={s`text-center text-white font-bold`}>
              {loading ? 'Registering...' : 'Register'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/auth/Login')}
          style={s`mt-3`}
        >
          <Text style={s`text-center text-gray-500`}>
            Have an account?{' '}
            <Text style={s`text-blue-500 underline font-bold`}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}