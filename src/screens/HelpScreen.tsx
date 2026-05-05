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

export function HelpScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Help Guide" />

        <AppCard
          title="Getting Started"
          body="Log in, choose a STEM activity, complete the challenge, and review your results."
        />

        <AppCard
          title="Common Issues"
          body="If sensors, location, or notifications do not work, check phone permissions and try again."
        />

        <AppButton title="Back to Home" variant="secondary" onPress={() => setScreen("home")} />
        <AppButton title="Back to Welcome" variant="secondary" onPress={() => setScreen("welcome")} />
      </ScrollView>
    </SafeAreaView>
  );
}