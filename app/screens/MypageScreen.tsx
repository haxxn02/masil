import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../styles/colors"
import { spacing } from "../styles/spacing"
import { typography } from "../styles/typography"

export default function MyPageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>마이페이지</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 사용자 정보 */}
        <View style={styles.profile}>
          <View style={styles.profileCircle} />
          <View style={{ flex: 1 }}>
            <Text style={styles.nickname}>산책러01 님</Text>
            <Text style={styles.email}>walker01@example.com</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>프로필</Text>
          </TouchableOpacity>
        </View>

        {/* 요약 카드 */}
        <View style={styles.summaryRow}>
          <TouchableOpacity style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>동대문 마일리지</Text>
            <Text style={styles.summaryValue}>2,450P</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>쿠폰</Text>
            <Text style={styles.summaryValue}>3장</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>산책 기록</Text>
            <Text style={styles.summaryValue}>12회</Text>
          </TouchableOpacity>
        </View>

        {/* 메뉴 블럭 */}
        <View style={styles.menuBlock}>
          <MenuItem label="내 정보" />
          <MenuItem label="개인정보 수정" />
          <MenuItem label="버전 정보" value="v1.0.0" />
          <MenuItem label="고객센터" />
          <MenuItem label="문의 내역" />
          <MenuItem label="공지사항" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const MenuItem = ({ label, value }: { label: string; value?: string }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Text style={styles.menuLabel}>{label}</Text>
    {value ? <Text style={styles.menuValue}>{value}</Text> : null}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
  },
  headerTitle: { ...typography.heading },
  scrollContent: { padding: spacing.md },
  profile: { flexDirection: "row", alignItems: "center", marginBottom: spacing.md },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.gray,
    marginRight: spacing.sm,
  },
  nickname: { ...typography.heading },
  email: { ...typography.caption },
  profileButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  profileButtonText: { ...typography.caption, color: colors.text },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: spacing.md,
    borderBottomWidth: 8,
    borderBottomColor: colors.border,
  },
  summaryCard: { alignItems: "center" },
  summaryLabel: { ...typography.caption },
  summaryValue: { fontSize: 16, fontWeight: "bold", marginTop: spacing.xs, color: colors.primary },
  menuBlock: { marginTop: spacing.md },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuLabel: { ...typography.body },
  menuValue: { ...typography.caption },
})
