export type Language = "id" | "en";

export const CONTACT_LINKS = {
  cv: "https://drive.google.com/file/d/1DJX8k1iSouOKqj-cNth2qjhdBWLr7I0L/view?usp=drivesdk",
  drive: "https://drive.google.com/drive/folders/1M_7Ktts3rpC4C_ndQjZ7mN0sIZUc_BFM",
  whatsapp: "https://wa.me/6287756723041",
  instagram: "https://www.instagram.com/r.benar69",
  email: "mailto:ridhopermanasaputra@gmail.com",
  behance: "https://www.behance.net/",
} as const;

export const YOUTUBE_URL = "https://youtube.com/shorts/hWdYu_0yM2Y?si=nSZyNZuNIV9TnH0X";
export const YOUTUBE_ID = "hWdYu_0yM2Y";

export type Project = {
  id: string;
  title: string;
  category: "Video Editing" | "Motion Graphic" | "Poster Design" | "Mockup Design" | "Social Media Design";
  image: string;
  href: string;
  year: string;
  tools: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "donut",
    title: "Poster Donut Design",
    category: "Poster Design",
    image: "/images/work-donut.svg",
    href: "https://www.behance.net/gallery/251467623/Poster-Donut-Design",
    year: "2025",
    tools: ["Canva", "Art Direction"],
    featured: true,
  },
  {
    id: "plane",
    title: "Plane Flight Motion Graphic",
    category: "Motion Graphic",
    image: "/images/work-plane.svg",
    href: "https://www.behance.net/gallery/255198933/Plane-Flight-Motion-Graphic",
    year: "2025",
    tools: ["Alight Motion"],
    featured: true,
  },
  {
    id: "grab",
    title: "Grab Fake Ads Motion Graphic",
    category: "Motion Graphic",
    image: "/images/work-grab.svg",
    href: "https://www.behance.net/gallery/255198117/Grab-Fake-Ads-Motion-Graphic",
    year: "2025",
    tools: ["Alight Motion"],
    featured: true,
  },
  {
    id: "book",
    title: "Book Mock Up — Persona 3 Theme",
    category: "Mockup Design",
    image: "/images/work-book.svg",
    href: "https://www.behance.net/gallery/250016745/Book-Mock-Up-Persona-3-Theme",
    year: "2025",
    tools: ["Canva"],
    featured: true,
  },
  {
    id: "pins",
    title: "Pin and Keychain Mock Up Design",
    category: "Mockup Design",
    image: "/images/work-pins.svg",
    href: "https://www.behance.net/gallery/250016785/Pin-and-Keychain-Mock-Up-Design",
    year: "2025",
    tools: ["Canva"],
    featured: true,
  },
];

export const id = {
  meta: {
    role: "Creative Visual Designer & Video Editor",
    greeting: "Halo, saya",
    name: "Ridho Permana Saputra",
    headlineTop: "Turning Ideas Into",
    headlineAccent: "Engaging Visual Stories.",
    subheadline: "Video Editor | Motion Graphic Artist | Graphic Designer",
    description:
      "Saya membantu mengubah ide, momen, dan pesan menjadi video, motion graphic, serta desain grafis yang menarik dan mudah dipahami.",
    available: "Terbuka untuk kolaborasi",
    location: "Tulangan, Sidoarjo — Indonesia",
    ctaWork: "Explore My Works",
    ctaCv: "Download CV",
    ctaContact: "Contact Me",
    portraitAlt: "Foto profil profesional Ridho Permana Saputra",
    scroll: "Scroll untuk eksplorasi",
    imageCaption: "Creative in progress",
    photoNote: "Read-only portfolio",
    stats: [
      { value: "03", label: "Disiplin kreatif" },
      { value: "05", label: "Karya pilihan" },
      { value: "2025", label: "Mulai berkarya" },
    ],
    marquee: ["Video Editing", "Motion Graphic", "Graphic Design", "Poster Design", "Social Media Design", "Visual Storytelling"],
  },
  nav: {
    home: "Home",
    video: "Video",
    about: "About",
    journey: "Journey",
    skills: "Skills",
    work: "Works",
    vision: "Vision",
    contact: "Contact",
    menu: "Buka menu navigasi",
    close: "Tutup menu navigasi",
    language: "Bahasa",
  },
  video: {
    eyebrow: "Personal Branding",
    title: "Personal Branding Video",
    description: "Kenali saya lebih dekat melalui video personal branding berikut.",
    supporting:
      "Sebuah perkenalan singkat tentang siapa saya, bagaimana saya melihat visual, dan hal-hal yang membuat saya terus belajar di bidang kreatif.",
    play: "Putar video",
    playing: "Sedang diputar",
    external: "Tonton di YouTube",
    duration: "Shorts • 00:20",
    points: ["Perkenalan singkat", "Cara saya berkarya", "Di balik proses kreatif"],
    note: "Video ditampilkan melalui YouTube. Pengunjung hanya dapat menonton, tanpa mengunggah atau mengganti.",
  },
  about: {
    eyebrow: "About",
    title: "A Little About Me",
    intro:
      "Saya adalah siswa Desain Komunikasi Visual dari SMK Informatika Sumber Ilmu Tulangan yang berfokus pada video editing, motion graphic, dan graphic design. Saya senang mengubah ide dan momen menjadi konten visual yang jelas, kreatif, dan komunikatif.",
    body:
      "Saya terus mengembangkan kemampuan editing, storytelling visual, dan desain grafis untuk menghasilkan karya yang berkualitas. Saya juga terbuka untuk belajar hal baru, bekerja sama dalam tim, dan berkontribusi pada setiap proyek kreatif.",
    infoTitle: "Profil singkat",
    fields: [
      { label: "Nama", value: "Ridho Permana Saputra" },
      { label: "Tanggal lahir", value: "18 Oktober 2006" },
      { label: "Pendidikan", value: "SMK Informatika Sumber Ilmu Tulangan" },
      { label: "Periode", value: "2025 — sekarang" },
      { label: "Jurusan", value: "Desain Komunikasi Visual" },
      { label: "Passion", value: "Video Editing, Motion Graphic, Graphic Design" },
    ],
    cv: "Download CV",
    cvNote: "CV resmi dalam format Google Drive. Hanya dapat dilihat dan diunduh.",
    focusTitle: "Fokus saya",
    focus: ["Editing yang rapi & ritmis", "Motion yang mendukung cerita", "Desain yang komunikatif"],
  },
  journey: {
    eyebrow: "The Path",
    title: "My Creative Journey",
    description:
      "Perjalanan kecil yang membentuk cara saya melihat ide, cerita, dan detail visual — dari ruang kelas hingga proyek kreatif pertama.",
    items: [
      {
        period: "2025 — Sekarang",
        title: "Siswa Desain Komunikasi Visual",
        place: "SMK Informatika Sumber Ilmu Tulangan",
        description:
          "Mulai mendalami dasar desain, tipografi, komposisi, dan storytelling visual sebagai fondasi karya sehari-hari.",
      },
      {
        period: "Proyek Sekolah",
        title: "Proyek Desain Grafis Sekolah",
        place: "Poster, feed Instagram & materi promosi",
        description:
          "Membuat poster, feed Instagram, dan materi promosi sekolah menggunakan Canva dengan pendekatan yang rapi dan mudah dipahami.",
      },
      {
        period: "Proyek Mandiri",
        title: "Proyek Motion Graphic",
        place: "Konten media sosial",
        description:
          "Membuat video motion graphic untuk konten media sosial menggunakan Alight Motion, dari menyusun aset hingga timing animasi.",
      },
      {
        period: "Saat Ini",
        title: "Terus Mengasah Kemampuan",
        place: "Video editing, motion graphic & graphic design",
        description:
          "Mengembangkan kemampuan video editing, motion graphic, dan graphic design sambil membangun portofolio yang lebih matang.",
      },
    ],
    quote: "Masih belajar. Masih berkarya. Selalu penasaran.",
    quoteNote: "Setiap proyek adalah kesempatan untuk tumbuh satu langkah lebih baik.",
  },
  skills: {
    eyebrow: "Capabilities",
    title: "My Skills",
    description:
      "Motion Graphic menjadi kekuatan utama saya, diikuti Video Editing dan Graphic Design — didukung tools sederhana yang saya gunakan setiap hari.",
    coreLabel: "Keahlian inti",
    toolsLabel: "Tools & pendukung",
    core: [
      {
        key: "motion",
        title: "Motion Graphic",
        description:
          "Keahlian utama saya: menghidupkan ide dengan animasi yang mendukung pesan, bukan mengalihkannya.",
        level: 94,
        tags: ["Keyframes", "Easing", "Kinetic type"],
      },
      {
        key: "editing",
        title: "Video Editing",
        description: "Menyusun footage menjadi cerita yang mengalir, ritmis, dan nyaman ditonton.",
        level: 88,
        tags: ["Storytelling", "Transitions", "Sound sync"],
      },
      {
        key: "graphic",
        title: "Graphic Design",
        description: "Merancang komposisi visual yang bersih dengan hierarki yang jelas dan mudah dipahami.",
        level: 82,
        tags: ["Layout", "Typography", "Color"],
      },
    ],
    extra: [
      { title: "Poster Design", description: "Komposisi poster yang komunikatif." },
      { title: "Instagram Feed Design", description: "Feed yang konsisten dan rapi." },
      { title: "Canva", description: "Cepat, fleksibel, dan kolaboratif." },
      { title: "Alight Motion", description: "Motion graphic dari layar kecil." },
    ],
    currentlyLearning: "Saat ini mendalami",
    learningNote: "Motion Graphic adalah kekuatan utama saya, diikuti Video Editing dan Graphic Design.",
    learning: ["Video editing lanjutan", "Motion storytelling", "Design system"],
  },
  work: {
    eyebrow: "Portfolio",
    title: "Selected Creative Works",
    description:
      "Pilihan kecil dari eksplorasi visual yang saya kerjakan — poster, motion graphic, mockup, hingga desain media sosial.",
    all: "Semua Karya",
    view: "View Project",
    viewAll: "View All Projects",
    driveNote: "Arsip portofolio lengkap tersedia di Google Drive.",
    openNote: "Karya terbuka di tab baru (Behance / Google Drive).",
    count: "karya",
    empty: "Karya untuk kategori ini sedang disiapkan.",
    featured: "Selected",
  },
  vision: {
    eyebrow: "Looking Ahead",
    title: "My Vision",
    quote:
      "Menjadi Video Editor dan Motion Graphic Artist profesional yang mampu mengubah ide menjadi konten visual yang menarik, bermakna, dan menghibur.",
    body:
      "Saya percaya visual yang baik bukan hanya tentang terlihat indah, tetapi tentang menyampaikan pesan dengan jernih. Visi ini yang menjadi arah saya dalam setiap proses belajar dan berkarya.",
    goals: [
      { title: "Video Editor Profesional", description: "Menguasai alur editing, color, dan sound untuk cerita yang utuh." },
      { title: "Motion Graphic Artist", description: "Membangun animasi yang relevan, halus, dan punya karakter." },
      { title: "Kolaborator Kreatif", description: "Tumbuh bersama tim dan proyek visual yang berdampak." },
    ],
    badge: "Arah berikutnya",
    timeline: {
      title: "Untitled Reel 2026",
      track: "Creative journey",
      clips: ["Storyboard", "Edit", "Motion", "Color", "Delivery"],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's Create Something Engaging Together",
    description:
      "Terbuka untuk kolaborasi, proyek video editing, motion graphic, desain poster, maupun kesempatan belajar dan magang.",
    available: "Sedang terbuka untuk proyek baru",
    whatsapp: { label: "WhatsApp", value: "0877-5672-3041", cta: "Kirim pesan" },
    instagram: { label: "Instagram", value: "@r.benar69", cta: "Lihat profil" },
    email: { label: "Email", value: "ridhopermanasaputra@gmail.com", cta: "Tulis email" },
    note: "Balasan biasanya dalam 1–2 hari kerja. Mari mulai dari sebuah ide sederhana.",
    response: "Respon cepat via WhatsApp",
  },
  footer: {
    tagline: "Turning Ideas Into Visual Stories.",
    summary: "Creative visual designer, video editor, dan motion graphic artist yang berbasis di Sidoarjo, Indonesia.",
    navTitle: "Navigasi",
    socialTitle: "Terhubung",
    rights: "© 2026 Ridho Permana Saputra. All Rights Reserved.",
    backToTop: "Kembali ke atas",
    credit: "Dirancang tenang, dibuat dengan detail.",
    readOnly: "Portfolio read-only",
  },
  common: {
    downloadCv: "Download CV",
    externalLink: "Buka tautan",
    openMenu: "Menu",
    based: "Berbasis di",
  },
};

export const en: typeof id = {
  meta: {
    role: "Creative Visual Designer & Video Editor",
    greeting: "Hello, I'm",
    name: "Ridho Permana Saputra",
    headlineTop: "Turning Ideas Into",
    headlineAccent: "Engaging Visual Stories.",
    subheadline: "Video Editor | Motion Graphic Artist | Graphic Designer",
    description:
      "I help turn ideas, moments, and messages into engaging videos, motion graphics, and graphic designs that are clear and easy to understand.",
    available: "Open for collaboration",
    location: "Tulangan, Sidoarjo — Indonesia",
    ctaWork: "Explore My Works",
    ctaCv: "Download CV",
    ctaContact: "Contact Me",
    portraitAlt: "Professional portrait of Ridho Permana Saputra",
    scroll: "Scroll to explore",
    imageCaption: "Creative in progress",
    photoNote: "Read-only portfolio",
    stats: [
      { value: "03", label: "Creative disciplines" },
      { value: "05", label: "Selected works" },
      { value: "2025", label: "Started creating" },
    ],
    marquee: ["Video Editing", "Motion Graphic", "Graphic Design", "Poster Design", "Social Media Design", "Visual Storytelling"],
  },
  nav: {
    home: "Home",
    video: "Video",
    about: "About",
    journey: "Journey",
    skills: "Skills",
    work: "Works",
    vision: "Vision",
    contact: "Contact",
    menu: "Open navigation menu",
    close: "Close navigation menu",
    language: "Language",
  },
  video: {
    eyebrow: "Personal Branding",
    title: "Personal Branding Video",
    description: "Get to know me better through the following personal branding video.",
    supporting:
      "A short introduction to who I am, how I see visuals, and the things that keep me learning in the creative field.",
    play: "Play video",
    playing: "Now playing",
    external: "Watch on YouTube",
    duration: "Shorts • 00:20",
    points: ["A quick introduction", "How I approach work", "Behind the creative process"],
    note: "The video is hosted on YouTube. Visitors can watch only — no uploads or replacements.",
  },
  about: {
    eyebrow: "About",
    title: "A Little About Me",
    intro:
      "I am a Visual Communication Design student at SMK Informatika Sumber Ilmu Tulangan, focused on video editing, motion graphics, and graphic design. I enjoy turning ideas and moments into visual content that is clear, creative, and communicative.",
    body:
      "I keep developing my editing, visual storytelling, and graphic design skills to produce quality work. I am also open to learning new things, working with a team, and contributing to every creative project.",
    infoTitle: "Quick profile",
    fields: [
      { label: "Name", value: "Ridho Permana Saputra" },
      { label: "Date of birth", value: "October 18, 2006" },
      { label: "Education", value: "SMK Informatika Sumber Ilmu Tulangan" },
      { label: "Period", value: "2025 — present" },
      { label: "Major", value: "Visual Communication Design" },
      { label: "Passion", value: "Video Editing, Motion Graphic, Graphic Design" },
    ],
    cv: "Download CV",
    cvNote: "Official CV hosted on Google Drive. View and download only.",
    focusTitle: "My focus",
    focus: ["Clean & rhythmic editing", "Motion that supports the story", "Design that communicates"],
  },
  journey: {
    eyebrow: "The Path",
    title: "My Creative Journey",
    description:
      "Small milestones that shape the way I see ideas, stories, and visual details — from the classroom to my first creative projects.",
    items: [
      {
        period: "2025 — Present",
        title: "Visual Communication Design Student",
        place: "SMK Informatika Sumber Ilmu Tulangan",
        description:
          "Started exploring the foundations of design, typography, composition, and visual storytelling as the base of everyday work.",
      },
      {
        period: "School Project",
        title: "School Graphic Design Project",
        place: "Posters, Instagram feeds & promotional materials",
        description:
          "Created school posters, Instagram feeds, and promotional materials with Canva using a clean, easy-to-understand approach.",
      },
      {
        period: "Independent Project",
        title: "Motion Graphic Project",
        place: "Social media content",
        description:
          "Produced motion graphic videos for social media using Alight Motion, from arranging assets to timing the animation.",
      },
      {
        period: "Right Now",
        title: "Continuing to Refine the Craft",
        place: "Video editing, motion graphic & graphic design",
        description:
          "Developing video editing, motion graphic, and graphic design skills while building a more mature portfolio.",
      },
    ],
    quote: "Still learning. Still creating. Always curious.",
    quoteNote: "Every project is a chance to grow one step better.",
  },
  skills: {
    eyebrow: "Capabilities",
    title: "My Skills",
    description:
      "Motion Graphic is my strongest skill, followed by Video Editing and Graphic Design — supported by the simple tools I use every day.",
    coreLabel: "Core skills",
    toolsLabel: "Tools & support",
    core: [
      {
        key: "motion",
        title: "Motion Graphic",
        description:
          "My strongest skill: bringing ideas to life with animation that supports the message instead of distracting from it.",
        level: 94,
        tags: ["Keyframes", "Easing", "Kinetic type"],
      },
      {
        key: "editing",
        title: "Video Editing",
        description: "Shaping footage into a story that flows, finds its rhythm, and feels comfortable to watch.",
        level: 88,
        tags: ["Storytelling", "Transitions", "Sound sync"],
      },
      {
        key: "graphic",
        title: "Graphic Design",
        description: "Designing clean visual compositions with a clear hierarchy that is easy to understand.",
        level: 82,
        tags: ["Layout", "Typography", "Color"],
      },
    ],
    extra: [
      { title: "Poster Design", description: "Communicative poster composition." },
      { title: "Instagram Feed Design", description: "A consistent, tidy feed." },
      { title: "Canva", description: "Fast, flexible, and collaborative." },
      { title: "Alight Motion", description: "Motion graphics from a small screen." },
    ],
    currentlyLearning: "Currently exploring",
    learningNote: "Motion Graphic is my strongest skill, followed by Video Editing and Graphic Design.",
    learning: ["Advanced video editing", "Motion storytelling", "Design systems"],
  },
  work: {
    eyebrow: "Portfolio",
    title: "Selected Creative Works",
    description:
      "A small selection of visual explorations — posters, motion graphics, mockups, and social media design.",
    all: "All Works",
    view: "View Project",
    viewAll: "View All Projects",
    driveNote: "The full portfolio archive is available on Google Drive.",
    openNote: "Projects open in a new tab (Behance / Google Drive).",
    count: "works",
    empty: "Works in this category are being prepared.",
    featured: "Selected",
  },
  vision: {
    eyebrow: "Looking Ahead",
    title: "My Vision",
    quote:
      "To become a professional Video Editor and Motion Graphic Artist, able to turn ideas into visual content that is engaging, meaningful, and entertaining.",
    body:
      "I believe good visuals are not only about looking beautiful, but about delivering a message clearly. This vision guides my direction in every learning process and every piece of work.",
    goals: [
      { title: "Professional Video Editor", description: "Mastering editing flow, color, and sound for complete stories." },
      { title: "Motion Graphic Artist", description: "Building animation that is relevant, smooth, and full of character." },
      { title: "Creative Collaborator", description: "Growing with teams and visual projects that make an impact." },
    ],
    badge: "The next direction",
    timeline: {
      title: "Untitled Reel 2026",
      track: "Creative journey",
      clips: ["Storyboard", "Edit", "Motion", "Color", "Delivery"],
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's Create Something Engaging Together",
    description:
      "Open for collaboration, video editing projects, motion graphics, poster design, as well as learning and internship opportunities.",
    available: "Currently open for new projects",
    whatsapp: { label: "WhatsApp", value: "0877-5672-3041", cta: "Send a message" },
    instagram: { label: "Instagram", value: "@r.benar69", cta: "View profile" },
    email: { label: "Email", value: "ridhopermanasaputra@gmail.com", cta: "Write an email" },
    note: "Replies usually within 1–2 working days. Let's start with a simple idea.",
    response: "Fast response via WhatsApp",
  },
  footer: {
    tagline: "Turning Ideas Into Visual Stories.",
    summary: "Creative visual designer, video editor, and motion graphic artist based in Sidoarjo, Indonesia.",
    navTitle: "Navigation",
    socialTitle: "Connect",
    rights: "© 2026 Ridho Permana Saputra. All Rights Reserved.",
    backToTop: "Back to top",
    credit: "Thoughtfully designed, carefully made.",
    readOnly: "Read-only portfolio",
  },
  common: {
    downloadCv: "Download CV",
    externalLink: "Open link",
    openMenu: "Menu",
    based: "Based in",
  },
};

export const dictionaries = { id, en };
export type Copy = typeof id;
