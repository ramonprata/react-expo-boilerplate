import { Image } from "expo-image";
import { Button, StyleSheet } from "react-native";

import {
  HelloWave,
  ParallaxScrollView,
  ThemedText,
  ThemedView,
} from "@shared/components";
import { useHomeSlice } from "../hooks/useHomeSlice";
import Steps from "./Steps";

export default function HomeScreen() {
  const { incrementCounter, resetHomeSlice, counter } = useHomeSlice();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <Steps />

      <ThemedView style={styles.zustandContainer}>
        <ThemedText>Demo Zustand</ThemedText>
        <ThemedView style={styles.infoContainer}>
          <ThemedView style={styles.infoContainer}>
            <ThemedText type="subtitle">Counter: </ThemedText>
          </ThemedView>
          <ThemedText type="title" style={{ textAlign: "center" }}>
            {counter}
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoContainer}>
          <Button title="Increment counter" onPress={incrementCounter} />
        </ThemedView>
        <ThemedView style={styles.infoContainer}>
          <Button title="Reset counter" onPress={resetHomeSlice} />
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  zustandContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 8,
  },

  infoContainer: { padding: 8 },
});
