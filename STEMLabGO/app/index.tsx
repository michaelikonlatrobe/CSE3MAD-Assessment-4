import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Screen =
  | "welcome"
  | "login"
  | "signup"
  | "home"
  | "activities"
  | "results"
  | "leaderboard"
  | "deviceTools"
  | "help";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");

  function Header({ title }: { title: string }) {
    return (
      <View style={styles.header}>
        <Text style={styles.logo}>STEM Lab GO</Text>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    );
  }

  function BackButton() {
    return (
      <TouchableOpacity style={styles.secondaryButton} onPress={() => setScreen("home")}>
        <Text style={styles.secondaryButtonText}>Back to Home</Text>
      </TouchableOpacity>
    );
  }

  if (screen === "welcome") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.centerContainer}>
          <Text style={styles.welcomeTitle}>STEM Lab GO</Text>
          <Text style={styles.subtitle}>
            Complete STEM challenges, record results, view graphs, and compare scores.
          </Text>

          <TouchableOpacity style={styles.primaryButton} onPress={() => setScreen("login")}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => setScreen("help")}>
            <Text style={styles.secondaryButtonText}>How It Works</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (screen === "login") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Login" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="student@email.com" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />

          <TouchableOpacity style={styles.primaryButton} onPress={() => setScreen("home")}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => setScreen("signup")}>
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "signup") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Sign Up" />

          <Text style={styles.label}>Team Name</Text>
          <TextInput style={styles.input} placeholder="Team Alpha" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="student@email.com" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Password" secureTextEntry />

          <TouchableOpacity style={styles.primaryButton} onPress={() => setScreen("home")}>
            <Text style={styles.primaryButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => setScreen("login")}>
            <Text style={styles.secondaryButtonText}>Back to Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "home") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Home Dashboard" />

          <Text style={styles.bodyText}>
            Choose a STEM activity, view results, check device tools, or open the help guide.
          </Text>

          <View style={styles.grid}>
            <MenuCard title="STEM Activities" onPress={() => setScreen("activities")} />
            <MenuCard title="Results Graph" onPress={() => setScreen("results")} />
            <MenuCard title="Leaderboard" onPress={() => setScreen("leaderboard")} />
            <MenuCard title="Device Tools" onPress={() => setScreen("deviceTools")} />
            <MenuCard title="Help Guide" onPress={() => setScreen("help")} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "activities") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Activity Menu" />

          <MenuCard title="Reaction Time Challenge" onPress={() => {}} />
          <MenuCard title="Movement Sensor Challenge" onPress={() => {}} />
          <MenuCard title="Sound Level Activity" onPress={() => {}} />

          <BackButton />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "results") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Results Graph" />

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Graph Feature Placeholder</Text>
            <Text style={styles.bodyText}>
              This screen will reuse the Assessment 3 real-time graph feature to show STEM
              activity results.
            </Text>
          </View>

          <BackButton />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "leaderboard") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Leaderboard" />

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Team Scores</Text>
            <Text style={styles.bodyText}>1. Team Alpha - 920 points</Text>
            <Text style={styles.bodyText}>2. Team Newton - 870 points</Text>
            <Text style={styles.bodyText}>3. Team Tesla - 810 points</Text>
          </View>

          <BackButton />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (screen === "deviceTools") {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header title="Device Tools" />

          <MenuCard title="Battery Status" onPress={() => {}} />
          <MenuCard title="Location / GPS" onPress={() => {}} />
          <MenuCard title="Notification Reminder" onPress={() => {}} />

          <BackButton />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header title="Help Guide" />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Getting Started</Text>
          <Text style={styles.bodyText}>
            Log in, choose a STEM activity, complete the challenge, and review your results.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Common Issues</Text>
          <Text style={styles.bodyText}>
            If sensors or location do not work, check phone permissions and try again.
          </Text>
        </View>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => setScreen("welcome")}>
          <Text style={styles.secondaryButtonText}>Back to Welcome</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  function MenuCard({ title, onPress }: { title: string; onPress: () => void }) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.bodyText}>Tap to open</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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