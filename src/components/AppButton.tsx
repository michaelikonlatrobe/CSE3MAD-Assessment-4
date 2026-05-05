import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../theme/styles";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export function AppButton({ title, onPress, variant = "primary" }: Props) {
  const buttonStyle =
    variant === "primary" ? styles.primaryButton : styles.secondaryButton;

  const textStyle =
    variant === "primary" ? styles.primaryButtonText : styles.secondaryButtonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}