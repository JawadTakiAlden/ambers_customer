import { VariantProps, cva } from "class-variance-authority";
import { clsx } from "clsx";
import React, { forwardRef } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Typography from "./Typography";

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
        primary:
          "bg-primary-600 border-primary-600 dark:bg-primary-400 dark:border-primary-400",
        secondary:
          "bg-secondary-600 text-secondary-600 border-secondary-600 dark:bg-secondary-400 dark:border-secondary-400",
        success:
          "bg-success-600 border-success-600 dark:bg-success-400 dark:border-success-400",
        error:
          "bg-error-600 border-error-600 dark:bg-error-400 dark:border-error-400",
        warning:
          "bg-warning-600 border-warning-600 dark:bg-warning-400 dark:border-warning-400",
        info: "bg-info-600 border-info-600 dark:bg-info-400 dark:border-info-400",
        ghost:
          "bg-gray-600 border-gray-600 dark:bg-gray-400 dark:border-gray-400",
      },
    },
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

const Button = forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(
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
        <Typography
          color={color}
          variant={variant}
          className="font-Popions-SemiBold"
        >
          {children}
        </Typography>
      </TouchableOpacity>
    );
  }
);

export default Button;
