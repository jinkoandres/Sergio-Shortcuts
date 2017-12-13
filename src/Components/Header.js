import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

export default class Header extends React.Component {
    render() {
        const {background, title, statusDark} = styles;
        const {titleText} = this.props;
        return (
            <View>
                <View style={statusDark}></View>
                <View style={background} >
                    <Text style = {title}> {titleText} </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusDark:{
        height: 24,
        backgroundColor:'#1976D2'
    },
    background: {
        paddingTop: 8,
        flexDirection: 'column',
        backgroundColor: '#03A9F4',
        alignItems: 'center',
        justifyContent: 'center',
        height : 80,
        shadowColor:'#000',
        shadowOffset : {width : 0, height :2},
        shadowOpacity :0.4
    },
    title: {
        fontSize:24,
        color: '#FFFFFF'
    }
})

