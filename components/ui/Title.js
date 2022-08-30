import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fae125",
    textAlign: "center",
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
