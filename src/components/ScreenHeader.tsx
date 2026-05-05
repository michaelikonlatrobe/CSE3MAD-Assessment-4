import React from "react";
import { Text, View } from "react-native";
import { styles } from "../theme/styles";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>STEM Lab GO</Text>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}