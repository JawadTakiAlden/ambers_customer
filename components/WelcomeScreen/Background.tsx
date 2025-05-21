import {
  Blur,
  Canvas,
  CanvasProps,
  RadialGradient,
  RadialGradientProps,
  Rect,
  SkiaProps,
} from "@shopify/react-native-skia";
import React from "react";
import { StyleSheet } from "react-native";

type BackgroundProps = {
  rectWidth: number;
  rectHeight: number;
  radiaalGradientProps: SkiaProps<RadialGradientProps>;
  blurValue?: number;
} & CanvasProps;
const Background = ({
  radiaalGradientProps,
  style,
  blurValue = 150,
  rectHeight,
  rectWidth,
  children,
  ...rest
}: BackgroundProps) => {
  return (
    <Canvas
      {...rest}
      style={[
        {
          flex: 1,
          position: "absolute",
          left: 0,
          top: 0,
          height: rectHeight,
          width: rectWidth,
        },
        style,
      ]}
    >
      <Rect x={0} y={0} width={rectWidth} height={rectHeight}>
        <RadialGradient {...radiaalGradientProps} />
        <Blur blur={blurValue} />
      </Rect>
      {children}
    </Canvas>
  );
};

export default Background;

const styles = StyleSheet.create({});
