import CustomScreen from "@/components/CustomScreen";
import Background from "@/components/WelcomeScreen/Background";
import WelcomeCardImage from "@/components/WelcomeScreen/WelcomeCardImage";
import { obboarding } from "@/constants";
import { themeColors } from "@/utils/color-theme";
import {
  Canvas,
  Group,
  Mask,
  RadialGradient,
  RoundedRect,
} from "@shopify/react-native-skia";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";

const { height: WindowHeight, width: WindowWidth } = Dimensions.get("window");

const OnboardingScreen = () => {
  const swiperRef = useRef<Swiper>(null);
  const { colorScheme } = useColorScheme();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <CustomScreen>
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => {
          router.replace("/(auth)/register");
        }}
      >
        <Text className="text-gray-300">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        showsPagination={false}
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {obboarding.map((onboard, i) => {
          return (
            <View key={i} className="flex-1 pb-[150px] justify-end">
              <Background
                key={i}
                radiaalGradientProps={{
                  c: { x: WindowWidth, y: WindowHeight / 2 },
                  r: WindowWidth / 1.5,
                  colors: [
                    onboard.backgroundColor,
                    themeColors(colorScheme!)["--background"],
                  ],
                }}
                rectWidth={WindowWidth}
                rectHeight={WindowHeight}
              >
                <Group
                  transform={[
                    {
                      translateX: WindowWidth / 2 - 150,
                    },
                    {
                      translateY: 100,
                    },
                  ]}
                >
                  <WelcomeCardImage
                    r={150}
                    image={onboard.image}
                    colors={[onboard.borderFirstColor, onboard.borderEndColor]}
                    shaddowColor={onboard.shadowColor}
                  />
                </Group>
              </Background>
              <View className="w-full items-center gap-5">
                <Text className="text-gray-950 dark:text-gray-50 text-[24px] text-center font-Popions-Bold capitalize">
                  {onboard.title}
                </Text>
                <Text className="text-gray-800 dark:text-gray-200 text-center text-[16px] font-Popions-Regular capitalize">
                  {onboard.description}
                </Text>
                <TouchableOpacity
                  className="h-[45px] flex items-center justify-center"
                  style={{
                    width: WindowWidth / 2,
                  }}
                  activeOpacity={0.8}
                  onPress={() => {
                    if (activeIndex === obboarding.length - 1) {
                      router.replace("/(auth)/start");
                    }
                    swiperRef.current?.scrollBy(1);
                  }}
                >
                  <Canvas
                    style={{
                      height: 45,
                      width: WindowWidth / 2,
                      borderRadius: 10,
                      position: "absolute",
                    }}
                  >
                    <Mask
                      mode="luminance"
                      mask={
                        <Group>
                          {/* Outer shape: visible */}
                          <RoundedRect
                            x={0}
                            y={0}
                            width={WindowWidth / 2}
                            height={45}
                            r={30}
                            color="white"
                          />
                          {/* Inner shape: cut out */}
                          <RoundedRect
                            x={2}
                            y={2}
                            width={WindowWidth / 2 - 2 * 2}
                            height={45 - 2 * 2}
                            r={30 - 2}
                            color="black"
                          />
                        </Group>
                      }
                    >
                      <RoundedRect
                        x={0}
                        y={0}
                        width={WindowWidth / 2}
                        height={45}
                        r={30}
                      >
                        <RadialGradient
                          r={WindowWidth / 2}
                          c={{ x: 0, y: 0 }}
                          colors={[
                            onboard.borderEndColor,
                            onboard.borderFirstColor,
                          ]}
                        />
                      </RoundedRect>
                    </Mask>
                  </Canvas>
                  <Text className="text-gray-950 dark:text-gray-50 text-[16px] font-Popions-Regular">
                    {activeIndex === 0
                      ? "Start"
                      : activeIndex === obboarding.length - 1
                      ? "Finsih"
                      : "Next"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </Swiper>
    </CustomScreen>
  );
};

export default OnboardingScreen;
