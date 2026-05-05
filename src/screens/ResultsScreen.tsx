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

export function ResultsScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Results Graph" />

        <AppCard
          title="Graph Feature"
          body="This screen will show STEM results using line and bar charts, based on the Assessment 3 graph feature."
        />

        <AppButton title="Back to Home" variant="secondary" onPress={() => setScreen("home")} />
      </ScrollView>
    </SafeAreaView>
  );
}