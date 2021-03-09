import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';
import {UpDown, Filter} from '../assets/index';

const TopBar = () => {

  const FilterCategories = [
    'Polo Shirts', 'Dress Shirts', 'Shorts', 'T-Shirts', 'Suits', 'Pants', 'Men Shoes'
  ]

  return(
    <>
    <View style={styles.topBarMain}>
      <View style={styles.marginH}>
        <View style={styles.topBarT}>
          <View>
            <Text style={styles.ItemQuantity}>195 Items</Text>
          </View>

          <View style={styles.iconsBar}>
            <TouchableOpacity style={styles.TouchableOpacity}>
              <Image style={styles.Image} source={UpDown}/>
              <Text style={styles.ImageText}>Sort</Text>
            </TouchableOpacity>
            <View style={styles.borderR}></View>
            <TouchableOpacity style={styles.TouchableOpacity}>
              <Image style={styles.Image} source={Filter}/>
              <Text style={styles.ImageText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> 
    </View>
    
    <View style={styles.marginH}>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          FilterCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <Text style={styles.categoryItemText}>{category}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  topBarMain: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10
  },
  marginH: {
    marginHorizontal: 15,
  }, 
  topBarT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
  },
  iconsBar: {
    flexDirection: 'row',
  },
  ItemQuantity: {
    fontSize: 16,
    color: '#444',
  },
  TouchableOpacity: {
    flexDirection: 'row',
  },
  Image: {
    height: 20,
    width: 20
  },
  ImageText: {
    textTransform: 'uppercase',
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#444'
  },
  categoryItem : {
    paddingHorizontal: 15,
    paddingVertical: 10, 
    backgroundColor: '#eaeaea',
    marginRight: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  categoryItemText: {
    fontSize: 15,
    fontWeight: '500'
  },
  borderR: {
    borderRightWidth: 1,
    borderRightColor: '#444',
    marginHorizontal: 10
  }
})

export default TopBar;