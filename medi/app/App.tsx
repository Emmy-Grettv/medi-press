import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '@/pages/Notifications';
import { Home } from '@/pages/Home';
import NoNotifications from '@/pages/NoNotifications';
import OnBoarding from '@/pages/Onboarding';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoNotifications"
          component={NoNotifications}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
});
