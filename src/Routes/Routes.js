import React, {useEffect, useState} from 'react';
import AppTabs from './AppTabs';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native'

export const Routes = ({}) => {
  const isTabs = true;

  return(
    <NavigationContainer>
      {!isTabs ? <AppStack /> : <AppTabs />}
    </NavigationContainer>
  )
}