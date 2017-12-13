import React from 'react';
import {
    View,
    TextInput, 
    StyleSheet
} from 'react-native';

export default class UserTextInput extends React.Component {
    state = {
        inputValue: "Hola"
    };
    
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };

    render() {
        console.log('UserInput: React native llama el render');
        return (
            <View>
                <TextInput
                    placeholder = 'Escriba para añadir un item'
                    value={this.inputValue}
                    onChangeText={this._handleTextChange}
                    style={styles.elemento}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    elemento:{
        height:48,
        borderBottomWidth:1,
        borderColor:'blue',
        paddingTop:10,
        paddingLeft:5,
      }
})

