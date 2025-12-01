import ScrollAnimator from "./ScrollAnimator";
import book1 from "../assets/books/book1.jpg";
import book2 from "../assets/books/book2.jpg";
import book3 from "../assets/books/book3.jpg";

export default function FeaturedBooks() {
  const books = [
    {
      title: "The Arcane Codex",
      author: "Elion Ward",
      tagline: "A forbidden tome of spells and reality-bending incantations.",
      cover: book1,
    },
    {
      title: "Tales of the First Flame",
      author: "Marwyn Shadow",
      tagline: "Legends of fire-born heroes and the eternal ember.",
      cover: book2,
    },
    {
      title: "Runes of Eternity",
      author: "Sylra Moon",
      tagline: "Ancient glyphs that whisper the secrets of time itself.",
      cover: book3,
    },
  ];

  return (
    <section id="featured" className="py-24 relative z-10 candle-flicker">
      <h2 className="text-4xl md:text-5xl text-center mb-14 text-[#f2d98a] font-bold tracking-wide">
        Featured Grimoires
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {books.map((book, i) => (
          <ScrollAnimator direction="up" delay={i * 200} key={i}>
            <div
              className="relative card-3d spell-hover p-4 rounded-xl 
                         border border-yellow-300/20
                         bg-[#101117]/80 backdrop-blur-md
                         shadow-[0_0_20px_rgba(242,217,138,0.12)]
                         hover:shadow-[0_0_35px_rgba(242,217,138,0.25)]
                         transition-all duration-300"
            >
              {/* Rune */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-yellow-300 text-xl rune-glow">
                ᛟ
              </span>

              {/* Cover */}
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover rounded-lg 
                           shadow-[0_0_15px_rgba(242,217,138,0.2)] 
                           border border-yellow-300/20"
              />

              {/* Text */}
              <h3 className="text-2xl text-[#f2d98a] font-semibold mt-4">
                {book.title}
              </h3>

              <p className="text-sm text-yellow-200/80 italic mb-2">
                {book.author}
              </p>

              <p className="opacity-80 text-[#e8d9a1] text-sm leading-relaxed">
                {book.tagline}
              </p>

              {/* Bottom glow line */}
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r 
                              from-transparent via-yellow-300/40 to-transparent"></div>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
