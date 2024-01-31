import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import {
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { Container } from "./src/components/Container/Container";
import { HeaderContainer, HeaderTitle } from "./src/components/Header/Header";
import {
  Input,
  InputBox,
  InputBoxMedium,
  InputBoxSmall,
  InputLabel,
  InputContainerDouble,
} from "./src/components/Input/Input";

import { Styles } from "./style";
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
      <HeaderContainer style={Styles.header}>
        <HeaderTitle>Consumo de ApiCEP</HeaderTitle>
      </HeaderContainer>
      <StatusBar style="auto" />
      <InputBox>
        <InputLabel> Informar CEP:</InputLabel>
        <Input placeholder="Cep..." />
      </InputBox>
      <InputBox>
        <InputLabel> Logradouro:</InputLabel>
        <Input placeholder="Logradouro..." />
      </InputBox>
      <InputBox>
        <InputLabel> Bairro:</InputLabel>
        <Input placeholder="Bairro..." />
      </InputBox>
      <InputBox>
        <InputLabel> Cidade:</InputLabel>
        <Input placeholder="Cidade..." />
      </InputBox>
      <InputContainerDouble>
        <InputBoxMedium>
          <InputLabel> Estado:</InputLabel>
          <Input placeholder="Estado..." />
        </InputBoxMedium>
        <InputBoxSmall>
          <InputLabel> UF:</InputLabel>
          <Input placeholder="UF" />
        </InputBoxSmall>
      </InputContainerDouble>
      <StatusBar translucent backgroundColor="transparent"/>
    </Container>
  );
}
