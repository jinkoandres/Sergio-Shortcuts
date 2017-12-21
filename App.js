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
        <ScrollView >
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
