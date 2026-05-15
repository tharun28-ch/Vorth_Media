import React from "react";

type TeamMember = {
  id: string;
  role: string;
  roleLabel: string;
  nickname: string;
  initials: string;
  name: string;
  title: string;
  bio: string;
  img: string;
  linkedin?: string;
  instagram?: string;
};

const teamMembers: TeamMember[] = [
  {
    id: "monish",
    role: "strategy",
    roleLabel: "Strategy",
    nickname: "The Architect",
    initials: "MA",
    name: "Monish Aravind",
    title: "Founder & CEO",
    bio: "Monish leads brand strategy and growth roadmaps for every Vorth client. He blends storytelling with sharp business thinking to align brand and revenue from day one.",
    img: "/team/member1.jpg",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  {
    id: "kumaran",
    role: "growth",
    roleLabel: "Growth",
    nickname: "The Growth Engine",
    initials: "K",
    name: "Kumaran",
    title: "Marketing Head",
    bio: "Kumaran owns performance marketing and full funnel scaling. He's obsessed with creative-led growth and treats every campaign like it's his own legacy.",
    img: "/team/member2.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "sanjai",
    role: "content",
    roleLabel: "Content",
    nickname: "The Story Engine",
    initials: "SS",
    name: "Sanjai Suresh",
    title: "Content Production Head",
    bio: "Sanjai runs end-to-end production and the creative supply chain. He turns ambitious ideas into shipped work with calm execution and zero drama.",
    img: "/team/member3.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "shashank",
    role: "tech",
    roleLabel: "Tech",
    nickname: "The System Builder",
    initials: "SH",
    name: "Shashank",
    title: "Tech Head",
    bio: "Shashank architects the tech backbone behind every Vorth system from automation pipelines to digital infrastructure that keeps everything running at scale.",
    img: "/team/member4.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "vaishnavi",
    role: "editor",
    roleLabel: "Editors",
    nickname: "The Cut Master",
    initials: "V",
    name: "Vaishnavi",
    title: "Lead Editor",
    bio: "Vaishnavi brings every frame to life with precision editing and a sharp eye for pacing. She ensures every piece of content feels polished and scroll-stopping.",
    img: "/team/member5.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "tharun",
    role: "tech",
    roleLabel: "Tech",
    nickname: "The Design Engineer",
    initials: "T",
    name: "Tharun",
    title: "Tech Product Designer",
    bio: "Tharun bridges the gap between high-end aesthetics and technical feasibility. He builds design systems and digital interfaces that feel as good as they look.",
    img: "/team/member7jpg.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "hemanth",
    role: "editor",
    roleLabel: "Editors",
    nickname: "The Frame Shaper",
    initials: "H",
    name: "Hemanth",
    title: "Lead Editor",
    bio: "Hemanth crafts cinematic edits that elevate raw footage into compelling narratives. His attention to rhythm and detail makes every deliverable hit different.",
    img: "/team/member6.jpg",
    linkedin: "https://www.linkedin.com/",
  },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const prev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="team" className="team-section">
      <div className="team-heading">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-10 bg-brand/60" />
          <p className="team-eyebrow mb-0">The Crew</p>
          <div className="h-px w-10 bg-brand/60" />
        </div>
        <h2 className="team-title">
          Built by people who <span className="text-brand">obsess</span> over the craft.
        </h2>
        <p className="team-subtitle">
          Seven minds one studio Strategy tech story design and performance under one roof
        </p>
      </div>

      {/* ── Mobile/Tablet Slider (hidden on lg) ── */}
      <div className="team-slider-wrap lg:hidden">
        <div className="relative mx-auto max-w-[340px] sm:max-w-[720px] px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="team-card team-card-glow" data-role={teamMembers[currentIndex].role}>
              <div className="card-img-wrap">
                <img src={teamMembers[currentIndex].img} alt={teamMembers[currentIndex].name} />
                <div className="card-nickname" style={{ opacity: 1, transform: 'translateY(0)' }}>
                  {teamMembers[currentIndex].nickname}
                </div>
              </div>

              <div className="card-body">
                <span className="role-badge">{teamMembers[currentIndex].roleLabel}</span>
                <p className="member-name">{teamMembers[currentIndex].name}</p>
                <p className="member-title">{teamMembers[currentIndex].title}</p>
                <div className="member-links mt-4">
                  {teamMembers[currentIndex].linkedin && (
                    <a
                      href={teamMembers[currentIndex].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {teamMembers[currentIndex].instagram && (
                    <a
                      href={teamMembers[currentIndex].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Instagram"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Card 2 (Visible only on sm+) */}
            <div className="team-card team-card-glow hidden sm:block" data-role={teamMembers[(currentIndex + 1) % teamMembers.length].role}>
              <div className="card-img-wrap">
                <img src={teamMembers[(currentIndex + 1) % teamMembers.length].img} alt={teamMembers[(currentIndex + 1) % teamMembers.length].name} />
                <div className="card-nickname" style={{ opacity: 1, transform: 'translateY(0)' }}>
                  {teamMembers[(currentIndex + 1) % teamMembers.length].nickname}
                </div>
              </div>

              <div className="card-body">
                <span className="role-badge">{teamMembers[(currentIndex + 1) % teamMembers.length].roleLabel}</span>
                <p className="member-name">{teamMembers[(currentIndex + 1) % teamMembers.length].name}</p>
                <p className="member-title">{teamMembers[(currentIndex + 1) % teamMembers.length].title}</p>
                <div className="member-links mt-4">
                  {teamMembers[(currentIndex + 1) % teamMembers.length].linkedin && (
                    <a
                      href={teamMembers[(currentIndex + 1) % teamMembers.length].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="LinkedIn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {teamMembers[(currentIndex + 1) % teamMembers.length].instagram && (
                    <a
                      href={teamMembers[(currentIndex + 1) % teamMembers.length].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label="Instagram"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/80 transition active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="flex gap-1.5">
              {teamMembers.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-4 bg-brand" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/80 transition active:scale-95"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Desktop Grid (visible on lg) ── */}
      <div className="team-grid hidden lg:flex">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card" data-role={member.role}>
            <div className="card-img-wrap">
              <img src={member.img} alt={member.name} />
              <div className="card-nickname">{member.nickname}</div>
            </div>

            <div className="card-body">
              <span className="role-badge">{member.roleLabel}</span>
              <p className="member-name">{member.name}</p>
              <p className="member-title">{member.title}</p>
              <p className="member-bio">{member.bio}</p>

              <div className="member-links">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Instagram"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
