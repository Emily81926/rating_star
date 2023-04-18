import * as React from "react";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
} from "react-native-svg";


interface HalfStarProps extends SvgProps {
  isEmpty: boolean;
  isHalf?: boolean;
  color?: string;
  backgroundColor?: string;
}

const HalfStar = (props: HalfStarProps) => {
  const {
    isEmpty = false,
    isHalf = false,
    color = "#000000",
    backgroundColor = "#E8E8E8",
  } = props;

  const starFilledColor = isEmpty ? backgroundColor : color;
  const halfStarFilledColor = isEmpty
    ? backgroundColor
    : isHalf
    ? backgroundColor
    : color;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Defs>
        <LinearGradient id="a">
          <Stop offset="0%" stopColor={starFilledColor} />
          <Stop offset="50%" stopColor={starFilledColor} />
          <Stop offset="50%" stopColor={halfStarFilledColor} />
          <Stop offset="100%" stopColor={halfStarFilledColor} />
        </LinearGradient>
      </Defs>
      <G fill="url(#a)" stroke="none" strokeWidth={2}>
        <Path d="M12 2l-3.547 7.192-7.953.846 5.744 5.238-1.361 7.724L12 18.013l6.117 3.987-1.361-7.724 5.744-5.238-7.953-.846z" />
      </G>
    </Svg>
  );
};

export default HalfStar;
