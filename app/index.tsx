import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
  return <Redirect href={"/(auth)/welcome"} />;
  // return <SafeAreaView className="bg-gray-950 flex-1"></SafeAreaView>;
};

export default Home;
