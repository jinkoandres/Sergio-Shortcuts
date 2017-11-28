import React, { Component } from 'react';
import { ListView } from 'react-native';
import Item from './Item.js'
class ShortcutList extends React.Component {
    state = {
        shortcutList: []
    }
    
    componentWillMount() {
        const data_source = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1 !== r2
        })

        this.dataSource = data_source.cloneWithRows(this.props.shortcutList);
    }

    renderRow(itemName) {
        return <Item title = {itemName}/>;
    }
    render() {
        <ListView 
        dataSource = {this.dataSource} 
        renderRow = {this.renderRow}
        />
    }
}

export default ShortcutList;