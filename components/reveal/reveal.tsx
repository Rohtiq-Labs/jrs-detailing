"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import type { RevealVariant } from "./reveal.types";

type RevealProps<T extends ElementType = "div"> = {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
  style?: CSSProperties;
  as?: T;
};

export const Reveal = <T extends ElementType = "div">({
  children,
  variant = "default",
  className = "",
  style,
  as,
}: RevealProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      data-reveal={variant === "scale" ? "scale" : true}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};
