import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  centerContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 18,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
  },
  logo: {
    color: "#2563eb",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0f172a",
  },
  welcomeTitle: {
    fontSize: 42,
    fontWeight: "900",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 17,
    color: "#475569",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 24,
  },
  bodyText: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 14,
    padding: 14,
    fontSize: 15,
    marginBottom: 8,
  },
  grid: {
    gap: 12,
    marginTop: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 6,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  secondaryButton: {
    backgroundColor: "#e2e8f0",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  secondaryButtonText: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "800",
  },
});