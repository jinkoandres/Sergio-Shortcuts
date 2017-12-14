import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FloatingActionButton extends React.Component {
    constructor(props) {
        super(props);
        
    }

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
    container :  {
        alignSelf : 'flex-end',
        backgroundColor: "transparent"
    },
    buttonText: {
        width : 72 / 2,
        height : 72 / 2,
        
        color : '#FFFF',
        fontSize: 20, 
        lineHeight : 20, 
        borderWidth : 2,
        borderColor : 'red',
        textAlign : 'center',
        textAlignVertical : 'center'
        
    },
    buttonBackground : {
        alignSelf : 'flex-end',
        margin : 8,
        width : 72,
        height : 72,
        borderRadius : 72 / 2,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: '#03A9F4'
    }
});
export default FloatingActionButton;
