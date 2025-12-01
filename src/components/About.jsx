import ScrollAnimator from "./ScrollAnimator";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-36 px-6 md:px-12 lg:px-24 text-[#e8d9a1] mt-24"
    >
      {/* Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-yellow-300/40"></div>

      {/* Title */}
      <ScrollAnimator direction="up" distance={60}>
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-20">
          <span className="text-yellow-300">About</span>{" "}
          Bookwyrm’s Abode
        </h2>
      </ScrollAnimator>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-0">

        {/* LOGO */}
        <ScrollAnimator direction="left" distance={60}>
          <div className="relative group md:ml-10">
            {/* Rotating thin ring */}
            <div className="absolute inset-0 animate-spin-slow opacity-25">
              <div className="w-[260px] h-[260px] rounded-full border border-yellow-300/25"></div>
            </div>

            {/* Soft glow */}
            <div className="absolute inset-0 blur-2xl bg-yellow-300/10 rounded-full"></div>

            <img
              src={logo}
              className="w-[260px] h-[260px] relative z-10 rounded-full shadow-[0_0_40px_rgba(242,217,138,0.25)] group-hover:scale-[1.02] transition-all"
              alt="Bookwyrm Logo"
            />
          </div>
        </ScrollAnimator>

        {/* TEXT */}
        <ScrollAnimator direction="right" distance={60}>
          <div className="max-w-2xl text-xl tracking-wide leading-relaxed space-y-8 md:ml-8">

            <p>
              <span className="text-yellow-300 font-semibold">Bookwyrm’s Abode</span>{" "}
              is a sanctuary for seekers of knowledge, explorers of stories,
              and wanderers who cherish ancient lore.
            </p>

            <p>
              Our emblem — the winged tome rising above the Tree of Stories —
              captures our mission: to celebrate the magic of reading and guide
              you toward unlocking your next adventure.
            </p>

            <p>
              Whether you're drawn to mystic tales, heroic epics, or peaceful
              escapes, this is where your journey begins.
            </p>

          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}
