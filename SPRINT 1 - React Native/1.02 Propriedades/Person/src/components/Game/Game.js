import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_400Regular } from "expo-font";

const Game = ({ title, genre, price, dev }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Título: {title}</Text>
      <Text style={styles.text}>Gênero: {genre}</Text>
      <Text style={styles.text}>Preço: R${price}</Text>
      <Text style={styles.text}>Deselvolvedor: {dev}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    borderColor: "#EEEEEE",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Poppins_400Regular',
    color: "#EEEEEE",
  },
});

export default Game;
