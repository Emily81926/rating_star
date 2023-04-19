import { StyleSheet, View } from "react-native";
import Star from "./Star";
import RatingStar from "./RatingStar";
import { useState } from "react";

export default function App() {
  const [rating, setRating] = useState(3);

  console.log("🚀 ~ file: App.tsx:9 ~ App ~ rating:", rating);

  return (
    <View style={styles.container}>
      <Star />
      {/* for info.tsx */}
      <RatingStar rating={2.1} size={16} />
      {/* for ReviewCard.tsx */}
      <RatingStar rating={3} size={16} />
      {/* for rating selector.tsx */}
      <RatingStar rating={rating} readOnly={false} onChange={setRating} size={30} />
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
