import {NavigationProp} from '@react-navigation/core';
import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Flex from '../Layout/Flex';
import {styles} from './styles';
import {ParamListBase} from '@react-navigation/routers';

interface TaskListsProps {
  item: any;
  navigation: NavigationProp<ParamListBase>;
  testID: string;
}

const TaskLists = ({item, navigation, testID}: TaskListsProps) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={() => navigation.navigate('MicroTasks')}>
      <Flex style={styles.container}>
        <Image style={styles.taskImage} source={item.img} />
        <View style={styles.taskContent}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <Text style={styles.taskSubtitle}>{item.subtitle}</Text>
        </View>
      </Flex>
    </TouchableOpacity>
  );
};

export default TaskLists;
