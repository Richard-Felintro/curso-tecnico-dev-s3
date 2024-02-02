import { StatusBar } from "react-native";
import {
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Container } from "./src/components/Container/Style";
import { Header } from "./src/components/Header/Index";
import { Home } from "./src/screens/Home";
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Container>
      <Header />
      <Home />
      <StatusBar translucent backgroundColor="transparent" />
    </Container>
  );
}
