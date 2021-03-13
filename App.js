import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import ContactScreen from './src/components/ContactScreen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent={true} />
        <ContactScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
