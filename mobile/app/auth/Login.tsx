import { Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import { s } from 'react-native-wind';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import AxiosInstance from '@/lib/axios';

export default function Login() {
  // const router = useRouter();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Email and password are required!');
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await AxiosInstance.post('/auth/login', {
  //       email,
  //       password,
  //     });

  //     // Simpan token ke AsyncStorage
  //     const { token } = response.data;
  //     await AsyncStorage.setItem('token', token);

  //     // Arahkan ke halaman dashboard
  //     router.push('/dashbord');
  //   } catch (error: any) {
  //     console.error('Login Error:', error);
  //     Alert.alert('Login Failed', error.response?.data?.message || 'An unexpected error occurred.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={s`flex items-center justify-center min-h-full bg-green-500`}>
      <View style={s`items-center mb-10`}>
        <Image
          source={require("../../assets/images/poliban.png")}
          resizeMode="contain"
          style={s`w-40 h-40 mb-5`}
        />
        <Text style={s`text-2xl font-bold text-white mt-3`}>SIMPADU</Text>
        <Text style={s`text-lg text-white`}>Sistem Informasi Terpadu</Text>
        <Text style={s`text-base text-white mt-2`}>Selamat Datang Kembali</Text>
        <Text style={s`text-sm text-white`}>Silahkan masuk ke akun Anda</Text>
      </View>
      <View style={s`w-80  p-5`}>
        <Text style={s`text-black font-semi-bold ml-2 mt-2`}>Email/nip</Text>
        <TextInput
          style={s`border border-gray-300 bg-white rounded-md p-3 w-full mt-3 text-gray-700`}
          placeholder="Masukan Email/NIP"
          placeholderTextColor="#9CA3AF"
        // value={email}
        // onChangeText={setEmail}
        />
        <Text style={s`text-black font-semi-bold ml-2 mt-2`}>Password</Text>
        <TextInput
          style={s`border border-gray-300  bg-white rounded-md p-3 w-full mt-3 text-gray-700`}
          placeholder="Masukan Password"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
        // value={password}
        // onChangeText={setPassword}
        />
        <View style={s`flex-row  items-center mt-3`}>
          <TextInput
            style={s`mr-2`}
          // type="checkbox"
          />
          <Text style={s`text-gray-500 text-start`}>Ingat Saya</Text>
          <TouchableOpacity style={s`ml-auto`}>
            <Text style={s`text-blue-500 underline`}>Lupa Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          // onPress={handleLogin}
          style={s`bg-blue-500 rounded-md p-3 w-full mt-5`}
        // disabled={loading}
        >
          <Text style={s`text-center text-white font-bold`}>
            {/* {loading ? 'Logging in...' : 'Masuk'} */}
            Masuk
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={s`text-white mt-10`}>2025 SIMPADU - Politeknik Negeri Banjarmasin</Text>
    </View>
  );
}

