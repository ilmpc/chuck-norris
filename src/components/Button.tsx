import clsx from "clsx";

const variants = {
  primary: "is-primary",
  success: "is-success",
  warning: "is-warning",
  error: "is-error",
} as const;

export const Button: React.FC<
  React.ComponentPropsWithRef<"button"> & { variant?: keyof typeof variants }
> = ({ variant, ...props }) => (
  <button
    {...props}
    className={clsx(
      props.className,
      "nes-btn",
      props.disabled && "is-disabled",
      variant && variants[variant]
    )}
  />
);
