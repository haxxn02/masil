import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>보관함 화면</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
})
