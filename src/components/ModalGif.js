import React, {Component} from 'react';
import {Modal, StyleSheet, View, Image} from 'react-native';
import {ImgGif} from '../assets/index';

class ModalGif extends Component {
  render() {
    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <Image style={styles.imageResize} source={ImgGif} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  imageResize: {
    width: 150,
    height: 150,
  },
});

export default ModalGif;
