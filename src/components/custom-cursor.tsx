"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(media.matches && !reducedMotion.matches);
    update();
    media.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target;
      setHovered(target instanceof Element && Boolean(target.closest("a, button, [role='button']")));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      media.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${hovered ? "custom-cursor--hover" : ""} ${pressed ? "custom-cursor--pressed" : ""}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>
  );
}
