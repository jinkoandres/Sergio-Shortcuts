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
                "title": "Wings",
                "key": "tt0018578",
                "releaseDate": "1927-05-19T05:00:00.000Z",
                "releaseCountry": "USA",
                "releaseYear": 1927,
                "releaseMonth": 4,
                "releaseDay": 19
              },
              {
                "title": "The Broadway Melody",
                "key": "tt0019729",
                "releaseDate": "1929-02-01T05:00:00.000Z",
                "releaseCountry": "USA",
                "releaseYear": 1929,
                "releaseMonth": 1,
                "releaseDay": 1
              },
              {
                "title": "All Quiet on the Western Front",
                "key": "tt0020629",
                "releaseDate": "1930-04-21T04:00:00.000Z",
                "releaseCountry": "USA",
                "releaseYear": 1930,
                "releaseMonth": 3,
                "releaseDay": 21
              }]}
              renderItem={({item}) => <Item title={item.title} releaseYear = {item.releaseYear}></Item>}
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
