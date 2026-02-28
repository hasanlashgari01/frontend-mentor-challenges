import { ButtonProps } from "@/components/button/button.types.ts";
import { cn, tv } from "tailwind-variants";

const Button = ({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const styles = tv({
    base: "cursor-pointer rounded-lg px-6 py-2.5 ring-offset-2 ring-offset-neutral-800 transition-all duration-300 ease-in-out focus:ring-2",
    variants: {
      variant: {
        primary: "bg-blue-600 hover:bg-blue-400 focus:ring-blue-600",
        ghost: "bg-neutral-800 hover:bg-neutral-400 focus:ring-neutral-800",
      },
    },
  });

  return (
    <button className={cn(styles({ variant }), className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
