import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

export default function MobileMenu({ open, setOpen }) {
  const runes = [..."ᚠᚾᛟᚹᛇᚺᚦᛃᚲ"];

  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-500 ${
        open ? "backdrop-blur-md bg-black/50 opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`absolute top-0 left-0 h-full w-64
          bg-[#0b0c12]/70 backdrop-blur-xl border-r border-yellow-300/20
          shadow-[0_0_40px_rgba(242,217,138,0.3)]
          transform transition-transform duration-500
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* floating runes (decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {runes.map((rune, index) => (
            <span
              key={index}
              className="absolute text-yellow-300/20 rune-glow"
              style={{
                top: `${5 + (index * 13) % 110}%`,
                left: `${5 + (index * 23) % 70}%`,
                fontSize: `${16 + (index % 4) * 8}px`,
                animation: `floatUp ${6 + (index % 5)}s linear infinite`,
                transform: `translateZ(0)`,
              }}
            >
              {rune}
            </span>
          ))}
        </div>

        {/* close button */}
        <div className="px-4 pt-4 relative z-10">
          <button
            className="text-yellow-300 text-3xl p-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>

        {/* search */}
        <div className="relative z-10 px-4 mt-4 mb-6">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full px-4 py-3 rounded-lg text-[#0d0e14]
                       bg-[#e8d9a1]/90 border border-yellow-300/20
                       shadow-[0_0_10px_rgba(242,217,138,0.25)]
                       focus:border-yellow-300/40 focus:shadow-[0_0_15px_rgba(242,217,138,0.4)]
                       outline-none transition-all"
          />
        </div>

        {/* menu links */}
        <div className="flex flex-col gap-8 text-lg text-[#e8d9a1] px-6 relative z-10 mt-2">
          {[
            { name: "Home", to: "hero" },
            { name: "Featured", to: "featured" },
            { name: "Categories", to: "categories" },
            { name: "Contact", to: "contact" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <Link
                to={item.to}
                smooth
                duration={600}
                className="cursor-pointer hover:text-yellow-300 transition text-xl"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>

              <div className="flex justify-start pl-1">
                <span className="text-yellow-300/40 text-xl">ᛟ</span>
              </div>
            </div>
          ))}
        </div>

        {/* optional footer / creator signature inside drawer */}
        <div className="absolute bottom-6 left-6 right-6 text-sm text-[#c8b47a] opacity-90 z-10">
          — Kshitij Mittal
        </div>
      </div>
    </div>
  );
}
