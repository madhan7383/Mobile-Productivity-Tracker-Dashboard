import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import DashboardScreen from './src/screens/DashboardScreen';
import TaskScreen from './src/screens/TaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Tasks" component={TaskScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
