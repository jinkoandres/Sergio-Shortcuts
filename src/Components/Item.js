import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

export default class Item extends React.Component {
    
    render() {
        const {elemento } = styles;
        return (
            <View> 
                <Text style={elemento}>{this.props.title}</Text>
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

