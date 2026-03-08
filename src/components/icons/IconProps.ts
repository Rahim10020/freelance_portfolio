import type { SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  size?: number | string;
  color?: string;
}
