import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/styles";

type Props = {
  title: string;
  body?: string;
  onPress?: () => void;
};

export function AppCard({ title, body, onPress }: Props) {
  if (onPress) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.cardTitle}>{title}</Text>
        {body ? <Text style={styles.bodyText}>{body}</Text> : null}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {body ? <Text style={styles.bodyText}>{body}</Text> : null}
    </View>
  );
}