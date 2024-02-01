import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import {
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Container } from "./src/components/Container/Style";
import { HeaderContainer, HeaderTitle } from "./src/components/Header/Style";
import {
  Input,
  InputBox,
  InputBoxMedium,
  InputBoxSmall,
  InputContainerDouble,
} from "./src/components/Input/Style";
import { Label } from "./src/components/Label/style";

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
      <HeaderContainer>
        <HeaderTitle>Consumo de ApiCEP</HeaderTitle>
      </HeaderContainer>
      <StatusBar style="auto" />
      <InputBox>
        <Label> Informar CEP:</Label>
        <Input placeholder="Cep..." />
      </InputBox>
      <InputBox>
        <Label> Logradouro:</Label>
        <Input placeholder="Logradouro..." />
      </InputBox>
      <InputBox>
        <Label> Bairro:</Label>
        <Input placeholder="Bairro..." />
      </InputBox>
      <InputBox>
        <Label> Cidade:</Label>
        <Input placeholder="Cidade..." />
      </InputBox>
      <InputContainerDouble>
        <InputBoxMedium>
          <Label> Estado:</Label>
          <Input placeholder="Estado..." />
        </InputBoxMedium>
        <InputBoxSmall>
          <Label> UF:</Label>
          <Input placeholder="UF" />
        </InputBoxSmall>
      </InputContainerDouble>
      <StatusBar translucent backgroundColor="transparent" />
    </Container>
  );
}
