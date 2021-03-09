import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Categories, Cart, Wishlist, Account} from '../screens/index';
import {home, cart, Heart, category, Profile, homeActive, cartActive, heartActive, categoryActive, profileActive} from '../assets/index';

const Tabs = createBottomTabNavigator();

const Routes = ({ }) => {
  return (
      <NavigationContainer>
          <Tabs.Navigator
              tabBarOptions={{
                  style: {height: 100},
                  labelStyle: { fontSize: 14 },
                  tabStyle: { marginBottom: 10 },
                  activeTintColor: 'green',
                  inactiveTintColor: 'gray',
                }} 
                initialRouteName={Home}>

              <Tabs.Screen
                  options={{
                      tabBarIcon: ({ focused }) => (
                          focused ?
                              <Image style={styles.image} source={homeActive} />
                              :
                              <Image style={styles.image} source={home} />
                          )
                  }}
                  name="Home"
                  component = {Home}
              />
              <Tabs.Screen
                  options={{
                      tabBarIcon: ({ focused }) => (
                          focused ?
                              <Image style={styles.image} source={categoryActive} />
                              :
                              <Image style={styles.image} source={category} />
                          )
                  }}
                  name = "Categories"
                  component = {Categories}
              />
              <Tabs.Screen
                  options={{
                      tabBarIcon: ({ focused }) => (
                          focused ?
                              <Image style={styles.image} source={cartActive} />
                              :
                              <Image style={styles.image} source={cart} />
                          )
                  }}
                  name = "Cart"
                  component = {Cart}
              />
              <Tabs.Screen
                  options={{
                      tabBarIcon: ({ focused }) => (
                          focused ?
                              <Image style={styles.image} source={heartActive} />
                              :
                              <Image style={styles.image} source={Heart} />
                          )
                  }}
                  name = "Wishlist"
                  component = {Wishlist}
              />
              <Tabs.Screen
                options={{
                  tabBarIcon: ({ focused }) => (
                    focused ?
                        <Image style={styles.image} source={profileActive} />
                        :
                        <Image style={styles.image} source={Profile} />
                    )
                }}
                  name = "Account"
                  component = {Account}
              />
          </Tabs.Navigator>
      </NavigationContainer>
);
}


const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
  },
})

export default Routes;