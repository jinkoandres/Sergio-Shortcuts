import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

export default class Item extends React.Component {
    render() {
        const { listRowStyle, titleStyle, releaseYearStyle} = styles;
        const { title , releaseYear } = this.props;
        return (
            
            <View style={listRowStyle}> 
                <Text style = {titleStyle}>{title}</Text>
                <Text style = {releaseYearStyle}>Year : {releaseYear}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listRowStyle: {
        height:48,
        borderWidth:1,
        borderColor:'blue',
        paddingTop:10,
        paddingLeft:5,
        flexDirection:'row'
      },
    titleStyle: {
        flex: 2,
        borderColor:'green',
        borderWidth:1
    },
    releaseYearStyle: {
        borderColor:'red',
        borderWidth:1
    }
})

