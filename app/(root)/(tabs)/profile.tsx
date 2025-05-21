import Button from "@/components/Button";
import CustomScreen from "@/components/CustomScreen";
import OutlinedInput from "@/components/OutlinedInput";
import SectionHeader from "@/components/SectionStyle";
import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <CustomScreen>
      <SafeAreaView className="px-2">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="gap-20">
            <View className="flex items-center justify-center">
              <View className="w-[200px] h-[200px] p-5 border border-gray-100 dark:border-gray-900 rounded-full overflow-hidden">
                <Image
                  source={require("@/assets/images/support.png")}
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </View>
            </View>
            <View>
              <SectionHeader>Update Account</SectionHeader>
              <OutlinedInput readOnly lable="First Name" value="jawad" />
              <OutlinedInput readOnly lable="Last Name" value="taki aldeen" />
              <Button className="w-[200px]">Enable Editing</Button>
            </View>
            <View>
              <SectionHeader>Change Password</SectionHeader>
              <OutlinedInput
                readOnly
                lable="Current Password"
                secureTextEntry
                value="***********"
              />
              <OutlinedInput readOnly lable="New Password" secureTextEntry />
              <OutlinedInput
                readOnly
                lable="Confirm New Password"
                secureTextEntry
              />
              <Button className="w-[300px]">Enable Reset Password</Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </CustomScreen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
