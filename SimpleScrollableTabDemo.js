import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

class SimpleScrollableTabDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20}}
        renderTabBar={() => <DefaultTabBar />}>
        <View tabLabel='推荐'>
          <Text style={styles.contentText}>推荐</Text>
        </View>
        <Text tabLabel='圆桌' style={styles.contentText}>圆桌</Text>
        <Text tabLabel='热门' style={styles.contentText}>热门</Text>
        <Text tabLabel='收藏' style={styles.contentText}>收藏</Text>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  contentText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  }
});

export default SimpleScrollableTabDemo;
