import { themeColors } from "@/utils/color-theme";
import {
  Circle,
  Image,
  Shadow,
  SkiaProps,
  TwoPointConicalGradient,
  TwoPointConicalGradientProps,
  useImage,
  vec,
} from "@shopify/react-native-skia";
import { useColorScheme } from "nativewind";
import React from "react";

type WelcomeCardImage = {
  image: string;
  r: number;
  shaddowColor?: string;
  shadowBlur?: number;
  shadowX?: number;
  shadowY?: number;
  borderWidth?: number;
  imageBackground?: string;
  colors?: SkiaProps<TwoPointConicalGradientProps>["colors"];
};

const WelcomeCardImage = ({
  r,
  imageBackground = "white",
  shaddowColor = "#fff",
  shadowBlur = 15,
  shadowX = -10,
  shadowY = -8,
  borderWidth = 1,
  image,
  colors = ["#fff", "#555"],
}: WelcomeCardImage) => {
  const onBoardImage = useImage(image);
  const { colorScheme } = useColorScheme();
  imageBackground = themeColors(colorScheme!)["--background"];

  return (
    <Circle cx={r} cy={r} r={r} color="white">
      <Shadow
        dx={shadowX}
        dy={shadowY}
        blur={shadowBlur}
        color={shaddowColor}
        inner
      />
      <Circle r={r} cx={r} cy={r}>
        <TwoPointConicalGradient
          start={vec(r / 2, r / 2)}
          startR={r}
          end={vec(r - 50, r - 50)}
          endR={r / 2}
          colors={colors}
        />
        <Circle r={r - borderWidth} cx={r} cy={r} color={imageBackground}>
          <Image
            image={onBoardImage}
            fit="cover"
            x={r / 2}
            y={r / 2}
            width={r}
            height={r}
          />
        </Circle>
      </Circle>
    </Circle>
  );
};

export default WelcomeCardImage;
