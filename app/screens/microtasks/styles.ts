import { StyleSheet } from "react-native";
import { gray, red } from "../../constants/colors";
import { screenHeight, screenWidth } from "../../constants/dimensions";

export const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'black',
    },
    picture: {
      width: screenWidth(100),
      height: screenHeight(100),
      overflow: 'hidden',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,
      height: undefined,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  titleContainer: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
 

});