import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';

const Dashboard = () => {
  const [todos, setTodos] = useState([
    {text: 'boil a water', key: '1'},
    {text: 'reading a book', key: '2'},
    {text: 'coding with javascript', key: '3'},
  ]);
  const pressHandler = key => {
    // console.log('KEY: ', key);
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
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
