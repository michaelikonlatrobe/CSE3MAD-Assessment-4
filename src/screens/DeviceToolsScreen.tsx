import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { AppButton } from "../components/AppButton";
import { AppCard } from "../components/AppCard";
import { ScreenHeader } from "../components/ScreenHeader";
import { styles } from "../theme/styles";
import { Screen } from "../types/navigation";

type Props = {
  setScreen: (screen: Screen) => void;
};

export function DeviceToolsScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Device Tools" />

        <AppCard title="Battery Status" body="Shows device battery level." />
        <AppCard title="Location / GPS" body="Shows current location coordinates." />
        <AppCard title="Notification Reminder" body="Schedules a STEM reminder notification." />
        <AppCard title="Sponsor / Ad Screen" body="Demonstrates AdMob-style monetisation." />

        <AppButton title="Back to Home" variant="secondary" onPress={() => setScreen("home")} />
      </ScrollView>
    </SafeAreaView>
  );
}