import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { AppCard } from "../components/AppCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { styles } from "../theme/styles";
import { Screen } from "../types/navigation";

type Props = {
  setScreen: (screen: Screen) => void;
};

export function HomeScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Home Dashboard" />

        <Text style={styles.bodyText}>
          Choose a STEM activity, view results, check device tools, or open the help guide.
        </Text>

        <View style={styles.grid}>
          <AppCard title="STEM Activities" body="Open activity menu" onPress={() => setScreen("activities")} />
          <AppCard title="Results Graph" body="View progress visually" onPress={() => setScreen("results")} />
          <AppCard title="Leaderboard" body="Compare team scores" onPress={() => setScreen("leaderboard")} />
          <AppCard title="Device Tools" body="Battery, GPS and notifications" onPress={() => setScreen("deviceTools")} />
          <AppCard title="Help Guide" body="Learn how to use the app" onPress={() => setScreen("help")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}