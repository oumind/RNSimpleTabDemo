import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';

class SimpleSegmentedControlDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['正在上映', '即将上映'],
      value: '正在上映',
      selectedIndex: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onChange(event) {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  }

  onValueChange(value) {
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 20}}>
          <SegmentedControlIOS
            style={{width: 150}}
            values={this.state.values}
            selectedIndex={this.state.selectedIndex}
            onChange={this.onChange}
            onValueChange={this.onValueChange}/>
        </View>

        <View>
          <Text style={styles.text} >
            Value: {this.state.value}
          </Text>
          <Text style={styles.text} >
            Index: {this.state.selectedIndex}
          </Text>
        </View>

        {(() => {
          if (this.state.selectedIndex === 0) {
            return (
              <View style={{marginTop: 100}}>
                <Text style={{fontSize: 35}}>{this.state.username} 这是正在上映的电影</Text>
              </View>
            )
          } else if (this.state.selectedIndex === 1){
            return (
              <View style={{marginTop: 100}}>
                <Text style={{fontSize: 35}}>{this.state.username} 这是即将上映的电影</Text>
              </View>
            )
          } else {
            return null;
          }
         })()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  }
});

export default SimpleSegmentedControlDemo;
