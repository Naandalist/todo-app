import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';

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
    setTodos(prevTodos => {
      const key = Math.floor(Math.random() * 1000).toString();
      console.log(`text: ${text}, key: ${key}`);
      return [...prevTodos, {text: text, key: key}];
    });
  };

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default Dashboard;
