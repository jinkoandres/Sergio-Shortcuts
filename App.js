import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Header from './src/Components/Header.js';
import Item from './src/Components/Item.js';
import UserTextInput from './src/Components/UserInput.js';
import ShortcutList from './src/Components/ShortcutList.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Header title='Shortcuts' />
        <ScrollView >
          <UserTextInput startvalue="hola"/>
          <ShortcutList ShortcutList = {['2', '3']}/>
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
