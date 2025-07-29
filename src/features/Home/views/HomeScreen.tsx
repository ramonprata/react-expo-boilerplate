import { Button, StyleSheet } from "react-native";

import { HelloWave, ParallaxScrollView, ThemedText } from "@shared/components";
import { useHomeSlice } from "../hooks/useHomeSlice";
import Steps from "./Steps";
import {
  InfoContainer,
  ReactLogo,
  TitleContainer,
  ZustandContainer,
} from "./styles/HomeScreen.styled";

export default function HomeScreen() {
  const { incrementCounter, resetHomeSlice, counter } = useHomeSlice();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <ReactLogo source={require("@/assets/images/partial-react-logo.png")} />
      }
    >
      <TitleContainer>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </TitleContainer>

      <Steps />

      <ZustandContainer>
        <ThemedText>Demo Zustand</ThemedText>
        <InfoContainer>
          <InfoContainer>
            <ThemedText type="subtitle">Counter: </ThemedText>
          </InfoContainer>
          <ThemedText type="title" style={{ textAlign: "center" }}>
            {counter}
          </ThemedText>
        </InfoContainer>
        <InfoContainer>
          <Button title="Increment counter" onPress={incrementCounter} />
        </InfoContainer>
        <InfoContainer>
          <Button title="Reset counter" onPress={resetHomeSlice} />
        </InfoContainer>
      </ZustandContainer>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({});
