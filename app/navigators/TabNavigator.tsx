import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen"
import MapScreen from "../screens/MapScreen"
import LibraryScreen from "../screens/LibraryScreen"
import MyPageScreen from "../screens/MypageScreen"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home"
          if (route.name === "홈") iconName = "home"
          else if (route.name === "지도") iconName = "map"
          else if (route.name === "보관함") iconName = "folder"
          else if (route.name === "마이페이지") iconName = "person"
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="지도" component={MapScreen} />
      <Tab.Screen name="보관함" component={LibraryScreen} />
      <Tab.Screen name="마이페이지" component={MyPageScreen} />
    </Tab.Navigator>
  )
}
