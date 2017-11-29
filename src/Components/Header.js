import React from 'react';
import {
    View,
    Text, 
    StyleSheet
} from 'react-native';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log('Header: React native llama el constructor');
    }
    componentWillMount() {
        console.log('Header: React native llama  componentWillmount');
        
    }
    componentDidMount() {
        console.log('Header: React native llama  componentDidMount');
    }
    componentWillReceiveProps(props) {
        console.log('Header: React native llama  componentWillReceiveProps');
    }
    
    render() {
        console.log('Header: React native llama el render');        
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

