import { useFormik } from "formik";
import React, { useState } from "react";
import { View } from "react-native";
import * as yup from "yup";
import Button from "../Button";
import OutlinedInput from "../OutlinedInput";
import SectionHeader from "../SectionStyle";

const validationSchema = yup.object().shape({
  new_password: yup
    .string()
    .min(8)
    .trim()
    .max(256)
    .required()
    .label("new_password"),
  confirm_new_password: yup
    .string()
    .min(8)
    .trim()
    .max(256)
    .required()
    .label("confirm_new_password"),
});

type ChangePassword = {
  new_password: string;
  confirm_new_password: string;
};

const initialValues: ChangePassword = {
  new_password: "",
  confirm_new_password: "",
};

const ChangePassword = () => {
  const [readonly, setReadonly] = useState<boolean>(true);

  const {
    values,
    touched,
    errors,
    resetForm,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <View>
      <SectionHeader>Change Password</SectionHeader>
      <OutlinedInput
        readOnly
        lable="Current Password"
        secureTextEntry
        value="***********"
      />
      <OutlinedInput
        readOnly={readonly}
        lable="New Password"
        secureTextEntry
        value={values.new_password}
        onBlur={handleBlur("new_password")}
        onChangeText={handleChange("new_password")}
        error={!!touched.new_password && !!errors.new_password}
      />
      <OutlinedInput
        readOnly={readonly}
        lable="Confirm New Password"
        secureTextEntry
        value={values.confirm_new_password}
        onBlur={handleBlur("confirm_new_password")}
        onChangeText={handleChange("confirm_new_password")}
        error={!!touched.confirm_new_password && !!errors.confirm_new_password}
      />
      <Button
        className="w-[300px]"
        onPress={() => {
          if (readonly) {
            setReadonly(false);
            return;
          }
          handleSubmit();
          resetForm();
          setReadonly(true);
        }}
      >
        {readonly ? "Enable Reset Password" : "Change Password"}
      </Button>
    </View>
  );
};

export default ChangePassword;
