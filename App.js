import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'sheep', id: '2'},
    {name: 'goku', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'buffon', id: '5'},
    {name: 'nanda', id: '6'},
    {name: 'peter', id: '7'},
  ]);

  const pressHandler = id => {
    // console.log('ID from pressHandler: ', id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    fontSize: 20,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
