/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import APICall from './src/components/APICall';


class App extends Component {
  state = {
    ViewDisplay: 'none',
    btnDisplay: 'flex'
  }

  fetchData = () => {
    this.setState({
      ViewDisplay: 'flex',
      btnDisplay: 'none'
    });
    
  }

  render() {
    const {ViewDisplay, btnDisplay} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          activeOpacity= {0.6} 
          style={[styles.btnMain, {display: btnDisplay}]}
          onPress={() => this.fetchData()}> 
          <Text style={styles.btnText}>Fetch Data</Text>
        </TouchableOpacity>
        <View style={{display: ViewDisplay}}>
          <APICall />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnMain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '75%',
  },
  btnText: {
    backgroundColor: 'orange',
    padding: 20,
    color: 'white',
    fontSize: 22,
    borderRadius: 5
  }
});

export default App;
