import React from 'react';
import {
  ScrollView, View, StyleSheet
} from 'react-native';
import Item from './Item';

const DATA = [
  {
    image: require('../assets/items/item-1.jpg'),
    brand: 'Armani',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2300
  },
  {
    image: require('../assets/items/item-2.jpg'),
    brand: 'Prada',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2600
  },
  {
    image: require('../assets/items/item-3.jpg'),
    brand: 'Gucci',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2400
  },
  {
    image: require('../assets/items/item-4.jpg'),
    brand: 'Valentino',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 1900
  },
  {
    image: require('../assets/items/item-5.jpg'),
    brand: 'Givenchy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2500
  },
  {
    image: require('../assets/items/item-6.jpg'),
    brand: 'Armani',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 2800
  },
]

const Items = () => {
  return(
    <ScrollView>
      <View style={styles.itemContainer}> 
      {
        DATA.map((item, index) => (
          <Item 
            key={index} 
            image={item.image}
            brand={item.brand}
            description={item.description}
            price={item.price}
          />
        ))
      }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
})

export default Items