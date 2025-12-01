import ScrollAnimator from "./ScrollAnimator";

export default function Categories() {

  const categories = [
    // Fantasy
    "Epic Fantasy", "High Fantasy", "Dark Fantasy", "Urban Fantasy",
    "Sword & Sorcery", "Mythology & Folklore", "Fairy Tales", "Paranormal Fantasy",

    // Fiction
    "Literary Fiction", "Historical Fiction", "Mystery", "Thriller", "Crime Fiction",
    "Romance", "Contemporary Fiction", "Adventure", "Classics", "Short Stories",

    // Sci-Fi
    "Science Fiction", "Cyberpunk", "Space Opera", "Dystopian", "Time Travel",

    // Non-Fiction
    "Biography", "Self-Help", "History", "Philosophy", "Psychology",
    "Science & Tech", "Business", "Spirituality",

    // Youth
    "Young Adult (YA)", "Children’s Books",

    // Visual Media
    "Graphic Novels", "Manga", "Webtoons",

    // Extra
    "Poetry", "Horror", "Travel", "Cooking", "Art & Design"
  ];

  return (
    <section id="categories" className="relative py-28 px-6 md:px-12 lg:px-24">

      <ScrollAnimator direction="up" distance={60}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          <span className="text-yellow-300">Explore</span> Categories
        </h2>
      </ScrollAnimator>

      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <ScrollAnimator key={index} direction="up" distance={40} delay={index * 60}>
            <div className="group relative p-4 rounded-lg border border-yellow-300/20 
                            bg-[#0d0e14]/40 backdrop-blur-sm shadow-[0_0_20px_rgba(242,217,138,0.08)]
                            hover:border-yellow-300/40 hover:shadow-[0_0_30px_rgba(242,217,138,0.25)]
                            transition-all cursor-pointer spell-hover">

              <span className="text-xl text-[#e8d9a1] font-medium">
                {cat}
              </span>

              {/* Rune accent */}
              <span className="absolute right-3 bottom-2 text-yellow-300/40 rune-glow">
                ᛟ
              </span>
            </div>
          </ScrollAnimator>
        ))}
      </div>

    </section>
  );
}
