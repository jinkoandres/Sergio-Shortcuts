import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.statusbar} >
                <Text> {this.props.title} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusbar: {
        height:60,
        paddingTop: 8,
        borderWidth:0,
        borderColor:'red',
        flexDirection:'column',
        backgroundColor:'#aaaaaa',
        alignItems: 'center',
        justifyContent : 'center'
      }
})

