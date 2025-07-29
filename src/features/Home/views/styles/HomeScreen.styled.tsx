import { ThemedView } from "@/src/shared/components";
import styled from "@emotion/native";

export const TitleContainer = styled(ThemedView)({
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
});

export const ReactLogo = styled.Image({
  height: 178,
  width: 290,
  bottom: 0,
  left: 0,
  position: "absolute",
});

export const ZustandContainer = styled(ThemedView)({
  justifyContent: "center",
  alignItems: "center",
  gap: 8,
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 8,
  borderRadius: 8,
});

export const InfoContainer = styled(ThemedView)({
  padding: 8,
});
