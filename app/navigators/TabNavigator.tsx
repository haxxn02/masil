import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"

import HomeScreen from "../screens/HomeScreen"
import MapScreen from "../screens/MapScreen"
import LibraryScreen from "../screens/LibraryScreen"
import MyPageScreen from "../screens/MypageScreen"

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#6B4EFF", // 선택된 탭 색상
        tabBarInactiveTintColor: "gray", // 비활성 탭 색상
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderTopColor: "#eee",
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline"

          if (route.name === "홈") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "지도") {
            iconName = focused ? "map" : "map-outline"
          } else if (route.name === "보관함") {
            iconName = focused ? "folder" : "folder-outline"
          } else if (route.name === "마이페이지") {
            iconName = focused ? "person" : "person-outline"
          }

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
