import type { IconProps } from "./IconProps";

export default function XWhiteIcon({
  size = 24,
  color = "var(--c-icon-white)",
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
      <path
        d="M4 4H8.2L13.1 10.6L18.8 4H21L14.1 12L21.4 20H17.2L12.1 13.1L6 20H3.8L11.2 11.6L4 4Z"
        fill={color}
      />
    </svg>
  );
}
