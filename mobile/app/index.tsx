import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-wind";
// import React, { useEffect } from 'react';
import { useRouter } from "expo-router";



export default function Index() {
  const router = useRouter()
  return (
    <View style={s`flex-1 justify-center  bg-green-400 items-center`} >
      <View style={s`absolute inset-0`}>
      </View>
      <Image
        source={require("../assets/images/poliban.png")}
        style={s`w-40 h-40 mb-5`}
      />
      <Text style={s`text-2xl font-bold text-white`}>SIMPADU</Text>
    </View>
  );
}
