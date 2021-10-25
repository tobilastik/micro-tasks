import React, {ReactChild} from 'react';
import {View} from 'react-native';

interface FlexProps {
  children: React.ReactNode;
  direction?: string;
  align?: string;
  justify?: string;
  flex?: number;
  style?: any;
}

//custom component for major views
const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  align = 'center',
  justify,
  flex,
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flex,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Flex;
