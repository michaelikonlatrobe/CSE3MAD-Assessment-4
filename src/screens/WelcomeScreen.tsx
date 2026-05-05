import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { styles } from "../theme/styles";
import { Screen } from "../types/navigation";

type Props = {
  setScreen: (screen: Screen) => void;
};

export function WelcomeScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.centerContainer}>
        <Text style={styles.welcomeTitle}>STEM Lab GO</Text>
        <Text style={styles.subtitle}>
          Complete STEM challenges, record results, view graphs, and compare scores.
        </Text>

        <AppButton title="Get Started" onPress={() => setScreen("login")} />
        <AppButton
          title="How It Works"
          variant="secondary"
          onPress={() => setScreen("help")}
        />
      </View>
    </SafeAreaView>
  );
}