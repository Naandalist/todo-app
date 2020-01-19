import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItem = ({item, pressHandler}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Ionicons name="md-trash" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});

export default TodoItem;

/**
 * Note::
 * Flex direction "column" is default. You can try "row" to make it
 */
