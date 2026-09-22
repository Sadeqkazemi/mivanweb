export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <div
      className="btn-gradient flex items-center justify-center text-white font-serif shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.25,
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: size * 0.55,
        fontWeight: 700,
        lineHeight: 1,
      }}
    >
      M
    </div>
  );
}

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <LogoMark size={size} />
      <span className="font-display font-extrabold text-[19px] tracking-[-0.02em] text-ink">
        Mivan
      </span>
    </div>
  );
}
