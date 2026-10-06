import { useEffect, useState } from "react";

export const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [point, setPoint] = useState({ x: -40, y: -40 });
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !reduce.matches);
    sync();
    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);

    const move = (event: MouseEvent) => {
      setPoint({ x: event.clientX, y: event.clientY });
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[80] hidden md:block"
      style={{
        left: point.x,
        top: point.y,
        transform: `translate(-50%, -50%) scale(${pressed ? 0.75 : 1})`,
      }}
    >
      <span className="block h-3 w-3 rounded-full bg-white mix-blend-difference transition-transform duration-150" />
    </div>
  );
};
