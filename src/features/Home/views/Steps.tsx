import { StyleSheet } from "react-native";

import { ThemedText, ThemedView } from "@shared/components";
import { useHomeDataSteps } from "../hooks/useHomeDataSteps";

export default function Steps() {
  const { steps, loading } = useHomeDataSteps();

  if (loading) {
    return <ThemedText>Loading...</ThemedText>;
  }

  return steps.map((step, index) => (
    <ThemedView key={index} style={styles.stepContainer}>
      <ThemedText type="subtitle">{step.title}</ThemedText>
      <ThemedText>{step.description}</ThemedText>
    </ThemedView>
  ));
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
