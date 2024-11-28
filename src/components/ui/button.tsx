import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        delete:
          "bg-red-500 focus-visible:ring-offset-0 focus:ring-white hover:bg-[#F15656] text-white",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-black text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        marketing: "bg-main hover:bg-blue-main  font-bold text-lg",
        authButton: "bg-blue-main hover:bg-blue-main/90 text-white font-bold text-base",
        productActions: "bg-[#111827] hover:bg-[#151C2B] border border-[#334155] focus-visible:ring-offset-0 focus:ring-white text-white",
        logOut: "border text-[#F15656] border-[#F15656] hover:bg-[#F15656] hover:text-white focus-visible:ring-offset-0 focus:ring-[#F15656]",
        goBack: "hover:bg-[#151C2B] border border-[#334155] focus-visible:ring-offset-0 focus:ring-white text-white",
        like: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        popularSize: "h-10 px-1 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
        like: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
