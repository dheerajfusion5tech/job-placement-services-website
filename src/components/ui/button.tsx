import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-(--radius-md) text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-(--primary) text-(--primary-foreground) hover:bg-(--primary-hover)",
        secondary:
          "bg-(--surface-elevated) text-(--foreground) border border-(--border) hover:bg-(--border)",
        outline:
          "border border-(--border-strong) bg-transparent hover:bg-(--surface-elevated)",
        ghost: "hover:bg-(--surface-elevated) hover:text-(--foreground)",
        link: "text-(--primary) underline-offset-4 hover:underline",
        destructive:
          "bg-(--destructive) text-(--destructive-foreground) hover:opacity-90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-(--radius-sm) px-3 text-xs",
        lg: "h-12 rounded-(--radius-lg) px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(classes, (children as any).props?.className),
        ref,
      });
    }
    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
