import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Contador: {count}</Text>
      <TouchableOpacity style={[styles.btn, styles.blueBg]} onPress={increase}>
        <Text style={styles.text}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.redBg]} onPress={decrease}>
        <Text style={styles.text}>Decrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    width: "100%",
    fontSize: 32,
    textAlign: "center",
    verticalAlign: "center",
  },

  btn: {
    height: "10%",
    width: "50%",
    borderRadius: 5,
    borderColor: "#FFF",
    margin: 10,
    justifyContent: "center",
  },
  blueBg: {
    backgroundColor: "#06F",
  },
  redBg: {
    backgroundColor: "#F00",
  },
});
