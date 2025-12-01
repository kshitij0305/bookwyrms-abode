import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const move = (e) => {
      glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-[300px] h-[300px] rounded-full 
                 bg-yellow-300/10 blur-3xl pointer-events-none -z-10 
                 transition-transform duration-200"
    />
  );
}
