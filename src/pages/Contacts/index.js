import React from "react";
import { View, Text } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View style={{ marginTop: 30 }}>
      <View>
        <Text>Nome: Tony Walker</Text>
        <Text>Telefone: (12)1234-5678 </Text>
        <Text onPress={() => navigation.navigate('Information',
        {
          nome: 'Tony Walker',
          telefone: '(12)5678-1234',
          endereco: 'Rua das paladeiras',
          numero: '165',
          profissao: 'Programador',
          email: 'anthonytguilhrme@hotmail.com',
        })}
        >Information...</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>Nome: Joao Silva</Text>
        <Text>Telefone: (12)5678-1234 </Text>
        <Text onPress={() => navigation.navigate('Information',
          {
            nome: 'Joao Silva',
            telefone: '(12)5678-1234',
            endereco: 'Rua das flores',
            numero: '768',
            profissao: 'Carpinteiro',
            email: 'joaosilva@carpinteiria.com.br',
          })}
        >Information...</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>Nome: Joao Silva</Text>
        <Text>Telefone: (12)5678-1234 </Text>
        <Text onPress={() => navigation.navigate('Information')}
        >Information...</Text>
      </View>
    </View>
  )
}