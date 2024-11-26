import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface Props{
    nombre?:string;
    tamanio?:number;
}

export const Saludo = ({nombre, tamanio}:Props) => {
  return ( //solo se puede mandar una etiqueta con el return. Habria que meterlo todo en una etiqueta vacía
    <Text style = {{fontSize:tamanio}}>¡Hola, hola {nombre}!</Text>
    
  )
}

const Styles = StyleSheet.create({
    textoGrande:{
        fontSize: 50,
    }
})