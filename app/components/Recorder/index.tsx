import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import Flex from '../Layout/Flex';
import realm from '../../database/audioSchema';
import {styles} from './styles';

const audioRecorderPlayer = new AudioRecorderPlayer();

interface RecorderProps {
  prev: string[];
}

const Recorder = ({prev}: RecorderProps) => {
  const [recordTime, setRecordTime] = React.useState<string>('0:00:00');
  const [record, setRecord] = React.useState<boolean>(true);
  const [recording, setRecording] = React.useState<boolean>(false);
  const [stopRecording, setStopRecording] = React.useState<boolean>(false);
  const [startPlaying, setStartPlaying] = React.useState<boolean>(false);
  const [pauseRecording, setPauseRecording] = React.useState<boolean>(false);
  const [pauseAudio, setPauseAudio] = React.useState<boolean>(false);

  React.useEffect(() => {
    return () => {
      audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      audioRecorderPlayer.removePlayBackListener();
      audioRecorderPlayer.stopPlayer();
    };
  }, []);

  const onStartRecording = async () => {
    setStartPlaying(false);
    setPauseRecording(false);
    try {
      const audioSet: AudioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
      };
      const result = await audioRecorderPlayer.startRecorder(
        undefined,
        audioSet,
      );
      setRecording(true);
      setRecord(true);
      audioRecorderPlayer.addRecordBackListener(e => {
        setRecordTime(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        );
        return;
      });
      realm.write(() => {
        realm.create('AudioRecording', {uri: result});
      });
      // }
    } catch (err) {
      console.log('recording', err);
    }
  };

  const onStopRecording = async () => {
    try {
      await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setRecordTime('0:00:00');
      setStopRecording(true);
      setRecord(false);
    } catch (error) {
      console.log('stop recording', error);
    }
  };

  const onPauseRecording = async () => {
    try {
      setPauseRecording(true);
      await audioRecorderPlayer.pauseRecorder();
    } catch (error) {
      console.log('pauseRecord', error);
    }
  };

  const onResumeRecording = async () => {
    setPauseRecording(false);
    await audioRecorderPlayer.resumeRecorder();
  };

  const onStartPlay = async () => {
    setStartPlaying(true);
    await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.setVolume(1.0);
    audioRecorderPlayer.addPlayBackListener(e => {
      if (e.currentPosition === e.duration) {
        audioRecorderPlayer.stopPlayer();
      }
    });
    setPauseAudio(true);
  };

  const onPauseAudio = async () => {
    setPauseAudio(false);
    audioRecorderPlayer.pausePlayer();
  };
  const onResumeAudio = async () => {
    setPauseAudio(true);
    audioRecorderPlayer.resumePlayer();
  };

  const renderButtons = () => {
    if (record) {
      if (recording) {
        return (
          <Flex>
            {pauseRecording ? (
              <TouchableOpacity
                onPress={onResumeRecording}
                style={styles.roundedCircle}>
                <Feather name="play-circle" size={24} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onPauseRecording}
                style={styles.roundedCircle}>
                <Feather name="pause-circle" size={24} color="white" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              testID="stopRecording"
              onPress={onStopRecording}
              style={styles.roundedCircle}>
              <Feather name="stop-circle" size={24} color="white" />
            </TouchableOpacity>
          </Flex>
        );
      } else {
        return (
          <Flex>
            {prev.length > 0 && (
              <TouchableOpacity
                onPress={onStartPlay}
                style={styles.roundedCircle}>
                <Feather name="play-circle" size={24} color="white" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              testID="startRecording"
              onPress={onStartRecording}
              style={styles.roundedCircle}>
              <Feather name="mic" size={24} color="white" />
            </TouchableOpacity>
          </Flex>
        );
      }
    } else {
      if (stopRecording) {
        if (!startPlaying) {
          return (
            <TouchableOpacity
              testID="playRecording"
              onPress={onStartPlay}
              style={styles.roundedCircle}>
              <Feather name="play-circle" size={24} color="white" />
            </TouchableOpacity>
          );
        } else {
          return (
            <Flex>
              {pauseAudio ? (
                <TouchableOpacity
                  onPress={onPauseAudio}
                  style={styles.roundedCircle}>
                  <Feather name="pause-circle" size={24} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={onResumeAudio}
                  style={styles.roundedCircle}>
                  <Feather name="play-circle" size={24} color="white" />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={onStartRecording}
                style={styles.roundedCircle}>
                <Feather name="mic" size={24} color="white" />
              </TouchableOpacity>
            </Flex>
          );
        }
      }
    }
  };

  return (
    <>
      <View style={[styles.recorderContainer]}>
        <View style={styles.container}>
          <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
              <Text style={styles.recordTime}>{recordTime}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomItems}>
        <Text style={styles.recordText}>Hit the record button to start!</Text>
        {renderButtons()}
        <Text style={styles.tryAgain}>
          Don't worry, you can try again later
        </Text>
      </View>
    </>
  );
};

export default Recorder;
