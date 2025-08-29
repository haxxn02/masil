import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen"
import TabNavigator from "./TabNavigator"

// ✅ 여기서 타입 export
export type AppStackParamList = {
  Login: undefined
  Main: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>()

export default function AppNavigator() {
  const isAuthenticated = true // 로그인 여부 (임시)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  )
}
