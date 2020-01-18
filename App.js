import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('Nanda');
  const [teacher, setTeacher] = useState({name: 'Lukman', age: 33});
  const pressHandler = () => {
    setName('Listiananda Apriliawan');
    setTeacher({name: 'Dwi Novari', age: 30});
  };
  return (
    <View style={styles.container}>
      <Text>Hello, my name is {name} </Text>
      <Text>
        My teacher is {teacher.name} and his age is {teacher.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={pressHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 10,
  },
});
