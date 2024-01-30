import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Container } from "./src/components/Container/Container";
import {
  ButtonText,
  BlueButton,
  RedButton,
  GrayButton,
} from "./src/components/Button/Button";
import { Title } from "./src/components/Title/Title";
import { Image } from "./src/components/Image/Image";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn(`Parabéns, você sabe contar até ${count}!`);
    console.clear();
  }, [count]);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      Alert.alert("Contador não pode ser menor que zero.");
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <Container>
      <Image
        source={{
          uri: "https://static.toiimg.com/thumb/msid-102018994,width-1280,height-720,resizemode-4/102018994.jpg",
        }}
      />
      <Title> Contador: {count}</Title>
      <BlueButton onPress={increase}>
        <ButtonText>Incrementar</ButtonText>
      </BlueButton>
      <GrayButton onPress={reset}>
        <ButtonText>Zerar</ButtonText>
      </GrayButton>
      <RedButton onPress={decrease}>
        <ButtonText>Decrementar</ButtonText>
      </RedButton>
      <StatusBar style="auto" />
    </Container>
  );
}
