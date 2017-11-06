import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    inputValue: "You can change me!"
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.statusbar}>
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.elemento1}>{this.state.inputValue}</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <Text style={styles.elemento1}>hola</Text>
          <TextInput
            value='hola'
            onChangeText={this._handleTextChange}
            style={styles.elemento1}
          />
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    borderWidth:0,
    borderColor:'red',
    flexDirection:'column',
  },
  statusbar: {
    height:22,
    borderWidth:0,
    borderColor:'red',
    flexDirection:'column',
    backgroundColor:'#aaaaaa'
  },
  contenedor: {
    flex:1,
    borderWidth:0,
    borderColor:'red',
    flexDirection:'column',
    justifyContent:'space-around'
    
  },
  elemento1:{
    height:44,
    borderWidth:1,
    borderColor:'blue',
    paddingTop:10,
    paddingLeft:5,
  }
});
