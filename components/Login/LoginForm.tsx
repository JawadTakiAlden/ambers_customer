import { router } from "expo-router";
import { useFormik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import Button from "../Button";
import OutlinedInput from "../OutlinedInput";

const intialValues: { phone: string; password: string } = {
  password: "",
  phone: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().trim().min(8).max(256).required().label("passowrd"),
  phone: yup.string().min(10).max(10).required().label("phone"),
});

const LoginForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: intialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <View className="gap-1">
      <OutlinedInput
        lable="Phone"
        placeholder="Enter your Phone Number"
        keyboardType="phone-pad"
        value={values.phone}
        onBlur={handleBlur("phone")}
        error={!!touched.phone && !!errors.phone}
        onChangeText={handleChange("phone")}
      />
      <OutlinedInput
        lable="Password"
        placeholder="Enter Your Password"
        secureTextEntry
        value={values.password}
        onBlur={handleBlur("password")}
        error={!!touched.password && !!errors.password}
        onChangeText={handleChange("password")}
      />
      <Button
        color={"primary"}
        onPress={() => {
          handleSubmit();
          router.replace("/(root)/(tabs)/home");
        }}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
