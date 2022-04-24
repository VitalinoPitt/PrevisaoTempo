import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Image source={require('../images/imed.png')} />
      <Text style={{fontSize: 80}}></Text>
      <Text style={styles.name}>Vitalino Pitt</Text>
      <Text style={{fontSize: 18}}>Matrícula: 1121407</Text>
      <Text style={{fontSize: 15}}>vitalinopitt@gmail.com</Text>
      <Text style={{fontSize: 80}}></Text>
      <Text style={{fontSize: 16}}>Professor: Marcos Roberto dos Santos</Text>
      <Text style={{fontSize: 16.5}}>Disciplina: Tóp. Esp. em Programação</Text>
      <Text style={{fontSize: 80}}></Text>
      <Text style={{fontSize: 16}}>Passo Fundo/RS   |   2022 / 1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  line:{
    flexDirection: "row",
    marginTop: 20
  },
  name:{
    fontSize: 30,
    fontWeight: "bold"
  }


})