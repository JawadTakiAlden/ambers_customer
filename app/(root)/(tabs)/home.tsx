import CounterCard from "@/components/CounterCard";
import CustomScreen from "@/components/CustomScreen";
import SectionHeader from "@/components/SectionStyle";
import { counters } from "@/mock/counters";
import { router } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  // const swiperRef = useRef<Swiper>(null);
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <CustomScreen className="px-2 py-3  w-full">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={counters}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => {
          return <View className="h-3" />;
        }}
        columnWrapperStyle={{
          gap: 10,
        }}
        ListHeaderComponent={() => {
          return (
            <View>
              <SectionHeader className="mb-3">
                Welcome Back Jawad Taki Aldeen
              </SectionHeader>
              <SectionHeader>My Counters</SectionHeader>
            </View>
          );
        }}
        numColumns={2}
        ListEmptyComponent={() => {
          return (
            <View className="h-[300px] flex items-center justify-center">
              <Text className="text-gray-950 dark:text-gray-50 font-Popions-Bold capitalize text-center">
                You are dont have any counters yet
              </Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View className="basis-[40%] flex-1 max-w-[50%]">
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  router.push({
                    pathname: "/(root)/[counterId]",
                    params: { counterId: item.id },
                  });
                }}
              >
                <CounterCard counter={item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </CustomScreen>
  );
};

export default HomeScreen;
