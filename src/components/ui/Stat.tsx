import { useCountUp } from '../../hooks/UseCountUp';

/** A number that counts up when `start` becomes true. */
export function Stat({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const n = useCountUp(value, start);
  return (
    <div>
      <p className="text-3xl font-bold text-[#F5A70A] sm:text-4xl">
        {n}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-white/70 sm:text-sm">{label}</p>
    </div>
  );
}
