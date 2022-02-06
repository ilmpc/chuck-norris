import clsx from "clsx";

export const Button: React.FC<React.ComponentPropsWithRef<"button">> = (
  props
) => <button {...props} className={clsx(props.className, "nes-btn")} />;
