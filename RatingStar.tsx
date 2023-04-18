import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HalfStar from "./HalfStar";

interface StarProps {
  rating: number;
}

export default function RatingStar({ rating }: StarProps) {
  let remain = rating;

  const options = new Array(5).fill(undefined).map(() => {
    // console.log(remain);

    if (remain < 0) {
      return 0;
    }

    remain -= 1;

    if (remain > 0) {
      return 1;
    }

    return 0.5;
  });

//   console.log(options);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          {rating ? `${rating}*` : "Rating not available"}
        </Text>
        <View style={styles.stars}>
          {options.map((value, index) => {
            return (
              <HalfStar
                key={index}
                style={styles.star}
                isEmpty={value === 0}
                isHalf={value === 0.5}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    marginRight: 4,
  },
});
