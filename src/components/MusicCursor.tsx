import { useEffect, useRef } from "react";

const MusicCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x, ty = y;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const onDown = () => el.classList.add("click");
    const onUp = () => el.classList.remove("click");
    const onLeave = () => { el.style.opacity = "0"; };
    const onEnter = () => { el.style.opacity = "1"; };

    const tick = () => {
      x += (tx - x) * 0.35;
      y += (ty - y) * 0.35;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div id="music-cursor" ref={ref} aria-hidden="true">
      {/* Music note SVG */}
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3v12.17A4 4 0 1 0 22 19V7h-2.5l.5-.83V3h-2zM8 5v11.17A4 4 0 1 0 10 20V9h6V5H8z"/>
      </svg>
    </div>
  );
};

export default MusicCursor;
