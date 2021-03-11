import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class ClipboardContentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardText: '',
    };
  }

  getClipboardContent = async () => {
    let content = await Clipboard.getString();
    this.setState({clipboardText: content});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Clipboard Text</Text>
        <Text style={styles.clipText}>{this.state.clipboardText}</Text>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={() => this.getClipboardContent()}>
          <Text style={styles.btnText}>Get Clipboard Content</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'orange',
  },
  TouchableOpacity: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
  clipText: {
    color: '#444',
    fontSize: 18,
    margin: 10,
  },
});

export default ClipboardContentView;
