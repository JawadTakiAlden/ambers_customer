import Button from "@/components/Button";
import { allColors, AppColors, themeColors, themes } from "@/utils/color-theme";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  clamp,
  FadeIn,
  FadeOut,
  interpolate,
  interpolateColor,
  runOnJS,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const colors = Object.keys(allColors) as AppColors[];

const { width } = Dimensions.get("screen");

const _itemSize = width * 0.24;
const _spacing = 12;
const _itemTotalSize = _itemSize + _spacing;

const CarouselColorItem = ({
  index,
  color,
  scrollX,
}: {
  index: number;
  color: string;
  scrollX: SharedValue<number>;
}) => {
  const styles = useAnimatedStyle(() => {
    return {
      borderWidth: 4,
      borderColor: interpolateColor(
        scrollX.value,
        [index - 1, index, index + 1],
        ["transparent", "white", "transparent"]
      ),
      transform: [
        {
          translateY: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [_itemSize / 3, 0, _itemSize / 3]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        styles,
        {
          width: _itemSize,
          height: _itemSize,
          borderRadius: _itemSize / 2,
          backgroundColor: color,
        },
      ]}
    />
  );
};

const ColorCarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { colorScheme } = useColorScheme();

  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = clamp(
      e.contentOffset.x / _itemTotalSize,
      0,
      colors.length - 1
    );
    const newActiveIndex = Math.round(scrollX.value);
    if (activeIndex !== newActiveIndex) {
      runOnJS(setActiveIndex)(newActiveIndex);
    }
  });

  console.log(colors[activeIndex]);
  return (
    <View className="flex-1 justify-end">
      <View style={[StyleSheet.absoluteFillObject]}>
        <Animated.View
          key={`color-${activeIndex}`}
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: themeColors(colorScheme!, colors[activeIndex])[
              "--background"
            ],
          }}
        >
          <View
            key={`dark-${activeIndex}`}
            style={themes(colors[activeIndex])["dark"]}
          >
            <View className="bg-background rounded-2xl p-3 gap-2">
              <Text className="text-gray-950 dark:text-gray-50">
                I am in dark mode
              </Text>
              <Button>I am Dark</Button>
            </View>
          </View>
          <View
            key={`light-${activeIndex}`}
            style={themes(colors[activeIndex])["light"]}
          >
            <View className="bg-background rounded-2xl p-3 gap-2">
              <Text className="text-gray-950 dark:text-gray-50">
                I am in light mode
              </Text>
              <Button>I am Light</Button>
            </View>
          </View>
        </Animated.View>
      </View>
      <Animated.FlatList
        data={colors}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _itemSize) / 2,
        }}
        renderItem={({ item, index }) => {
          return (
            <CarouselColorItem
              index={index}
              color={themeColors(colorScheme!, item)["--primary-500"]}
              scrollX={scrollX}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 0,
          height: _itemSize * 2,
        }}
        onScroll={onScroll}
        scrollEventThrottle={1000 / 60}
        snapToInterval={_itemTotalSize}
        decelerationRate={"fast"}
      />
    </View>
  );
};

const appColors = () => {
  return (
    <View className="flex-1">
      <ColorCarouselSlider />
    </View>
  );
};

export default appColors;

const styles = StyleSheet.create({});
