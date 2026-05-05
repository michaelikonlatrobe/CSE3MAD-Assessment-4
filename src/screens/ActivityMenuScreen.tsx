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

export function ActivityMenuScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Activity Menu" />

        <AppCard
          title="Reaction Time Challenge"
          body="Measure how quickly you respond to a prompt."
          onPress={() => setScreen("reactionTime")}
        />

        <AppCard
          title="Movement Sensor Challenge"
          body="Use the accelerometer to measure movement."
          onPress={() => setScreen("movementSensor")}
        />

        <AppCard
          title="Sound Level Activity"
          body="Record or simulate sound level data in decibels."
          onPress={() => setScreen("soundLevel")}
        />

        <AppButton title="Back to Home" variant="secondary" onPress={() => setScreen("home")} />
      </ScrollView>
    </SafeAreaView>
  );
}