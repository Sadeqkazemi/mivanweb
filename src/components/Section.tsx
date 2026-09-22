import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-[clamp(32px,6vw,56px)] ${className}`}>
      <div className="content-col">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-accent-text text-[10px] font-bold uppercase tracking-widest mb-2">
      {children}
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-extrabold text-[clamp(17.3px,3vw,21.6px)] leading-tight tracking-[-0.03em] mb-3">
      {children}
    </h2>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-[18px] border border-[var(--hairline)] p-5 ${className}`}
    >
      {children}
    </div>
  );
}
