import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text} from 'react-native';
import Header from './src/Components/Header.js';
import Item from './src/Components/Item.js';
import UserTextInput from './src/Components/UserInput.js';

export default class App extends React.Component {


  render() {
    console.log('App: React native llama el render');
    return (
      <View style={styles.root}>
        <Header titleText='Shortcuts' />
        <ScrollView >
          <UserTextInput startvalue="hola"/>
            <FlatList
              data={[{
                "title": "Reactable",
                "key": "tt0018578",
                "url": "http://reactable.com"
              },
              {
                "title": "Google",
                "key": "tt0019729",
                "url": "https://google.com"
              },
              {
                "title": "The wayback machine",
                "key": "tt0020629",
                "url": "https://web.archive.org"
              }]}
              renderItem={({item}) => <Item title={item.title} releaseYear = {item.url}></Item>}
            />
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
