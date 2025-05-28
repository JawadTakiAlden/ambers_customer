import React, { ReactNode, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const CollapsableContainer = ({
  children,
  expanded,
}: {
  expanded: boolean;
  children: ReactNode;
}) => {
  const [height, setHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded
      ? withTiming(height, {
          duration: 100,
        })
      : withTiming(0);

    return {
      height: animatedHeight.value,
    };
  }, [expanded, height]);
  return (
    <Animated.View style={[collapsableStyle, { overflow: "hidden" }]}>
      <View style={{ position: "absolute", left: 0 }} onLayout={onLayout}>
        {children}
      </View>
    </Animated.View>
  );
};

export default CollapsableContainer;

const styles = StyleSheet.create({});
