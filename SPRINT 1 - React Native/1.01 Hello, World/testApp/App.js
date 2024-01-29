import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import senas from './src/assets/Images/SENAS.png'
import { useFonts, SulphurPoint_Bold } from 'expo-font';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    SulphurPoint_Bold
  })
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Image source={senas} style={styles.img} />

        <Text style={styles.loginText}>Login</Text>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          color='#FFF'
        />
        <Text style={styles.inputText}>Senha</Text>
        <TextInput
          style={styles.input}
          color='#FFF'
        />
        <Text style={styles.miniText}>Esqueceu sua senha?</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textButton}>ENTRAR</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: undefined,
    height: '10%',
    resizeMode: 'contain'
  },
  loginText: {
    color: 'white',
    fontSize: 72,
    marginBottom: '16%'
  },

  inputText: {
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'bottom',
    textAlign: 'left',
    width: '90%'
  },
  input: {
    backgroundColor: "#DDD",

    width: '90%',
    height: '5%',

    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',

    padding: 10,

    color: '#FFF',
  },

  btn: {
    backgroundColor: 'red',
    color: 'white',

    width: '90%',
    height: '5%',

    marginTop: '5%',
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 3,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  textButton: {
    color: 'white',
    fontSize: 20,
  },

  miniText: {
    color: 'white',
    fontSize: 15,
  },

  image: {
    maxWidth: '80%',
    maxHeight: '50%'
  },

  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%'
  },
});
