import * as React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import Recorder from '../../components/Recorder';
import realm from '../../database/audioSchema';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';

interface RecordProps {
  navigation: NavigationProp<ParamListBase>;
}

const Record = ({navigation}: RecordProps) => {
  const [prevRecording, setPrevRecording] = React.useState([]);

  React.useEffect(() => {
    const tasks = realm.objects('AudioRecording') as any;
    setPrevRecording(tasks);
  }, []);

  return (
    <View testID="recordScreen" style={{flex: 1}}>
      <Header helpIcon navigation={navigation} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          What's your reason for being here? Why now?
        </Text>
      </View>
      <Recorder prev={prevRecording} />
    </View>
  );
};

export default Record;
