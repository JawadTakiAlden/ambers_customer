import CustomScreen from "@/components/CustomScreen";
import ChangePassword from "@/components/Profile/ChangePassword";
import UpdateProfile from "@/components/Profile/UpdateProfile";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ProfileScreen = () => {
  return (
    <KeyboardAvoidingView
      className="h-full bg-background px-2"
      behavior="padding"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomScreen>
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
              <UpdateProfile />
              <ChangePassword />
            </View>
          </CustomScreen>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;
