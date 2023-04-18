import { StyleSheet, View } from "react-native";
import Star from "./Star";
import RatingStar from "./RatingStar";
import HalfStar from "./HalfStar";

export default function App() {
  return (
    <View style={styles.container}>
      <Star />
      <RatingStar rating={3.2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
