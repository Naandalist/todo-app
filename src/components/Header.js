import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: '#3498db',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
  },
});

export default Header;
