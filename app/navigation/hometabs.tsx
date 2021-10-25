import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home';
import {blue} from '../constants/colors';

type DashboardTabsParams = {
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<DashboardTabsParams>();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'md-pie-chart-outline';
          }
          return <Ionicons name={String(iconName)} size={size} color={blue} />;
        },
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="HomeScreen" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
