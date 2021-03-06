import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.screenText}>Home Screen</Text>
      <Text style={styles.subText}>Information Passed: {route.params.input}</Text>
      <Button onPress={() => navigation.goBack()} title={'Go Back'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenText: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center'  
  },
  subText: {
    textAlign: 'center',
    marginBottom: 10
  }
});

export default HomeScreen;