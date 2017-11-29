import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.elemento}> 
                <Text >{this.props.title}</Text>
                <Text style={styles.releaseYear}>{this.props.releaseYear}</Text>
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
        flexDirection:'row'

      },
    releaseYear:{
        
        alignSelf:'flex-end'
    }
})

