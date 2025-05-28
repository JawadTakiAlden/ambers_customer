import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { forwardRef, ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Typography from "./Typography";

export const NavigationButtonVariants = cva(
  "p-5 gap-1 w-full flex flex-row items-center justify-between",
  {
    variants: {
      color: {
        ghost:
          "bg-gray-100  dark:bg-gray-900  border-b border-b-gray-300 dark:border-b-gray-700",
        primary:
          "bg-primary-100  dark:bg-primary-900  border-b border-b-primary-300 dark:border-b-primary-700",
        secondary:
          "bg-secondary-100  dark:bg-secondary-900  border-b border-b-secondary-300 dark:border-b-secondary-700",
        success:
          "bg-success-100  dark:bg-success-900  border-b border-b-success-300 dark:border-b-success-700",
        warning:
          "bg-warning-100  dark:bg-warning-900  border-b border-b-warning-300 dark:border-b-warning-700",
        error:
          "bg-error-100 dark:bg-error-900  border-b border-b-error-300 dark:border-b-error-700",
        info: "bg-info-100  dark:bg-info-900  border-b border-b-info-300 dark:border-b-info-700",
      },
    },
    defaultVariants: {
      color: "ghost",
    },
  }
);

type NavigationButtonProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & VariantProps<typeof NavigationButtonVariants> &
  TouchableOpacityProps;
const NavigationButton = forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  NavigationButtonProps
>(({ children, className, color, startIcon, endIcon, ...rest }, ref) => {
  return (
    <TouchableOpacity
      {...rest}
      ref={ref}
      activeOpacity={0.6}
      className={clsx(NavigationButtonVariants({ color }), className)}
    >
      {startIcon && startIcon}
      <Typography
        className="flex-1 font-Popions-SemiBold"
        variant={"outlined"}
        color={color}
      >
        {children}
      </Typography>
      {endIcon && endIcon}
    </TouchableOpacity>
  );
});

export default NavigationButton;
