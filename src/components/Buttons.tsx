import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function GradientPill({
  children,
  href,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `btn-gradient inline-flex items-center justify-center gap-2 rounded-full text-white text-[11.5px] font-bold px-5 py-3 transition-all duration-150 hover:brightness-95 hover:-translate-y-0.5 ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function OutlinePill({
  children,
  href,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[var(--hairline-strong)] text-ink text-[11.5px] font-bold px-5 py-3 transition-all duration-150 hover:-translate-y-0.5 ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-white text-accent-text font-bold"
      style={{ width: size, height: size, fontSize: size * 0.65 }}
    >
      G
    </span>
  );
}
