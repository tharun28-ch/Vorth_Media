import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { MenuOverlay } from "./MenuOverlay";
import { FloatingMenu } from "./FloatingMenu";
import { Footer } from "./FinalCTA";

import { LoadingScreen } from "./LoadingScreen";

export function SiteLayout({
  children,
  hideFooter = false,
  footerMinimal = false,
}: {
  children: ReactNode;
  hideFooter?: boolean;
  footerMinimal?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white">
      <LoadingScreen />
      <Header onOpenMenu={() => setOpen(true)} />
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
      <main>{children}</main>
      <FloatingMenu onClick={() => setOpen(true)} />
      {!hideFooter && <Footer minimal={footerMinimal} />}
    </div>
  );
}
