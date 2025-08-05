import { ThemedText } from "@shared/components";
import { Button } from "react-native";
import { useHomeAction, useHomeState } from "../hooks/useHomeSlice";
import { InfoContainer, ZustandContainer } from "./styles/HomeScreen.styled";

export default function ChildHomeScreen() {
  const counter = useHomeState("counter");
  const incrementCounter = useHomeAction("incrementCounter");
  const resetHomeSlice = useHomeAction("resetHomeSlice");
  return (
    <>
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
    </>
  );
}
