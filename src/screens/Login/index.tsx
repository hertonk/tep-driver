import { StyleSheet, View, Text, SafeAreaView, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';

import background from "../../../assets/background1.png";
import logo from "../../../assets/logo.png";

export default function Login({ navigation }) {

  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <View style={styles.containerLogo}>
              <Image source={logo} />
            </View>
            <View style={styles.containerForm}>
              <Text style={styles.title}>Faça seu login</Text>
              <TextInput
                style={styles.form}
                placeholder='Seu e-mail'
                placeholderTextColor="#333333"
              />
              <TextInput
                style={styles.form}
                placeholder='Sua Senha'
                placeholderTextColor="#333333"
              />
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConfirmSMS')}>
                <Text style={styles.buttonText}>ENTRAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCircle} onPress={() => navigation.navigate('RegisterStep1')}>
                <Text style={styles.buttonCircleText}>QUERO CRIAR UMA CONTA</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFAC03'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerForm: {
    flex: 3,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 28,
    marginBottom: 20
  },
  form: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 18,
    width: '100%',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#CCC'
  },
  button: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#023047',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonCircle: {
    width: '100%',
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#023047',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonCircleText: {
    fontSize: 18,
    color: '#023047',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});