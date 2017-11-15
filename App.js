import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Header from './src/Components/Header.js';
import Item from './src/Components/Item.js';
import UserTextInput from './src/Components/UserInput.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Header title='Shortcuts' />
        <ScrollView >
          <UserTextInput startvalue="hola"/>
          <Item title="holaa"></Item>
          <Item title="hola"> </Item>
          <Item title="sergio"></Item>
          <Item title="como"> </Item>
          <Item title="estas"></Item>
          <Item title="hola"></Item>
          <Item title="hola"></Item>
          <Item title="hola"></Item>
          <Item title="hola"></Item>
          <Item title="hola"></Item>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    borderWidth:0,
    borderColor:'red',
    flexDirection:'column'
  }
});
