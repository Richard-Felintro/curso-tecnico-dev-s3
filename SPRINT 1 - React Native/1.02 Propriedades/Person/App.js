import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { useFonts, SulphurPoint_Bold } from '@expo-google-fonts/sulphur-point';
import AppLoading from 'expo-app-loading';
import Person from "./src/components/Person/Person.js";
import Game from "./src/components/Game/Game.js";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    SulphurPoint_Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const personList = [
    { id: "1", name: "Carlão", age: 19 },
    { id: "2", name: "Duardão", age: 20 },
    { id: "3", name: "joaquinsson", age: 97 },
  ];

  const gameList = [
    {
      id: "1",
      title: "Hollow Knight",
      genre: "Metroidvania",
      price: "29,99",
      dev: "Team Cherry",
    },
    {
      id: "2",
      title: "Celeste",
      genre: "Plataforma",
      price: "19,99",
      dev: "EXOK Studio",
    },
    {
      id: "3",
      title: "Fear & Hunger",
      genre: "Survival Horror",
      price: "24,99",
      dev: "Happy Paintings",
    },
  ];

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
      padding: 10,
    },
    text: {
      fontFamily: 'SulphurPoint-Bold',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={personList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Person name={item.name} age={item.age} />}
      />

      <FlatList
        data={gameList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Game
            title={item.title}
            genre={item.genre}
            price={item.price}
            dev={item.dev}
          />
        )}
      />
    </SafeAreaView>
  );
}
