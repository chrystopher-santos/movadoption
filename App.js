import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable, onPress } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainView = ({navigation}) => {
  return (
    <View style={stylesHome.container}>
          <Image style={stylesHome.img} source={require('./pata-amarela.png')} />
            <text style={stylesHome.paragraph}> P.A.T.A. </text>
            <text style={stylesHome.paragraph}> Plataforma de adoção para todos os animais. </text>
            <Pressable style={stylesHome.btn} onPress={() => navigation.navigate('Login', {someData: Math.floor(Math.random() * 100) })}>
                  <Text style={stylesHome.btn} > Entrar </Text>
            </Pressable>
            <div className="cadastrese">
              <text 
                style={stylesHome.ou} >Ou 
                <Pressable onPress={() => navigation.navigate('Login', {someData: Math.floor(Math.random() * 100) })}>
                  <Text style={stylesHome.link} > cadastre-se </Text>
                </Pressable>
            </text>
            </div>
    </View>
  )
}

const LoginScreen = ({route, navigation}) => {
  return (
    <View style={stylesHome.container}>
        <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
        <text style={stylesLogin.login}>Login</text>
        <form>
          <label>
            <div className="input-email" style={stylesLogin.esquerda}> 
               <text  style={stylesLogin.paragraph}>E-mail: </text>
            </div> 
            <input style={stylesLogin.input} type="email" name="name" class="inputs" placeholder="Digite seu e-mail"/>
            <div className="input-password" style={stylesLogin.esquerda}> 
              <text  style={stylesLogin.paragraph}>Senha: </text>
            </div>
            <input style={stylesLogin.input} type="password" name="password" class="inputs" placeholder="Digite sua senha"/>
          </label>
          <div className='Buttons'>
            <input type="submit" value="Enviar" class="button" />
          </div>
        </form>       
      <Text style={styles.paragraph}>
        This is the detail view. The number is {route.params.someData}.
      </Text>
          
      <Button title="Back" onPress={() => { console.log("Doing somethnig", route.params.someData);  navigation.goBack()}} />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainView} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stylesLogin = StyleSheet.create({
   img: {
    width: 120,
    height: 120,
    textAlign: 'center',
  },
  input: {
    borderRadius: 12,
    border: 'none',
    width: '100%',
    padding: 12,
    margin: 6,
    boxSizzing: 'borderBox',
  },
   paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#ffee4a',
    fontFamily: 'Arial',
    textAlign: 'left',
    alignItems: 'left',
  },
  esquerda: {
    textAlign: 'left',
  },
  login: {
    margin: 14,
    fontSize: 20,
    color: '#ffee4a',
    fontWeight: 'bold',
  },
})

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#77477e',
    padding: 8,
    textAlign: 'center',
    alignItems: 'center',
    textDecorationColor: 'none',
    textDecorationStyle: 'none',
    fontFamily: 'Arial',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#ffee4a',
    fontFamily: 'Arial',
    fontStyle: 'none',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 180,
    height: 180,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor: '#ffee4a',
    border: 'none',
    color: '#77477e',
    borderRadius: 4,
    fontSize: 20,
    margin: 10,
    opacity: 0.9,
    transition: 0.3,
    textDecoration: 'none',
    transitionDuration: 0.4,
  },
  link : {
    fontWeight: 'bold',
    color: '#ffee4a',
    fontSize: 14,
  },
  ou : {
    color: '#ffee4a',
    fontSize: 14,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
