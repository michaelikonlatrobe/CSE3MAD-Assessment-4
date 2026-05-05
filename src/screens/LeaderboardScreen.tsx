import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { AppButton } from "../components/AppButton";
import { AppCard } from "../components/AppCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { styles } from "../theme/styles";
import { Screen } from "../types/navigation";

type Props = {
  setScreen: (screen: Screen) => void;
};

export function LeaderboardScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Leaderboard" />

        <AppCard title="Team Scores" />
        <Text style={styles.bodyText}>1. Team Alpha - 920 points</Text>
        <Text style={styles.bodyText}>2. Team Newton - 870 points</Text>
        <Text style={styles.bodyText}>3. Team Tesla - 810 points</Text>

        <AppButton title="Back to Home" variant="secondary" onPress={() => setScreen("home")} />
      </ScrollView>
    </SafeAreaView>
  );
}