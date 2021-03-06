import React from 'react';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

function Login({navigation}) {
  return(
    <LoginScreen navigation={navigation}/>
  );
}

function Home({navigation, route}) {
  return(
    <HomeScreen navigation={navigation} route={route}/>
  );
}

const AppTabs = () => {
  return(
    <Tabs.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 20}
      }} 
      initialRouteName={'Login'}>
      <Tabs.Screen 
        options={{headerTitle: 'Sign In'}} 
        name={"Login"} 
        component={Login} />
      <Tabs.Screen
        name={"Home"} 
        component={Home} />
    </Tabs.Navigator>
  )
}

export default AppTabs;