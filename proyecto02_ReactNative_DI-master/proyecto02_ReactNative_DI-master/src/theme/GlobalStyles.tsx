//react es tsx.
import { StyleSheet } from "react-native";
import { Color } from "./Color";

export

const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      textoGrande: {
        fontSize: 50,
        color: Color.textPrimary
      },
      boton:{
        backgroundColor: '#00aae4',
        padding: 10,
        borderRadius:10
      },
      h1:{
        fontSize:60
      },
      h2:{
        fontSize:30
      },
      h3:{
        fontSize: 15
      }

      /*botonPulsado:{
        opacity:0.6
      }*/
})