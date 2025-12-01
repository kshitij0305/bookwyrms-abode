import ScrollAnimator from "./ScrollAnimator";
export default function Hero() {
  return (
    <section id="hero" className="h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <ScrollAnimator direction="up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e8d9a1] mb-4">Discover Your Next Favorite Book</h1>
        </ScrollAnimator>

        <ScrollAnimator direction="up" delay={150}>
          <p className="text-lg text-[#e8d9a1] mb-8">Explore thousands of books in all genres with beautiful interactive UI.</p>
        </ScrollAnimator>

        <ScrollAnimator direction="up" delay={300}>
          <input type="text" placeholder="Search for books..." className="w-full md:w-3/4 px-4 py-3 rounded-lg bg-[#e8d9a1]/90 text-[#0d0e14] shadow" />
        </ScrollAnimator>
      </div>
    </section>
  );
}
