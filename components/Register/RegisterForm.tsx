import React from "react";
import { View } from "react-native";
import Button from "../Button";
import OutlinedInput from "../OutlinedInput";

const RegisterForm = () => {
  return (
    <View className="gap-1">
      <OutlinedInput
        lable="Email"
        placeholder="joe@example.com"
        keyboardType="email-address"
      />
      <OutlinedInput lable="Full Name" placeholder="Joe Doe" />
      <OutlinedInput
        lable="Phone"
        placeholder="0948......"
        keyboardType="phone-pad"
      />
      <OutlinedInput
        lable="Password"
        secureTextEntry
        placeholder="strong like 12#joe2002@ ..."
      />
      <Button>Regiser</Button>
    </View>
  );
};

export default RegisterForm;
