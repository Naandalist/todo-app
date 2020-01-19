import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

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

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => <Text style={styles.item}>{item.name} </Text>}
      />

      {/* <ScrollView>
        {people.map(person => (
          <View key={person.key}>
            <Text style={styles.item}>{person.name} </Text>
          </View>
        ))}
      </ScrollView> */}
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
