import React, {Component, createRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native'

class ProblemA extends Component {
  constructor(props) {
    super(props)
    this.inputRefs = [
      createRef(),
      createRef(),
      createRef(),
      createRef()
    ]
    this.state = {
      otp: '',
    }
  }

  goToNext(index, input) {
    let otpText = this.state.otp;
    otpText += input;
    this.setState({otp: otpText});
    if(index < this.inputRefs.length - 1) {
      this.inputRefs[index+1].focus();
    }
  }

  render() {
    const {otp} = this.state;
    
    return(
      <>
      <StatusBar backgroundColor="#68BF71"/>
      <View style={styles.topBar}>
          <Text style={styles.topText}>Log into Saavn</Text>
      </View>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={styles.container}>
          <Text style={styles.mainText}>Enter your code</Text>
            <View style={styles.numGrid}>
              {
                this.inputRefs.map((key, index) => (
                  <TextInput
                    key={index}
                    keyboardType='numeric'
                    maxLength={1}
                    onChangeText ={(input) => this.goToNext(index, input)}
                    ref={(reference) => {this.inputRefs[index] = reference}}
                    style={styles.numInput}   
                  />
                ))
              }
            </View>
          <TouchableOpacity
            style={styles.btnMain}
            activeOpacity={0.5}
            onPress = {() => Alert.alert("OTP: ", otp)}
          >
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 80
  },
  topBar: {
    backgroundColor: '#68BF71',
    paddingBottom: 10,
  },
  topText: {
    color: 'white',
    textAlign:'center',
    fontSize: 18
  },
  numGrid: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginBottom: 80
  },  
  numInput: {
    borderWidth: 1,
    borderColor: '#868686',
    width: 50,
    height: 50,
    borderRadius: 5,
    textAlign: 'center'
  },
  mainText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 80
  },
  btnMain: {
    borderWidth: 1,
    borderColor: '#68BF71',
    paddingHorizontal: 40,
    paddingVertical: 16,
    width: 300,
    alignSelf: 'center'
  },
  btnText: {
    color: '#68BF71',
    textAlign: 'center',
    fontSize: 20,
  }
});

export default ProblemA;