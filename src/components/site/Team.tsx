import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";

const TEAM = [
  { nickname: "The Architect", name: "Monish Aravind", role: "Founder & CEO", initials: "MA", image: "/team/member1.png", linkedin: "https://www.linkedin.com/", instagram: "https://www.instagram.com/", bio: "Monish leads brand strategy and growth roadmaps for every Vorth client. He blends storytelling with sharp business thinking to align brand and revenue from day one." },
  { nickname: "The Growth Engine", name: "Kumaran", role: "Marketing Head", initials: "K", image: "/team/member2.png", linkedin: "https://www.linkedin.com/", bio: "Kumaran owns performance marketing and full-funnel scaling. He's obsessed with creative-led growth and treats every campaign like it's his own legacy." },
  { nickname: "The System Builder", name: "Shashank", role: "Tech Head", initials: "SH", image: "/team/member4.png", linkedin: "https://www.linkedin.com/", bio: "Shashank architects the tech backbone behind every Vorth system — from automation pipelines to digital infrastructure that keeps everything running at scale." },
  { nickname: "The Story Engine", name: "Sanjai Suresh", role: "Content Production Head", initials: "SS", image: "/team/member3.png", linkedin: "https://www.linkedin.com/", bio: "Sanjai runs end-to-end production and the creative supply chain. He turns ambitious ideas into shipped work with calm execution and zero drama." },
  { nickname: "The Cut Master", name: "Vaishnavi", role: "Lead Editor", initials: "V", image: "/team/member5.png", linkedin: "https://www.linkedin.com/", bio: "Vaishnavi brings every frame to life with precision editing and a sharp eye for pacing. She ensures every piece of content feels polished and scroll-stopping." },
  { nickname: "The Frame Shaper", name: "Hemanth", role: "Lead Editor", initials: "H", image: "/team/member6.png", linkedin: "https://www.linkedin.com/", bio: "Hemanth crafts cinematic edits that elevate raw footage into compelling narratives. His attention to rhythm and detail makes every deliverable hit different." },
];

export function Team() {
  return (
    <section className="bg-black py-28 text-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand">
            <span className="h-px w-8 bg-brand" />
            The Crew
            <span className="h-px w-8 bg-brand" />
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Built by people who <span className="text-brand">obsess</span> over the craft.
          </h2>
          <p className="mt-4 text-white/60">
            Six minds, one studio. Strategy, tech, story, design and performance — under one roof.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black"
            >
              <div className="absolute left-4 top-4 z-20 inline-flex items-center rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                {m.nickname}
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-7xl font-bold tracking-tighter text-white/20">
                {m.initials}
              </div>
              <img
                src={m.image}
                alt={m.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16 transition-opacity duration-300 group-hover:opacity-0">
                <div className="text-xl font-bold text-white">{m.name}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/60">{m.role}</div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full flex-col justify-end bg-black p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                <div className="text-xl font-bold text-white">{m.name}</div>
                <div className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/60">{m.role}</div>
                <p className="text-sm leading-relaxed text-white/85">{m.bio}</p>
                <div className="mt-4 flex items-center gap-3">
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {m.instagram && (
                    <a
                      href={m.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on Instagram`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
