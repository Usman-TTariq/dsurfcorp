type BrandWordmarkProps = {
  className?: string;
};

export default function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-0 font-extrabold tracking-tight leading-none select-none ${className ?? ""}`}
    >
      <span className="text-white drop-shadow-sm">dsurf</span>
      <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.35)]">corp</span>
    </span>
  );
}
