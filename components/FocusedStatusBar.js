import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} style="light"/> : null;
};

export default FocusedStatusBar;
