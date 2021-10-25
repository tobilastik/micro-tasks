import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Flex from '../Layout/Flex';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {blue} from '../../constants/colors';
import {NavigationProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';

interface HeaderProps {
  navigation: NavigationProp<ParamListBase>;
  helpIcon?: boolean;
}

//custom header for the details page
const Header = ({navigation, helpIcon}: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Flex justify="space-between">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color={blue} />
        </TouchableOpacity>
        {helpIcon && <Feather name="help-circle" size={30} color={blue} />}
      </Flex>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});
