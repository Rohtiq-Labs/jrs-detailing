export type RevealVariant = "default" | "scale";

export type RevealProps = {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
};
