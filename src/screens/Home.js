import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import TopBar from '../components/TopBar.js';
import Items from '../components/Items.js'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerTextSection}> 
          <Text style={styles.headingText}>Men Clothing</Text>
        </View> 
        <TopBar />
        <Items />
      </View>

    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerTextSection: {
    padding: 15,
  },
  headingText: {
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 5
  }
})

export default Home;