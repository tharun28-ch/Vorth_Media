export function FounderVideo() {
  return (
    <section className="bg-black py-28">
      <div className="container-x text-center">
        <h2 className="text-4xl font-bold md:text-5xl">What We're Building at <span className="text-brand">Vorth</span></h2>
        <div className="mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-lg border border-brand bg-surface">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-surface-2">
            <button className="group flex h-20 w-20 items-center justify-center rounded-full bg-brand transition hover:scale-110 glow-brand">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-lg text-white/85">
          Our mission is to transform how brands tell their story — and turn that story into
          measurable business results.
        </p>
      </div>
    </section>
  );
}
