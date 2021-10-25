import * as React from 'react';
import {View, Image, FlatList} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Header from '../../components/Header';
import {screenWidth} from '../../constants/dimensions';
import video from '../../constants/video';
import {microtasks} from '../../data';
import {styles} from './styles';
import {NavigationProp} from '@react-navigation/core';
import {ParamListBase} from '@react-navigation/routers';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

interface MicroTasksProps {
  navigation: NavigationProp<ParamListBase>;
}

const MicroTasks = ({navigation}: MicroTasksProps) => {
  const {getItem, setItem} = useAsyncStorage('@currentProgress');
  const [userProgess, setUserProgress] = React.useState(0);

  React.useEffect(() => {
    readProgessFromStorage();
  }, []);

  const readProgessFromStorage = async () => {
    const item: any = await getItem();
    setUserProgress(item);
  };

  const onEnd = () => {
    navigation.navigate('Record');
  };
  const onScrollToIndexFailed = () => {
    // console.log('index does not exist');
  };
  const onViewableItemsChanged = React.useCallback(({viewableItems}) => {
    setItem(JSON.stringify(viewableItems.map(item => item.index)[0]));
  }, []);

  return (
    <View testID="tasksScreen" style={styles.container}>
      <FlatList
        initialScrollIndex={userProgess}
        onScrollToIndexFailed={onScrollToIndexFailed}
        snapToInterval={screenWidth(100)}
        decelerationRate="fast"
        horizontal
        data={microtasks}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        renderItem={({item}) => {
          return (
            <View
              testID={'microtasks'}
              key={item.source.toString()}
              style={styles.picture}>
              {item.type == 'image' ? (
                <>
                  <Image style={styles.image} source={item.source} />
                  <Header navigation={navigation} />
                </>
              ) : (
                <VideoPlayer
                  testID="video"
                  tapAnywhereToPause
                  onBack={() => navigation.goBack()}
                  style={styles.backgroundVideo}
                  source={video.meditation}
                  onEnd={onEnd}
                  paused={true}
                />
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default MicroTasks;
