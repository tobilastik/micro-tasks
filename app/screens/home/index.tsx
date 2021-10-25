import * as React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import TaskLists from '../../components/Lists/TaskLists';
import {DATA} from '../../data';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';

interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView testID="welcomePage" style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, Dave</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TaskLists testID="tasks" navigation={navigation} {...{item}} />
        )}
        testID={'taskList'}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;
