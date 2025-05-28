import { useFormik } from "formik";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import * as yup from "yup";
import Button from "../Button";
import OutlinedInput from "../OutlinedInput";
import SectionHeader from "../SectionStyle";

const validationSchema = yup.object().shape({
  first_name: yup.string().min(2).max(26).required().label("firstname"),
  last_name: yup.string().min(2).max(26).required().label("lastname"),
});

type UserProfile = {
  first_name: string;
  last_name: string;
  role: "admin" | "super_admin" | "customer" | "employee";
  phone: string;
  verifed: boolean;
};

type UpdateUserProfile = {
  first_name: string;
  last_name: string;
};

const UpdateProfile = () => {
  const [readonly, setReadonly] = useState<boolean>(true);
  const [profile, setProfile] = useState<UserProfile>({
    first_name: "jawad",
    last_name: "taki aldeen",
    phone: "0948966979",
    role: "customer",
    verifed: true,
  });

  const initialValues: UpdateUserProfile = useMemo(() => {
    return {
      first_name: profile.first_name,
      last_name: profile.last_name,
    };
  }, [profile]);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <View>
      <SectionHeader>Update Account</SectionHeader>
      <OutlinedInput
        readOnly={readonly}
        lable="First Name"
        value={values.first_name}
        onBlur={handleBlur("first_name")}
        onChangeText={handleChange("first_name")}
        error={!!touched.first_name && !!errors.first_name}
      />
      <OutlinedInput
        readOnly={readonly}
        lable="Last Name"
        value={values.last_name}
        onBlur={handleBlur("last_name")}
        onChangeText={handleChange("last_name")}
        error={!!touched.last_name && !!errors.last_name}
      />
      <Button
        className="w-[200px]"
        onPress={() => {
          if (readonly) {
            setReadonly(false);
            return;
          }
          handleSubmit();
          setReadonly(true);
        }}
      >
        {readonly ? "Enable Editing" : "Update"}
      </Button>
    </View>
  );
};

export default UpdateProfile;
