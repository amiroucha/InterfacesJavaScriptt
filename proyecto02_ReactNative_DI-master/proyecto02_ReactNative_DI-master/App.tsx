//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
//import { useState } from 'react';
import { GlobalStyles } from './src/theme/GlobalStyles';
//import { Saludo } from './src/components/Saludo';
//import { Contador } from './src/components/Contador';
//import { Color } from './src/theme/Color';
import { MyText } from './src/components/MyText';

export default function App() {

  /*const[contador, setContador] = useState(10);*/

  return (
    <View style={GlobalStyles.container}>
      <MyText tamanio='h1'>
        Hola
      </MyText>
    </View>
  );


 /*return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textoGrande} numberOfLines={1} adjustsFontSizeToFit>Hola, hola, Vecinitos</Text>
      
    </View>
  );*/
  /*return (
    <View style={styles.container}>
      <Text style={styles.textoGrande}>{contador}</Text>
      <Contador label = 'Incrementar' onPress={() => setContador(contador+1)} onLongPress={() => setContador(0)}/>
      <StatusBar style="auto" />
    </View>
  );*/

  /*return (
    <View style={styles.container}>
      <Saludo nombre='Vecinito' tamanio={30}/>
      <StatusBar style="auto" />
    </View>
  );*/
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoGrande: {
    fontSize: 50,
    color: Colores.textPrimary
  },
});*/
