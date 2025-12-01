export default function DustParticles() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 20;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-yellow-300/30 blur-sm animate-floatUp"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-10px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></span>
        );
      })}
    </div>
  );
}
