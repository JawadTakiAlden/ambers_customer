import CounterCard from "@/components/CounterCard";
import CustomScreen from "@/components/CustomScreen";
import SectionHeader from "@/components/SectionStyle";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  // const swiperRef = useRef<Swiper>(null);
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <CustomScreen className="px-2 py-3  w-full">
      <ScrollView className="flex flex-col flex-1 gap-5">
        <SectionHeader className="text-gray-950 dark:text-gray-50 text-[20px]">
          Welcome Back mr jawad
        </SectionHeader>
        {/* <HomeNews /> */}
        <View className="gap-4">
          <SectionHeader>My Counters</SectionHeader>

          <View className="flex flex-row w-full flex-wrap gap-2">
            <View className=" basis-[40%] flex-1 max-w-[50%]">
              <CounterCard />
            </View>
            <View className=" basis-[40%] flex-1 max-w-[50%]">
              <CounterCard />
            </View>
            <View className=" basis-[40%] flex-1 max-w-[50%]">
              <CounterCard />
            </View>
            <View className=" basis-[40%] flex-1 max-w-[50%]">
              <CounterCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
