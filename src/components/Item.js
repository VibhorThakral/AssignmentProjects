import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Heart } from '../assets/index';


const Item = ({image, brand, description, price}) => {
  return(
    <View style={styles.card}>
    <View style={styles.imgView}>
      <Text style={styles.offerText}>New</Text>
      <Image style={styles.image} source={image} />
      <TouchableOpacity style={styles.heart}>
        <Image style={styles.imgHeart} source={Heart} />
      </TouchableOpacity>
    </View>
    <Text style={styles.brandText}>{brand}</Text>
    <Text style={styles.descriptionText}>{description}</Text>
    <Text style={styles.itemPrice}>USD {price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    marginHorizontal: 6,
    marginTop: 10,
    marginBottom: 20
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover'
  },
  brandText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 5
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  imgView: {
    position: 'relative',
    marginBottom: 10
  },
  offerText: {
    position: 'absolute',
    color: 'white',
    backgroundColor: 'green',
    zIndex: 1,
    top: 0,
    left: 0, 
    paddingHorizontal: 10,
    paddingVertical: 5,
    textTransform: 'uppercase',
    fontSize: 12
  },
  heart: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 6,
    top: 10,
    right: 10
  },
  imgHeart: {
    height: 20,
    width: 20,
  }
})

export default Item;