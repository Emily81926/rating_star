import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import HalfStar from "./HalfStar";

interface StarProps {
  rating: number;
  readOnly?: boolean;
  onChange?: (rating: number) => void;
  size?: number;
}

export default function RatingStar({
  rating,
  onChange,
  readOnly = true,
  size = 24
}: StarProps) {
  const [options, setOptions] = useState<number[]>([]);

  console.log("🚀 ~ file: RatingStar.tsx:17 ~ options:", options);

  useEffect(() => {
    setOptions(createOptions(rating));
  }, [rating]);

  function createOptions(rating: number): number[] {
    let remain = rating;

    return new Array(5).fill(undefined).map((_, index) => {
      console.log(index, remain);

      if (remain <= 0) {
        return 0;
      }

      remain -= 1;

      if (remain >= 0) {
        return 1;
      }

      return 0.5;
    });
  }

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
              <Pressable
                key={index}
                onPress={
                  readOnly
                    ? undefined
                    : () => {
                        if (onChange) {
                          onChange(index + 1);
                        }
                      }
                }
              >
                <HalfStar
                  style={styles.star}
                  isEmpty={value === 0}
                  width = {size}
                  height={size}
                  // isHalf={value === 0.5}
                />
              </Pressable>
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
