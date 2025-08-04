import { ThemedText } from "@shared/components";
import { Button } from "react-native";
import { useHomeSlice } from "../hooks/useHomeSlice";
import { InfoContainer, ZustandContainer } from "./styles/HomeScreen.styled";

export default function ChildHomeScreen() {
  const { incrementCounter, resetHomeSlice, counter } = useHomeSlice();

  // const incrementCounter = useHomeSlice((state) => state.increment);
  // const counter = useHomeSlice((state) => state.counterHome);

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
