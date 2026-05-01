import type { IconProps } from "./IconProps";

export default function CopyIcon({
  size = 20,
  color = "currentColor",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="9"
        y="9"
        width="10"
        height="10"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M5 15V7C5 5.89543 5.89543 5 7 5H15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
