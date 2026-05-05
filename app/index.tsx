import React, { useState } from "react";
import { ActivityMenuScreen } from "../src/screens/ActivityMenuScreen";
import { DeviceToolsScreen } from "../src/screens/DeviceToolsScreen";
import { HelpScreen } from "../src/screens/HelpScreen";
import { HomeScreen } from "../src/screens/HomeScreen";
import { LeaderboardScreen } from "../src/screens/LeaderboardScreen";
import { LoginScreen } from "../src/screens/LoginScreen";
import { ResultsScreen } from "../src/screens/ResultsScreen";
import { SignupScreen } from "../src/screens/SignupScreen";
import { WelcomeScreen } from "../src/screens/WelcomeScreen";
import { Screen } from "../src/types/navigation";

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");

  if (screen === "welcome") return <WelcomeScreen setScreen={setScreen} />;
  if (screen === "login") return <LoginScreen setScreen={setScreen} />;
  if (screen === "signup") return <SignupScreen setScreen={setScreen} />;
  if (screen === "home") return <HomeScreen setScreen={setScreen} />;
  if (screen === "activities") return <ActivityMenuScreen setScreen={setScreen} />;
  if (screen === "results") return <ResultsScreen setScreen={setScreen} />;
  if (screen === "leaderboard") return <LeaderboardScreen setScreen={setScreen} />;
  if (screen === "deviceTools") return <DeviceToolsScreen setScreen={setScreen} />;
  if (screen === "help") return <HelpScreen setScreen={setScreen} />;

  return <WelcomeScreen setScreen={setScreen} />;
}