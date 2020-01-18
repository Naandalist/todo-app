import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.boldText}>Heelo from react native here!</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Heelo from react native here!</Text>
        <Text>Heelo from react native here!</Text>
        <Text>Heelo from react native here!</Text>
        <Text>Heelo from react native here!</Text>
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
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
});
