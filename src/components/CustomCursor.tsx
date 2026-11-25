import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const root = document.documentElement;
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    const hide = () => {
      cursor.dataset.visible = "false";
      root.classList.remove("has-custom-cursor");
    };
    const move = (event: PointerEvent) => {
      if (!mouse.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.dataset.visible = "true";
      root.classList.add("has-custom-cursor");
    };
    const pointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") hide();
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", pointerDown, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", hide);
    root.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    mouse.addEventListener("change", hide);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", pointerDown);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", hide);
      root.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
      mouse.removeEventListener("change", hide);
      hide();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
