import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FloatingActionButton extends React.Component {
    render() {
        const { buttonBackground, buttonText, container } = styles;
        return (
            <View style={container}>
                <View style={buttonBackground}>
                    <Text style={buttonText} >+</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        width : 40,
        height :40,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor : 'green'
    },
    buttonText: {
        flex : 1,
        color : '#FFFF'
    },
    buttonBackground : {
        flex: 1,
        width : 40,
        height : 40,
        justifyContent: 'center',
        alignItems : 'stretch',
        backgroundColor: '#03A9F4'
    }
});
export default FloatingActionButton;
