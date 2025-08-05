import { StyleSheet } from "react-native";

import { HelloWave, ParallaxScrollView, ThemedText } from "@shared/components";
import { useHomeState } from "../hooks/useHomeSlice";
import ChildHomeScreen from "./ChildHomeScreen";
import Steps from "./Steps";
import { ReactLogo, TitleContainer } from "./styles/HomeScreen.styled";

export default function HomeScreen() {
  const otherProperty = useHomeState("otherProperty");

  console.log(
    "Ramon - HomeScreen - line 16 - value",
    Date.now(),
    otherProperty
  );

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

      <ChildHomeScreen />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({});
