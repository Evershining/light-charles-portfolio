import { PROFILE, PROFILE_IMAGE } from '../../data/content';

/** Round portrait on an amber background. Falls back to initials if no image is set. */
export function Avatar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-[#F5A70A] ${className}`}
    >
      {PROFILE_IMAGE ? (
        <img
          src={PROFILE_IMAGE}
          alt={`Portrait of ${PROFILE.fullName}`}
          className="h-full w-full object-cover"
          loading="eager"
        />
      ) : (
        <span
          className="select-none text-7xl font-extrabold tracking-tight text-[#274233] sm:text-8xl"
          aria-label={`Initials of ${PROFILE.fullName}`}
        >
          LC
        </span>
      )}
    </div>
  );
}
