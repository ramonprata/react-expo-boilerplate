import { StyleSheet } from "react-native";

import { ThemedText, ThemedView } from "@shared/components";
import { useHomeDataSteps } from "../hooks/useHomeDataSteps";

export default function Steps() {
  const { steps, loading, error } = useHomeDataSteps();

  if (loading) {
    return (
      <ThemedView style={styles.feedbackContaniner}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.feedbackContaniner}>
        <ThemedText>{error}</ThemedText>
      </ThemedView>
    );
  }

  return steps.map((step, index) => (
    <ThemedView key={index} style={styles.stepContainer}>
      <ThemedText type="subtitle">{step.title}</ThemedText>
      <ThemedText>{step.description}</ThemedText>
    </ThemedView>
  ));
}

const styles = StyleSheet.create({
  feedbackContaniner: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
