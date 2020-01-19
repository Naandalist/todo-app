import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
// import Sandbox from '../components/Sandbox';

const Dashboard = () => {
  const [todos, setTodos] = useState([
    {text: 'boil a water', key: '1'},
    {text: 'reading a book', key: '2'},
    {text: 'coding with javascript', key: '3'},
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        const key = Math.floor(Math.random() * 1000).toString();
        console.log(`text: ${text}, key: ${key}`);
        return [...prevTodos, {text: text, key: key}];
      });
    } else {
      Alert.alert('SORRY!', 'Todo must be over 3 chars long.', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <Text>FontAwesome Icons</Text>
          <FontAwesome name="trophy" />
        </View>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default Dashboard;

/**
 * NOTE::
 * If you want to see list of available icons from fontawesome,
 * you can look in this directory:
 * \node_modules\react-native-vector-icons\glyphmaps\FontAwesome.json
 */
