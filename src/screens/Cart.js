import React, { Component } from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';

class Cart extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text>Cart Screen</Text>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Cart;