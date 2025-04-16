import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpPage from './screens/HelpPage'; 
import GettingStartedPage from './screens/GettingStartedPage';
import UsingTheApp from './screens/UsingTheApp';
import TrackingProgress from './screens/TrackingProgress';
import AIFeatures from './screens/AIFeatures';
import Settings from './screens/Settings';
import AccountSecurity from './screens/AccountSecurity';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

const loadFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Help" component={HelpPage} />
        <Stack.Screen name="GettingStarted" component={GettingStartedPage} />
        <Stack.Screen name="UsingTheApp" component={UsingTheApp} />
        <Stack.Screen name="TrackingProgress" component={TrackingProgress} />
        <Stack.Screen name="AIFeatures" component={AIFeatures} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AccountSecurity" component={AccountSecurity} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
