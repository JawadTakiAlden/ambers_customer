import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import React, { forwardRef } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export const ButtonVariants = cva(
  ["flex-row", "items-center", "justify-center", "backdrop-blur-sm", "w-auto"],
  {
    variants: {
      variant: {
        outlined: "border bg-transparent",
        contained: "",
      },
      size: {
        medium: "px-5 py-2.5 text-base",
        small: "px-3 py-1.5 text-sm",
        large: "px-8 py-3.5 text-lg",
        basic: "px-5 py-1.5 text-base",
      },
      rounded: {
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-lg",
        basic: "rounded-[10px]",
      },
      color: {
        primary: "bg-primary-600 border-primary-600",
        secondary: "bg-secondary-600 text-secondary-600 border-secondary-600",
        success: "bg-success-600 border-success-600",
        error: "bg-error-600 border-error-600",
        warning: "bg-warning-600 border-warning-600",
        info: "bg-info-600 border-info-600",
        ghost: "bg-gray-600 border-gray-600",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "primary",
        className: "text-primary-50",
      },
      {
        variant: "outlined",
        color: "primary",
        className: "text-primary-600",
      },
      {
        variant: "contained",
        color: "secondary",
        className: "text-secondary-50",
      },
      {
        variant: "contained",
        color: "success",
        className: "text-success-50",
      },
      {
        variant: "contained",
        color: "error",
        className: "text-error-50",
      },
      {
        variant: "contained",
        color: "warning",
        className: "text-warning-50",
      },
      {
        variant: "contained",
        color: "info",
        className: "text-info-50",
      },
      {
        variant: "contained",
        color: "ghost",
        className: "text-gray-50",
      },
    ],
    defaultVariants: {
      variant: "contained",
      size: "large",
      color: "primary",
      rounded: "basic",
    },
  }
);

type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof ButtonVariants> & {
    textClassName?: string;
    children: React.ReactNode;
  };

const Button = forwardRef<TouchableOpacity, ButtonProps>(
  (
    {
      children,
      className,
      textClassName,
      color,
      size,
      variant,
      rounded,
      ...rest
    },
    ref
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...rest}
        activeOpacity={0.8}
        className={clsx(
          ButtonVariants({ color, size, variant, rounded }),
          className
        )}
      >
        <Text className={clsx(`font-medium !color-inherit`, textClassName)}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default Button;
