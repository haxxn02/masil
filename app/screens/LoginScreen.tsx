import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import type { AppStackParamList } from "../navigators/AppNavigator"

// LoginScreen이 AppStackParamList의 "Login"을 쓰는 경우
type Props = NativeStackScreenProps<AppStackParamList, "Login">

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    console.log("로그인 시도:", email, password)
    navigation.replace("Main") // ✅ Main으로 이동
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>

      <TextInput
        style={styles.input}
        placeholder="이메일"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="로그인하기" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
})
