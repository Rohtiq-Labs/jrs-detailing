export type RevealVariant = "up" | "in" | "scale" | "left" | "right" | "fade";

export type RevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
};
