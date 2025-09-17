import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-transform transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white shadow-md",
        dark: "bg-gray-900 text-white shadow-lg",
        light: "bg-white text-gray-900 shadow-md",
        destructive: "bg-red-600 text-white shadow-md",
        outline: "border border-gray-300 bg-transparent text-gray-900",
        glass: "bg-white/30 backdrop-blur-md border border-white/20 text-white shadow-md",
        gradient: "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md",
        neon: "bg-black text-green-400 border border-green-500 shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e]",
        cyberpunk: "bg-pink-600 text-yellow-300 uppercase tracking-widest shadow-lg",
        pill: "rounded-full bg-blue-500 text-white px-6 py-2 shadow-md",
        ghost: "bg-transparent border border-white text-white",
        neumorphic: "bg-gray-100 text-gray-800 rounded-xl shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Animation config per variant
const variantAnimations = {
  default: { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } },
  dark: { whileHover: { scale: 1.12 }, whileTap: { scale: 0.95 } },
  light: { whileHover: { scale: 1.08, y: -2 }, whileTap: { scale: 0.96, y: 1 } },
  destructive: { whileHover: { scale: 1.15, rotate: -2 }, whileTap: { scale: 0.9, rotate: 1 } },
  outline: { whileHover: { scale: 1.08, backgroundColor: "rgba(0,0,0,0.05)" }, whileTap: { scale: 0.96 } },
  glass: { whileHover: { scale: 1.1, backdropFilter: "blur(12px)" }, whileTap: { scale: 0.94 } },
  gradient: { whileHover: { scale: 1.12, rotate: 2 }, whileTap: { scale: 0.95, rotate: -2 } },
  neon: { whileHover: { scale: 1.15, boxShadow: "0 0 30px #22c55e" }, whileTap: { scale: 0.95 } },
  cyberpunk: { whileHover: { scale: 1.1, rotate: 3 }, whileTap: { scale: 0.95 } },
  pill: { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } },
  ghost: { whileHover: { scale: 1.08, backgroundColor: "rgba(255,255,255,0.1)" }, whileTap: { scale: 0.95 } },
  neumorphic: { whileHover: { scale: 1.08, boxShadow: "inset 4px 4px 8px #c5c5c5, inset -4px -4px 8px #ffffff" }, whileTap: { scale: 0.95 } },
};

const Button = React.forwardRef(
  ({ className, variant = "default", size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button;
    const motionProps = variantAnimations[variant] || variantAnimations.default;

    return (
      <Comp
        {...motionProps}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && (
          <motion.span
            className="flex items-center"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.span>
        )}
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {children}
        </motion.span>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
