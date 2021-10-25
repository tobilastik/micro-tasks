import {StyleSheet} from 'react-native';
import {primaryColor, softPurple} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 14,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 5,
    borderRadius: 5,
    backgroundColor: softPurple,
    marginHorizontal: 2,
  },
});
