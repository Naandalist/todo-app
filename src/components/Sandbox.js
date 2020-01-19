import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: '#eee',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 40,
  },
});

export default Sandbox;
