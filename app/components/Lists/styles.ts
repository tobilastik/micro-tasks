import { StyleSheet } from "react-native";
import { gray, lightgray, white} from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
      marginHorizontal: 20,
      paddingVertical: 18,
      borderBottomWidth: 0.5,
      borderBottomColor: lightgray,
      backgroundColor: white
  },
  taskContent: {
      marginLeft: 12,
      width: '90%'
  },
  taskTitle: {
      fontWeight: 'bold',
      fontSize: 13.5
  },
    taskSubtitle: {
     color: gray
  },
  taskImage: {
      width: 50, 
      height: 50,
      marginLeft: 8
    }
});