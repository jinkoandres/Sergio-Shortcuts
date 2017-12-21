import React from 'react';
import { StyleSheet, View, ScrollView, FlatList, Text} from 'react-native';
import Header from './src/Components/Header.js';
import Item from './src/Components/Item.js';
import FloatingActionButton from './src/Components/FloatingActionButton.js';

export default class App extends React.Component {

  state =  {
    isActionButtonVisible : true
  }

  _scrollViewOffset = 0;

  render() {
    console.log('App: React native llama el render');
    return (
      <View style={styles.root}>
        <Header titleText='Shortcuts' />
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
          }, {
            "title": "Wingser",
            "key": "tt0018578ffffsdfs",
            "releaseDate": "1927-05-19T05:00:00.000Z",
            "releaseCountry": "USA",
            "releaseYear": 19233,
            "releaseMonth": 4,
            "releaseDay": 19
          }, {
            "title": "Wingz",
            "key": "tt0018578sasasa",
            "releaseDate": "1927-05-19T05:00:00.000Z",
            "releaseCountry": "USA",
            "releaseYear": 1928,
            "releaseMonth": 4,
            "releaseDay": 19
          }, {
            "title": "Wings of cedonya",
            "key": "tt0018578sdfs",
            "releaseDate": "1927-05-19T05:00:00.000Z",
            "releaseCountry": "USA",
            "releaseYear": 1929,
            "releaseMonth": 4,
            "releaseDay": 19
          }]}
          renderItem={({ item }) => <Item title={item.title} releaseYear={item.releaseYear}></Item>}
          onScroll={this._onScroll}
          scrollEventThrottle = {60}
        />
        {this.state.isActionButtonVisible ? <FloatingActionButton /> : null}
      </View>
    );
  }
}
_onScroll = (event) => {
  console.log ('received scroll event' );
  const CustomLayoutLinear = {
    duration: 100,
    create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
    delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
  }
  
  const currentOffset = event.nativeEvent.contentOffset.y;
  const direction = (currentOffset > 0 && currentOffset > this._listViewOffset) ? 'down' : 'up';
  const isActionButtonVisible = direction === 'up'

  if (isActionButtonVisible !== this.state.isActionButtonVisible) {
    LayoutAnimation.configureNext(CustomLayoutLinear)
    this.setState({ isActionButtonVisible })
  }
  // Update your scroll position
  this._listViewOffset = currentOffset 
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    flexDirection:'column',
    backgroundColor: '#BDBDBD'
  }
});
