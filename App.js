import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <View style={styles.container2}>
          <Text style={styles.txt}>Texto 1</Text>
          <Text>Texto 2</Text>
          <Text>Texto 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 0.5,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
  },
  txt: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
  },
});
