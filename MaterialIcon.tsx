import type { CSSProperties } from "react";
import { cn } from "../utils/cn";

/** Official Google Material Symbols Rounded icon. */
export function Icon({
  name,
  size = 20,
  filled = false,
  weight = 400,
  className,
  style,
}: {
  name: string;
  size?: number;
  filled?: boolean;
  weight?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-rounded shrink-0 select-none", className)}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
        ...style,
      }}
    >
      {name}
    </span>
  );
}
