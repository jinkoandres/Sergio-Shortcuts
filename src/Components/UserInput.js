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
        return (
            <View>
                <TextInput
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
        borderWidth:1,
        borderColor:'blue',
        paddingTop:10,
        paddingLeft:5,
      }
})

