/**
 * Fonts, keyframes and the small animation helpers that Tailwind utilities
 * don't cover. Injected once from Portfolio.tsx.
 */
export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600;1,700&family=Caveat:wght@600&display=swap');

html { scroll-behavior: smooth; scroll-padding-top: 88px; }

.lc-root { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
.lc-script { font-family: 'Caveat', 'Segoe Script', cursive; }

@keyframes lc-rise {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes lc-pop {
  from { opacity: 0; transform: scale(.86); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes lc-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-9px); }
}
@keyframes lc-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes lc-spin {
  to { transform: rotate(360deg); }
}

.lc-rise   { opacity: 0; animation: lc-rise .85s cubic-bezier(.2,.7,.2,1) forwards; animation-delay: var(--d, 0ms); }
.lc-pop    { opacity: 0; animation: lc-pop .9s cubic-bezier(.2,.7,.2,1) forwards; animation-delay: var(--d, 0ms); }
.lc-float  { animation: lc-float 5s ease-in-out infinite; animation-delay: var(--d, 0ms); }
.lc-marquee-track { animation: lc-marquee 32s linear infinite; }
.lc-marquee:hover .lc-marquee-track { animation-play-state: paused; }
.lc-spin-slow { animation: lc-spin 40s linear infinite; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .lc-rise, .lc-pop { animation: none; opacity: 1; }
  .lc-float, .lc-marquee-track, .lc-spin-slow { animation: none; }
}
`;
