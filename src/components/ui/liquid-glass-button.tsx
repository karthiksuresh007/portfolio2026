"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { TrackedLink } from "@/components/tracked-link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/30 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-moss",
        destructive: "bg-red-700 text-white hover:bg-red-600",
        cool:
          "border border-white/40 bg-gradient-to-t from-[#1d1b1a] via-[#4f4032] to-[#c18a55] text-paper shadow-lg shadow-amber/20 transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:brightness-95",
        outline:
          "border border-black/10 bg-white/70 text-ink hover:bg-paper hover:text-ink",
        secondary: "bg-paper text-ink hover:bg-white",
        ghost: "text-ink hover:bg-ink/5 hover:text-ink",
        link: "text-ink underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-11 px-6",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const liquidbuttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium text-ink transition-[transform,color,box-shadow] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-amber/30",
  {
    variants: {
      variant: {
        default: "bg-transparent text-ink hover:scale-[1.03]",
        destructive:
          "bg-red-700/10 text-red-900 hover:bg-red-700/20 dark:text-red-50",
        outline:
          "bg-transparent text-ink hover:text-ink",
        secondary: "bg-transparent text-clay hover:text-ink",
        ghost: "bg-transparent text-ink/75 hover:text-ink",
        link: "bg-transparent underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-5 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-4 text-xs has-[>svg]:px-3.5",
        lg: "h-11 px-6 has-[>svg]:px-5",
        xl: "h-12 px-8 has-[>svg]:px-6",
        xxl: "h-14 px-10 text-base has-[>svg]:px-8",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "xxl"
    }
  }
);

function LiquidChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 z-0 h-full w-full rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.35),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.95),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.55),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.08),inset_0_0_10px_6px_rgba(255,255,255,0.22),0_0_18px_rgba(255,255,255,0.25)]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.14))]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 isolate -z-10 overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#container-glass")' }}
      />
      <span className="pointer-events-none relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      <GlassFilter />
    </>
  );
}

function LiquidButton({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof liquidbuttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      <LiquidChrome>{children}</LiquidChrome>
    </button>
  );
}

interface LiquidLinkButtonProps
  extends Omit<React.ComponentProps<typeof TrackedLink>, "className">,
    VariantProps<typeof liquidbuttonVariants> {
  className?: string;
}

function LiquidLinkButton({
  className,
  variant,
  size,
  children,
  ...props
}: LiquidLinkButtonProps) {
  return (
    <TrackedLink
      {...props}
      className={cn(liquidbuttonVariants({ variant, size, className }))}
    >
      <LiquidChrome>{children}</LiquidChrome>
    </TrackedLink>
  );
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

type ColorVariant =
  | "default"
  | "primary"
  | "success"
  | "error"
  | "gold"
  | "bronze";

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const colorVariants: Record<
  ColorVariant,
  {
    outer: string;
    inner: string;
    button: string;
    textColor: string;
    textShadow: string;
  }
> = {
  default: {
    outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner: "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
    button: "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]"
  },
  primary: {
    outer: "bg-gradient-to-b from-[#22160c] to-[#d6a26d]",
    inner: "bg-gradient-to-b from-[#fff1dd] via-[#6f4f2a] to-[#f4cf9f]",
    button: "bg-gradient-to-b from-[#d29a61] to-[#8f6237]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(120_75_20_/_100%)]"
  },
  success: {
    outer: "bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",
    inner: "bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",
    button: "bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]"
  },
  error: {
    outer: "bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",
    inner: "bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",
    button: "bg-gradient-to-b from-[#F08D8F] to-[#A45253]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]"
  },
  gold: {
    outer: "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
    inner: "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
    button: "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
    textColor: "text-[#FFFDE5]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]"
  },
  bronze: {
    outer: "bg-gradient-to-b from-[#864813] to-[#E9B486]",
    inner: "bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",
    button: "bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]"
  }
};

const metalButtonVariants = (
  variant: ColorVariant = "default",
  isPressed: boolean,
  isHovered: boolean,
  isTouchDevice: boolean
) => {
  const colors = colorVariants[variant];
  const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";

  return {
    wrapper: cn(
      "relative inline-flex transform-gpu rounded-md p-[1.25px] will-change-transform",
      colors.outer
    ),
    wrapperStyle: {
      transform: isPressed ? "translateY(2.5px) scale(0.99)" : "translateY(0) scale(1)",
      boxShadow: isPressed
        ? "0 1px 2px rgba(0, 0, 0, 0.15)"
        : isHovered && !isTouchDevice
          ? "0 4px 12px rgba(0, 0, 0, 0.12)"
          : "0 3px 8px rgba(0, 0, 0, 0.08)",
      transition: transitionStyle,
      transformOrigin: "center center"
    },
    inner: cn(
      "absolute inset-[1px] transform-gpu rounded-lg will-change-transform",
      colors.inner
    ),
    innerStyle: {
      transition: transitionStyle,
      transformOrigin: "center center",
      filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none"
    },
    button: cn(
      "relative z-10 m-[1px] inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm font-semibold leading-none will-change-transform outline-none",
      colors.button,
      colors.textColor,
      colors.textShadow
    ),
    buttonStyle: {
      transform: isPressed ? "scale(0.97)" : "scale(1)",
      transition: transitionStyle,
      transformOrigin: "center center",
      filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.02)" : "none"
    }
  };
};

const ShineEffect = ({ isPressed }: { isPressed: boolean }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300",
        isPressed ? "opacity-20" : "opacity-0"
      )}
    >
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
    </div>
  );
};

const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);

    React.useEffect(() => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    const buttonText = children || "Button";
    const variants = metalButtonVariants(variant, isPressed, isHovered, isTouchDevice);

    return (
      <div className={variants.wrapper} style={variants.wrapperStyle}>
        <div className={variants.inner} style={variants.innerStyle}></div>
        <button
          ref={ref}
          className={cn(variants.button, className)}
          style={variants.buttonStyle}
          {...props}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onMouseLeave={() => {
            setIsPressed(false);
            setIsHovered(false);
          }}
          onMouseEnter={() => {
            if (!isTouchDevice) {
              setIsHovered(true);
            }
          }}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          onTouchCancel={() => setIsPressed(false)}
        >
          <ShineEffect isPressed={isPressed} />
          {buttonText}
          {isHovered && !isPressed && !isTouchDevice && (
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-transparent to-white/5" />
          )}
        </button>
      </div>
    );
  }
);

MetalButton.displayName = "MetalButton";

export {
  Button,
  buttonVariants,
  liquidbuttonVariants,
  LiquidButton,
  LiquidLinkButton,
  MetalButton
};
