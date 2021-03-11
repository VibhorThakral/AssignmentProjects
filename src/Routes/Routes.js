import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import ClipboardContentView from '../components/ClipboardContentView';

const Stack = createStackNavigator();

class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen
            options={{headerTitle: 'Home'}}
            name={'Home'}
            component={Home}
          />
          <Stack.Screen
            options={{headerTitle: 'Clipboard Content View'}}
            name={'ClipboardContentView'}
            component={ClipboardContentView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
