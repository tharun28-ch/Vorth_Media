import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
  { label: "Careers", to: "/careers" as const },
];

export function Header({ onOpenMenu: _onOpenMenu }: { onOpenMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand pulse-dot" />
          <span className="text-lg font-bold tracking-widest">VORTH MEDIA</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex md:mr-24 lg:mr-28">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-brand" }}
              className="story-link text-sm font-medium uppercase tracking-widest text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
