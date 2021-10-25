import React, {FunctionComponent} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from './hometabs';
import MicroTasks from '../screens/microtasks';
import Record from '../screens/microtasks/Record';

type RootStackParam = {
  Home: undefined;
  MicroTasks: undefined;
  Record: undefined;
};

const DashboardStack = () => {
  const Stack = createNativeStackNavigator<RootStackParam>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={() => ({
          title: '',
          headerShown: false,
        })}
        component={HomeTabs}
      />
      <Stack.Screen
        name="MicroTasks"
        options={() => ({
          title: '',
          headerShown: false,
        })}
        component={MicroTasks}
      />
      <Stack.Screen
        name="Record"
        options={() => ({
          title: '',
          headerShown: false,
        })}
        component={Record}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
