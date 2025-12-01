import ScrollAnimator from "./ScrollAnimator";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 lg:px-24 text-[#e8d9a1] mt-24"
    >
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-yellow-300/40"></div>

      {/* Title */}
      <ScrollAnimator direction="up" distance={60}>
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-wide mb-16">
          <span className="text-yellow-300">About</span> Bookwyrm’s Abode
        </h2>
      </ScrollAnimator>

      {/* MOBILE-FRIENDLY FLEX FIX */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-14 md:gap-20">

        {/* LOGO */}
        <ScrollAnimator direction="up" distance={50}>
          <div className="relative group flex justify-center md:justify-start w-full md:w-auto">
            
            {/* Rotating ring */}
            <div className="absolute inset-0 animate-spin-slow opacity-25">
              <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border border-yellow-300/25"></div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 blur-2xl bg-yellow-300/10 rounded-full"></div>

            <img 
              src={logo}
              alt="Bookwyrm Logo"
              className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] relative z-10 rounded-full shadow-[0_0_40px_rgba(242,217,138,0.25)]"
            />
          </div>
        </ScrollAnimator>

        {/* TEXT */}
        <ScrollAnimator direction="right" distance={60}>
          <div className="max-w-xl text-lg leading-relaxed tracking-wide space-y-6 text-center md:text-left px-2">

            <p>
              <span className="text-yellow-300 font-semibold">Bookwyrm’s Abode</span>{" "}
              is a sanctuary for seekers of knowledge, explorers of stories, and
              those who feel the ancient pull of lore and legend.
            </p>

            <p>
              Our emblem — a winged tome rising above the Tree of Stories —
              represents our mission to celebrate the magic of reading and guide
              adventurers toward their next unforgettable tale.
            </p>

            <p>
              Whether your heart seeks mystic realms, heroic sagas, or quiet escapes,
              your journey begins here.
            </p>

          </div>
        </ScrollAnimator>

      </div>
    </section>
  );
}
