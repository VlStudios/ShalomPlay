import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from './screens/Preload';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
 
const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown:false
      }}
      >
        <AppStack.Screen name="Preload" component={Preload}/>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
        <AppStack.Screen name= "Login" component={LoginScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
