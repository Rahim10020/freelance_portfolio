import type { IconProps } from "./IconProps";

type ThemeModeIconProps = IconProps & {
  inverted?: boolean;
};

export default function ThemeModeIcon({
  size = 24,
  inverted = false,
  ...props
}: ThemeModeIconProps) {
  const white = "white";
  const black = "black";
  const base = inverted ? black : white;
  const half = inverted ? white : black;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={base}
        stroke={half}
        strokeWidth="1"
      />
      <path
        d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V2Z"
        fill={half}
      />
    </svg>
  );
}
