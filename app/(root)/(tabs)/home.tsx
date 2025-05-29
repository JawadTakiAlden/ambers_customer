import CounterCard from "@/components/CounterCard";
import CustomScreen from "@/components/CustomScreen";
import SectionHeader from "@/components/SectionStyle";
import { counters } from "@/mock/counters";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  // const swiperRef = useRef<Swiper>(null);
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <CustomScreen className="px-2 py-3  w-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex flex-col flex-1 gap-5"
      >
        <SectionHeader className="text-gray-950 dark:text-gray-50 text-[20px]">
          Welcome Back mr jawad
        </SectionHeader>
        {/* <HomeNews /> */}
        <View className="gap-4">
          <SectionHeader>My Counters</SectionHeader>

          <View className="flex flex-row w-full flex-wrap gap-6">
            {counters.map((counter, index) => (
              <View key={index} className="basis-[40%] flex-1 max-w-[50%]">
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    router.push({
                      pathname: "/(root)/[counterId]",
                      params: { counterId: counter.id },
                    });
                  }}
                >
                  <CounterCard counter={counter} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </CustomScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
