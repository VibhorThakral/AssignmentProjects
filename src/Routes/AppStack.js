import React from 'react';
import HomeScreen from '../components/HomeScreen';
import LoginScreen from '../components/LoginScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

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

const AppStack = () => {
  return(
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen 
        options={{headerTitle: 'Sign In'}} 
        name={"Login"} 
        component={Login} />
      <Stack.Screen
        options={
          ({ route }) => ({title: route.params.input})
         } 
        name={"Home"} 
        component={Home} />
    </Stack.Navigator>
  );
}

export default AppStack;

