import ScrollAnimator from "./ScrollAnimator";
import Logo from "../assets/logo.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 text-[#e8d9a1]"
    >
      {/* ARCANE BOX WRAPPER */}
      <div
        className="
          max-w-6xl mx-auto 
          rounded-3xl 
          bg-[#0c0c11]/40 
          border border-yellow-300/20 
          backdrop-blur-xl 
          shadow-[0_0_50px_rgba(242,217,138,0.25)]
          p-10 md:p-16
        "
      >
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          <span className="text-yellow-300">About</span> Bookwyrm’s Abode
        </h2>

        {/* FLEX WRAPPER */}
        <div
          className="
            flex flex-col md:flex-row 
            items-center md:items-start 
            gap-10 md:gap-16
          "
        >

          {/* ROUND LOGO CONTAINER */}
          
        <div
          className="
            aspect-square
            w-56 md:w-72
            rounded-full 
             bg-[#0c0c11]/60 
            border border-yellow-300/20
            shadow-[0_0_40px_rgba(255,230,150,0.18)]
            flex items-center justify-center
            shrink-0
            mx-auto md:mx-0
            "
        >
            <img
            src={Logo}
            alt="Bookwyrm Logo"
            className="w-[85%] h-[85%] object-contain rounded-full"
            />
            </div>


          {/* TEXT */}
          <div className="text-lg md:text-xl leading-relaxed md:max-w-3xl text-center md:text-left">
            <p className="mb-6">
              <span className="text-yellow-300 font-semibold">Bookwyrm’s Abode</span>
              &nbsp;is a sanctuary for seekers of knowledge, explorers of worlds, and
              those who feel the ancient pull of lore and legend.
            </p>

            <p className="mb-6">
              Our emblem — a winged tome rising above the Tree of Stories — reflects
              our mission: to celebrate the magic of reading and guide adventurers
              toward their next unforgettable tale.
            </p>

            <p>
              Whether your heart seeks mystic realms, heroic sagas, or peaceful
              escapes, your journey begins here.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
