import React, {Component} from 'react';
import {
  View,
  Text,
  BackHandler,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TextInput,
  StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

class Home extends Component {
  constructor({props, navigation}) {
    super(props);
    this.navigation = navigation;
    this.state = {
      inputText: '',
    };
  }

  backAction = () => {
    Alert.alert('Confirm Exit', 'Are you sure you want to exit the app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => BackHandler.exitApp(),
        style: 'destructive',
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  writeToClipboard = async () => {
    Clipboard.setString(this.state.inputText);
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Text style={styles.headText}>Add Content to Copy to Clipboard</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter Text'}
            onChangeText={(value) => this.setState({inputText: value})}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => {
              this.writeToClipboard();
              this.navigation.navigate('ClipboardContentView');
            }}>
            <Text style={styles.btnText}>Save Content</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  textInput: {
    width: 200,
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
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
});

export default Home;
