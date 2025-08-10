import { cn } from '../utils/style';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  label: string;
  subtitle?: string;
  icon: ReactNode;
  className?: string;
};

export function IconLinkButton({
  href,
  label,
  subtitle,
  icon,
  className,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'btn-shine block w-full rounded-xl px-4 py-3 transition-colors',
        'focus-ring',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-content-center rounded-lg bg-white/10 text-white shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-base font-semibold leading-tight">{label}</div>
          {subtitle ? (
            <div className="text-xs text-white/80 leading-tight truncate">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
}
