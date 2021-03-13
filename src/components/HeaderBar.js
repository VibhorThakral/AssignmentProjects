import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {CrossIcon, SearchIcon} from '../assets/index';

class HeaderBar extends Component {
  handleExit = () => {
    Alert.alert('Confirm Exit', 'Are you sure you want to Quit the App?', [
      {
        text: 'Yes',
        onPress: null,
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: null,
        style: 'cancel',
      },
    ]);
  };

  render() {
    return (
      <View style={styles.headerBar}>
        {/* header - top bar */}
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>
            <Text>Store Selected: </Text>
            <Text style={styles.storeLocation}>Coop Molndal Aby</Text>
          </Text>
          <TouchableOpacity onPress={() => this.handleExit()}>
            <Image style={styles.crossIcon} source={CrossIcon} />
          </TouchableOpacity>
        </View>
        {/* header - search bar */}
        <View style={styles.searchBar}>
          <Image style={styles.searchIcon} source={SearchIcon} />
          <TextInput
            selectionColor="gray"
            style={styles.textInput}
            placeholder="Enter Text"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBar: {
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeLocation: {
    fontWeight: 'bold',
  },
  topBarText: {
    color: 'white',
    fontSize: 16,
  },
  crossIcon: {
    width: 20,
    height: 20,
  },
  searchBar: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  textInput: {
    width: '100%',
    fontSize: 16,
  },
});

export default HeaderBar;
