import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Pelé', id: '1' },
    { name: 'Messi', id: '2' },
    { name: 'Cristiano Ronaldo', id: '3' },
    { name: 'Maradona', id: '4' },
    { name: 'Cruyff', id: '5' },
    { name: 'Beckenbauer', id: '6' },
    { name: 'Zidane', id: '7' },
  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
