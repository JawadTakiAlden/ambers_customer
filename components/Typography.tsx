import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { Text, TextProps } from "react-native";

export const TypographyVariants = cva([], {
  variants: {
    color: {
      ghost: "text-gray-50 dark:text-gray-950",
      primary: "text-primary-50 dark:text-primary-950",
      secondary: "text-secondary-50 dark:text-secondary-950 ",
      success: "text-success-50 dark:text-success-950",
      warning: "text-warning-50 dark:text-warning-950",
      error: "text-error-50 dark:text-error-950",
      info: " text-info-50 dark:text-info-950",
    },
    variant: {
      outlined: "",
      contained: "",
    },
  },
  compoundVariants: [
    {
      variant: "outlined",
      color: "primary",
      className: "!text-primary-950 dark:!text-primary-50",
    },
    {
      variant: "outlined",
      color: "error",
      className: "!text-error-950 dark:!text-error-50",
    },
    {
      variant: "outlined",
      color: "ghost",
      className: "!text-gray-950 dark:!text-gray-50",
    },
    {
      variant: "outlined",
      color: "info",
      className: "!text-info-950 dark:!text-info-50",
    },
    {
      variant: "outlined",
      color: "primary",
      className: "!text-primary-950 dark:!text-primary-50",
    },
    {
      variant: "outlined",
      color: "success",
      className: "!text-success-950 dark:!text-success-50",
    },
    {
      variant: "outlined",
      color: "secondary",
      className: "!text-secondary-950 dark:!text-secondary-50",
    },
    {
      variant: "outlined",
      color: "warning",
      className: "!text-warning-950 dark:!text-warning-50",
    },
  ],
  defaultVariants: {
    color: "ghost",
    variant: "contained",
  },
});

type TypographyProps = TextProps &
  VariantProps<typeof TypographyVariants> & {
    textClassName?: string;
    children: React.ReactNode;
  };

const Typography = forwardRef<Text, TypographyProps>(
  ({ children, className, color, variant, ...rest }, ref) => {
    return (
      <Text
        {...rest}
        ref={ref}
        className={clsx(
          "font-Popions-Regular",
          TypographyVariants({ color, variant }),
          className
        )}
      >
        {children}
      </Text>
    );
  }
);

export default Typography;
