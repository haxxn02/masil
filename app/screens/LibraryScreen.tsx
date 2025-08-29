import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../styles/colors"
import { spacing } from "../styles/spacing"
import { typography } from "../styles/typography"

export default function LibraryScreen() {
  const stats = [
    { id: "1", label: "총 산책", value: "12회" },
    { id: "2", label: "총 거리", value: "38.5km" },
    { id: "3", label: "나무 종류", value: "7종" },
    { id: "4", label: "누적 포인트", value: "2,450P" },
  ]

  const walks = [
    { id: "1", date: "2025-08-28", distance: "3.2km", duration: "45분", points: 20 },
    { id: "2", date: "2025-08-25", distance: "2.1km", duration: "30분", points: 15 },
  ]

  const trees = [
    { id: "1", name: "은행나무", rare: false },
    { id: "2", name: "소나무", rare: true },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>보관함</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* 요약 카드 */}
        <View style={styles.statsGrid}>
          {stats.map((s) => (
            <View key={s.id} style={styles.statCard}>
              <Text style={styles.statLabel}>{s.label}</Text>
              <Text style={styles.statValue}>{s.value}</Text>
            </View>
          ))}
        </View>

        {/* 최근 산책 기록 */}
        <Text style={styles.sectionTitle}>📍 최근 산책 기록</Text>
        {walks.map((w) => (
          <View key={w.id} style={styles.walkCard}>
            <Text style={styles.walkDate}>{w.date}</Text>
            <Text>
              {w.distance} · {w.duration}
            </Text>
            <Text style={styles.points}>+{w.points}P</Text>
          </View>
        ))}

        {/* 나무 도감 */}
        <Text style={styles.sectionTitle}>🌳 나무 도감</Text>
        <View style={styles.treeGrid}>
          {trees.map((t) => (
            <View key={t.id} style={styles.treeCard}>
              <Text style={styles.treeName}>{t.name}</Text>
              <Text style={styles.treeBadge}>{t.rare ? "희귀" : "일반"}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: { ...typography.heading },
  scrollContent: { padding: spacing.md },
  statsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  statCard: {
    backgroundColor: "#F3EFFF",
    borderRadius: 10,
    width: "48%",
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  statLabel: { ...typography.caption },
  statValue: { fontSize: 18, fontWeight: "bold", marginTop: spacing.xs, color: colors.primary },
  sectionTitle: { ...typography.heading, marginVertical: spacing.sm },
  walkCard: {
    backgroundColor: colors.card,
    padding: spacing.md,
    borderRadius: 10,
    marginBottom: spacing.sm,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  walkDate: { fontWeight: "bold" },
  points: { color: colors.primary, fontWeight: "bold" },
  treeGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  treeCard: {
    backgroundColor: "#f0f0f0",
    width: "48%",
    padding: spacing.md,
    borderRadius: 10,
    marginBottom: spacing.sm,
    alignItems: "center",
  },
  treeName: { fontWeight: "bold" },
  treeBadge: { fontSize: 12, color: colors.gray, marginTop: spacing.xs },
})
