import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [input, setInput] = useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.screenText}>Login Screen</Text>
      <Text style={styles.subText}>Enter data below to pass on to the next screen and set head title</Text>
      
      <TextInput 
        placeholder="Enter Data" 
        style={styles.textInput}
        onChangeText={(input) => setInput({input})}
      />

      <Button onPress={() => navigation.navigate('Home', input)} title={'Go to Home'}/>
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
    textAlign: 'center'
  },
  textInput: {
    height: 50,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    margin: 10
  }
});

export default LoginScreen;