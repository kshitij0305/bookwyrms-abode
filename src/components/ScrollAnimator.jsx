import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function ScrollAnimator({
  children,
  direction = "left",
  delay = 0,
  duration = 700,
  distance = 80,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    let x = 0, y = 0;

    if (direction === "left") x = -distance;
    if (direction === "right") x = distance;
    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;

    el.style.opacity = 0;
    el.style.transform = `translate(${x}px, ${y}px)`;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime({
            targets: el,
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration,
            delay,
            easing: "easeOutQuad",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return <div ref={ref}>{children}</div>;
}
