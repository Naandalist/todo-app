import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState('');
  const changeHandler = value => {
    setText(value);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="#3498db"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});

export default AddTodo;
