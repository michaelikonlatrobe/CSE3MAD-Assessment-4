import React from "react";
import { SafeAreaView, ScrollView, Text, TextInput } from "react-native";
import { AppButton } from "../components/AppButton";
import { ScreenHeader } from "../components/ScreenHeader";
import { styles } from "../theme/styles";
import { Screen } from "../types/navigation";

type Props = {
  setScreen: (screen: Screen) => void;
};

export function LoginScreen({ setScreen }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ScreenHeader title="Login" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="student@email.com" />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <AppButton title="Login" onPress={() => setScreen("home")} />
        <AppButton
          title="Create Account"
          variant="secondary"
          onPress={() => setScreen("signup")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}