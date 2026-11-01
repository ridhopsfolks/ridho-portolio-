import { useEffect, useState } from "react";
import { FloatingWhatsApp, Loader } from "./components/Chrome";
import { dictionaries, type Language } from "./content";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoSection } from "./components/VideoSection";
import { About } from "./components/About";
import { Journey } from "./components/Journey";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Vision } from "./components/Vision";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { cn } from "./utils/cn";

const SECTION_IDS = ["home", "video", "about", "journey", "skills", "work", "vision", "contact"];

export default function App() {
  const [lang, setLang] = useState<Language>("id");
  const [loaded, setLoaded] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [active, setActive] = useState("home");

  const copy = dictionaries[lang];

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 680);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [loaded]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      const probe = window.scrollY + 160;
      let current = "home";

      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) current = id;
      });

      if (window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 6) {
        current = "contact";
      }

      setActive((previous) => (previous === current ? previous : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleLanguageChange = (next: Language) => {
    if (next === lang) return;
    setSwitching(true);
    window.setTimeout(() => {
      setLang(next);
      setSwitching(false);
    }, 170);
  };

  return (
    <div className="min-h-screen bg-paper">
      <Loader done={loaded} />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-[12px] focus:font-medium focus:text-paper"
      >
        {lang === "id" ? "Lewati ke konten utama" : "Skip to main content"}
      </a>

      <div
        className={cn(
          "transition-opacity duration-300 ease-out",
          switching ? "opacity-40" : "opacity-100"
        )}
      >
        <Header copy={copy} lang={lang} onLanguageChange={handleLanguageChange} active={active} />

        <main id="main">
          <Hero copy={copy} />
          <VideoSection copy={copy} />
          <About copy={copy} />
          <Journey copy={copy} />
          <Skills copy={copy} />
          <Portfolio copy={copy} />
          <Vision copy={copy} />
          <Contact copy={copy} />
        </main>

        <Footer copy={copy} />
      </div>

      <FloatingWhatsApp copy={copy} />
    </div>
  );
}
