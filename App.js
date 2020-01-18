import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Nanda');
  const [age, setAge] = useState(23);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. Nanda"
        onChangeText={val => setName(val)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 30"
        onChangeText={val => setAge(val)}
      />
      <Text>
        Hello, my name is {name}, {age} years old.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
