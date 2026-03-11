import type { IconProps } from './IconProps';

export default function ArrowLeftIcon({ size = 24, color = 'currentColor', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 12L8 17M3 12L8 7M3 12H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
