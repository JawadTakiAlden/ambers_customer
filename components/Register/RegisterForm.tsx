import { router } from "expo-router";
import { useFormik } from "formik";
import React from "react";
import { View } from "react-native";
import * as yup from "yup";
import Button from "../Button";
import OutlinedInput from "../OutlinedInput";

type RegisterForm = {
  phone: string;
  password: string;
  first_name: string;
  last_name: string;
};

const intialValues: RegisterForm = {
  password: "",
  phone: "",
  first_name: "",
  last_name: "",
};

const validationSchema = yup.object().shape({
  first_name: yup.string().min(2).max(26).required().label("firstname"),
  last_name: yup.string().min(2).max(26).required().label("lastname"),
  password: yup.string().trim().min(8).max(256).required().label("passowrd"),
  phone: yup.string().min(10).max(10).required().label("phone"),
});

const RegisterForm = () => {
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
        lable="First name"
        placeholder="jawad"
        keyboardType="default"
        value={values.first_name}
        onBlur={handleBlur("first_name")}
        error={!!touched.first_name && !!errors.first_name}
        onChangeText={handleChange("first_name")}
      />
      <OutlinedInput
        lable="Last name"
        placeholder="taki aldeen"
        keyboardType="default"
        value={values.last_name}
        onBlur={handleBlur("last_name")}
        error={!!touched.last_name && !!errors.last_name}
        onChangeText={handleChange("last_name")}
      />
      <OutlinedInput
        lable="Phone Number"
        placeholder="0948966..."
        keyboardType="phone-pad"
        value={values.phone}
        onBlur={handleBlur("phone")}
        error={!!touched.phone && !!errors.phone}
        onChangeText={handleChange("phone")}
      />

      <OutlinedInput
        lable="Password"
        placeholder="Uppercase , letters , numbers"
        secureTextEntry
        value={values.password}
        onBlur={handleBlur("password")}
        error={!!touched.password && !!errors.password}
        onChangeText={handleChange("password")}
      />
      <Button
        onPress={() => {
          handleSubmit();
          router.replace("/(auth)/login");
        }}
      >
        Regiser
      </Button>
    </View>
  );
};

export default RegisterForm;
