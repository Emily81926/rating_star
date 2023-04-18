import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Star() {
  const starRatingOptions = [1, 2, 3, 4, 5];

  const [starRating, setStarRating] = useState<number | null>(null);

  const animatedButtonScales = starRatingOptions.map(
    () => new Animated.Value(1)
  );

  const handlePressIn = (index: number) => {
    Animated.spring(animatedButtonScales[index], {
      toValue: 1.5,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = (index: number) => {
    Animated.spring(animatedButtonScales[index], {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          {starRating ? `${starRating}*` : "Tap to rate"}
        </Text>
        <View style={styles.stars}>
          {starRatingOptions.map((option, index) => {
            const animatedScaleStyle = {
              transform: [{ scale: animatedButtonScales[index] }],
            };

            return (
              <TouchableWithoutFeedback
                onPressIn={() => handlePressIn(index)}
                onPressOut={() => handlePressOut(index)}
                onPress={() => setStarRating(option)}
                key={option}
              >
                <Animated.View style={animatedScaleStyle}>
                  <MaterialIcons
                    name="star"
                    size={32}
                    style={
                      (starRating ?? 0) >= option
                        ? styles.starSelected
                        : styles.starUnselected
                    }
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
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
  starUnselected: {
    color: "#E8E8E8",
  },
  starSelected: {
    color: "#000000",
  },
});