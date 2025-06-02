import Button from "@/components/Button";
import { usePaletteStore } from "@/store/themeStore";
import { allColors, AppColors, themeColors, themes } from "@/utils/color-theme";
import { useColorScheme } from "nativewind";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
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
  const { setPaletteName, paletteName } = usePaletteStore();
  const flatlistRef = useRef<FlatList<AppColors>>(null);

  useEffect(() => {
    const currentActiveIndex = colors.indexOf(paletteName);
    setActiveIndex(currentActiveIndex);
    flatlistRef.current?.scrollToIndex({ index: currentActiveIndex });
  }, []);

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

  return (
    <View className="flex-1 justify-end">
      <View style={StyleSheet.absoluteFillObject}>
        <Animated.View
          key={`color-${activeIndex}`}
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          style={{
            flex: 1,
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: themeColors(colorScheme!, colors[activeIndex])[
              "--background"
            ],
          }}
        >
          <View className="flex flex-row items-stretch justify-center gap-4">
            <View style={themes(colors[activeIndex])["dark"]}>
              <View className="bg-background rounded-2xl p-3 gap-2">
                <Text className="text-gray-50">I am in dark mode</Text>
                <Button
                  className="bg-primary-400"
                  textClassName="!text-primary-950"
                >
                  I am Dark
                </Button>
              </View>
            </View>
            <View style={themes(colors[activeIndex])["light"]}>
              <View className="bg-background rounded-2xl p-3 gap-2">
                <Text className="text-gray-950">I am in light mode</Text>
                <Button
                  className="!bg-primary-600"
                  textClassName="!text-primary-50"
                >
                  I am Light
                </Button>
              </View>
            </View>
          </View>
          <View style={themes(colors[activeIndex])["dark"]}>
            <Button
              onPress={() => {
                setPaletteName(colors[activeIndex]);
              }}
            >
              Save Theme
            </Button>
          </View>
        </Animated.View>
      </View>
      <Animated.FlatList
        ref={flatlistRef}
        data={colors}
        keyExtractor={(_, i) => i.toString()}
        getItemLayout={(_, index) => ({
          length: _itemTotalSize,
          offset: _itemTotalSize * index,
          index,
        })}
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
