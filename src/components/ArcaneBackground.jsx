import { useState, useEffect } from "react";

export default function ArcaneBackground() {
  const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᚹ","ᚺ","ᚾ","ᛁ","ᛃ","ᛇ"];

  // Track mouse parallax offset
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Shared parallax styling
  const parallax = (depth = 1) => ({
    transform: `translate(${offset.x / depth}px, ${offset.y / depth}px)`,
    transition: "transform 0.1s ease-out",
  });

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none 
                 flex items-center justify-center 
                 bg-[#0d0e14]"
    >
      {/* Soft magical glow */}
      <div className="absolute w-[1200px] h-[1200px] rounded-full 
                      bg-gradient-to-br from-purple-900/25 to-yellow-300/10 
                      blur-[160px]"></div>

      {/* DEEP BACKGROUND CIRCLE */}
      <div style={parallax(5)} className="absolute">
        <svg
          className="w-[1400px] h-[1400px] opacity-[0.07] animate-spin-very-slow"
          viewBox="0 0 512 512"
          fill="none"
          stroke="#604040"
          strokeWidth="1"
        >
          <circle cx="256" cy="256" r="240" />
        </svg>
      </div>

      {/* OUTER MAGIC CIRCLE */}
      <div style={parallax(3)} className="absolute">
        <svg
          className="w-[850px] h-[850px] animate-spin-slow opacity-35"
          viewBox="0 0 512 512"
          fill="none"
          stroke="#f2d98a"
          strokeWidth="2"
        >
          <circle cx="256" cy="256" r="220" />
          <circle cx="256" cy="256" r="180" strokeOpacity="0.5" />

          {runes.map((rune, i) => {
            const angle = (i / runes.length) * 2 * Math.PI;
            const x = 256 + Math.cos(angle) * 220;
            const y = 256 + Math.sin(angle) * 220;
            return (
              <text
                key={i}
                x={x}
                y={y}
                fontSize="30"
                fill="#f2d98a"
                className="rune-glow"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {rune}
              </text>
            );
          })}
        </svg>
      </div>

      {/* INNER MAGIC CIRCLE */}
      <div style={parallax(2)} className="absolute">
        <svg
          className="w-[650px] h-[650px] animate-spin-reverse opacity-20"
          viewBox="0 0 512 512"
          fill="none"
          stroke="#b19555"
          strokeWidth="1.5"
        >
          <circle cx="256" cy="256" r="160" />
          <circle cx="256" cy="256" r="120" strokeOpacity="0.5" />

          {runes.map((rune, i) => {
            const angle = (i / runes.length) * 2 * Math.PI;
            const x = 256 + Math.cos(angle) * 160;
            const y = 256 + Math.sin(angle) * 160;
            return (
              <text
                key={i}
                x={x}
                y={y}
                fontSize="24"
                fill="#b19555"
                className="rune-glow"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {rune}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
