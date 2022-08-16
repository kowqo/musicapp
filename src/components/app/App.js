import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash';
import GuidePage from '../../screens/GuidePage';
import Wtf from '../../screens/wtf';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wtf" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GuidePage" component={GuidePage} />
        <Stack.Screen name="Wtf" component={Wtf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
