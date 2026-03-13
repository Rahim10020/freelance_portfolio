import type { IconProps } from "./IconProps";

export default function IdeaIcon({
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
      <path
        d="M9 18H15M10 21H14M12 3C8.68629 3 6 5.68629 6 9C6 11.0976 7.06858 12.9456 8.69171 14.0217C9.51435 14.5672 10 15.4656 10 16.4527V17H14V16.4527C14 15.4656 14.4856 14.5672 15.3083 14.0217C16.9314 12.9456 18 11.0976 18 9C18 5.68629 15.3137 3 12 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
