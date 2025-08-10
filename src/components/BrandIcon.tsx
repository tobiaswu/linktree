import type { SVGProps } from 'react';
import { cn } from '../utils/style';

type SimpleIconLike = {
  path: string;
};

export function BrandIcon({
  icon,
  className,
  ...rest
}: { icon: SimpleIconLike } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      className={cn('w-5 h-5 shrink-0', className)}
      {...rest}
    >
      <path d={icon.path} />
    </svg>
  );
}
