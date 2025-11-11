
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
  //var valor = 1;
  const [valor, setValor] = useState(0);
  const [name, setName] = useState('teste');

  function add() {
    setValor(valor + 1);
    console.log(valor);
  }

  function rmv() {
    setValor(valor - 1);
    console.log(valor);
  }
  return (
    <View style={styles.container}>


      <Text>Clique no botão de Adicionar</Text>

      <Text>Valor: {valor}</Text>

      <Button
        onPress={() => (add())}
        backgroundColor='#2317ceff'
        title='Adicionar'
      />

      <Button
        onPress={() => (rmv())}
        backgroundColor='#2317ceff'
        title='Remover'
      />


      <TextInput
        onChangeText={setName}
        value={name}
        style={{
          borderWidth: 1,
          width: 200,
          height: 25,
          borderBottomColor: '#000000'
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3aaf03ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
