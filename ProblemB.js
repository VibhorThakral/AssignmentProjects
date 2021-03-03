import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

class ProblemB extends Component {
  state={
    mainBackground: 'rgb(255,255,255)',
    input: '#fff'
  }

  hextorgb = () => {
    let h = this.state.input;
    let r = 0, g = 0, b = 0;
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    let rgb = `rgb(${(+r)},${+g}, ${+b})`;
    if(h.length === 4 || h.length === 7) {
      this.setState({
        mainBackground: rgb
      }); 
    } else {
      console.warn('Incorrect Hex Code');
    }
  }

  render() {
    return(
      <SafeAreaView style={[styles.container, {backgroundColor: this.state.mainBackground}]}>
        <View style={styles.mainView}>  
          <Text style={styles.resultText}>RGB Code: {this.state.mainBackground}</Text>
          <TextInput 
            style={styles.inputBox}
            placeholder="Enter The Hex Code"
            onChangeText = {
              (value) => this.setState({input: value})
            }
          />
          <TouchableOpacity
            onPress={this.hextorgb}
            style={styles.btnMain}
          >
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5
  },
  inputBox: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  btnMain: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 14
  },
  resultText: {
    fontSize: 18
  }
});

export default ProblemB;