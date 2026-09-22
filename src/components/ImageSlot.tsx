export function ImageSlot({
  label = "food photo",
  className = "",
  rounded = "rounded-2xl",
}: {
  label?: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-[#f4ede2] text-muted text-[10px] font-semibold uppercase tracking-wide ${rounded} ${className}`}
    >
      {label}
    </div>
  );
}
