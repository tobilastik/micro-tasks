import { StyleSheet } from "react-native";
import { deepgreen, gray, green, lightgreen, red, white } from "../../constants/colors";

export const styles = StyleSheet.create({
  recorderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.7,
  },
  container: {
    backgroundColor: lightgreen,
    width: 230,
    height: 230,
    borderRadius: 115,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerContainer: {
    backgroundColor: green,
    width: 210,
    height: 210,
    borderRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: deepgreen,
    width: 190,
    height: 190,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordTime: {
    fontSize: 18,
    color: white,
    fontWeight: 'bold',
  },
  bottomItems: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  roundedCircle: {
    backgroundColor: red,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
  },
  recordText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  tryAgain: {
    fontSize: 15,
    fontWeight: '500',
    paddingVertical: 6,
    color: gray,
  },
});
