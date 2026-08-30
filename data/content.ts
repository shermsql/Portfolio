export const site = {
  name: "Batuhan Kurkut",
  handle: "shermsql",
  role: "Full-Stack Geliştirici",
  location: "Bilecik, Türkiye",
  email: "merhaba@skelvric.com",
  phone: "+90 535 734 45 32",
  cvPath: "/Resume/Batuhan Kurkut.pdf",
  cvFileName: "Batuhan Kurkut.pdf"
};

export const socialLinks = [
  { label: "GitHub", url: `https://github.com/${site.handle}`, icon: "github" as const },
  { label: "LinkedIn", url: `https://linkedin.com/in/${site.handle}`, icon: "linkedin" as const },
  { label: "Instagram", url: `https://instagram.com/${site.handle}`, icon: "instagram" as const }
];

export const navLinks = [
  { label: "Hakkında", href: "#About" },
  { label: "Deneyim", href: "#Experience" },
  { label: "Projeler", href: "#Projects" },
  { label: "Yetenekler", href: "#Skills" },
  { label: "Sertifikalar", href: "#Certificates" },
  { label: "İletişim", href: "#Contact" }
];

export const stats = [
  { num: "3+", label: "Uçtan uca yayınlanmış proje." },
  { num: "100%", label: "Uzaktan, küresel müşterilere teslimat." },
  { num: "Solo", label: "Mimari, geliştirme ve DevOps tek elden." }
];

export const about = {
  paragraph:
    "Güvenli ve ölçeklenebilir web uygulamaları geliştirmede uzmanlaşmış, sonuç odaklı bir Full-Stack Geliştiriciyim. Kendi markam Skelvric altında; uçtan uca web, mobil ve SaaS çözümleri tasarlıyor, yazıyor ve tek başıma yayına alıyorum. Siber güvenlik eğitimimden gelen bakış açısıyla, her projede güvenliği sonradan eklenen bir özellik değil, mimarinin bir parçası olarak ele alıyorum.",
};

export const experience = [
  {
    title: "Kurucu & Full Stack Developer",
    org: "Skelvric",
    date: "2026 — Halen",
    bullets: [
      "Tamamen uzaktan (remote) olarak küresel ölçekte müşterilere uçtan uca özel web, mobil ve SaaS çözümleri geliştirdim.",
      "Yazılım mimarisi, proje yönetimi, iş geliştirme ve tüm full-stack geliştirme süreçlerini tek başıma yönettim.",
      "Zamanında teslim edilen, ölçeklenebilir, temiz kodlu ve yüksek kaliteli yazılım sistemleri inşa ettim."
    ],
  },
  {
    title: "Siber Güvenlik Öğrencisi",
    org: "Siber Vatan",
    date: "2025 — 2026",
    bullets: [
      "Siber güvenlik alanında uygulamalı eğitimlere katıldım.",
      "Ağ güvenliği, web güvenliği, Linux ve temel sızma testleri konularında çalışmalar yürüttüm.",
      "CTF (Bayrağı Yakala) etkinliklerinde ve proje geliştirme süreçlerinde yer aldım."
    ],
  },
  {
    title: "Bilişim Teknolojileri Stajyeri",
    org: "Doğa Okulları",
    date: "2022 — 2024",
    bullets: [
      "Bilgisayar toplama, kurulum, teknik destek ve ağ yapılandırması gerçekleştirdim.",
      "Donanım ve yazılım sorunları için kurulum ve hata giderme (troubleshooting) süreçlerini yürüttüm."
    ],
  },
];

export const projects = [
  {
    title: "Skelvric",
    description:
      "Kendi yazılım ajansımın resmi web sitesi. Next.js App Router ve MongoDB ile uçtan uca tasarladım, geliştirdim ve yayına aldım — vitrin, hizmetler ve iletişim akışlarını tek çatı altında topluyor.",
    tags: ["Next.js", "PostCSS", "Tailwind"],
    badge: { text: "Canlı", tone: "live" as const },
    icon: "code" as const,
    link: { label: "Görüntüle", url: "https://www.skelvric.com" },
    repoUrl: "https://github.com/Skelvric/Skelvric"
  },
  {
    title: "SkelPass",
    description:
      "AES-256-GCM şifreleme, oran sınırlama, CSRF koruması ve güçlendirilmiş web tabanlı şifre yöneticisi. Güvenlik ve kullanılabilirliği aynı anda önceliklendirerek geliştirdim.",
    tags: ["Next.js", "AES-256-GCM", "JWT"],
    badge: { text: "Canlı", tone: "live" as const },
    icon: "vault" as const,
    link: { label: "Görüntüle", url: "https://pass.skelvric.com" },
    repoUrl: "https://github.com/Skelvric/SkelPass"
  },
  {
    title: "SkelPass Desktop",
    description:
      "SkelPass'ın masaüstü versiyonu. Aynı güvenlik altyapısını yerel bir uygulama deneyimine taşıyor; şu an yalnızca Windows için derlenebiliyor, macOS ve Linux desteği yol haritasında.",
    tags: ["Electron", "JavaScript" ],
    badge: { text: "Yalnızca Windows", tone: "win" as const },
    icon: "desktop" as const,
    link: { label: "İndir", url: "https://github.com/Skelvric/SkelPass-Desktop/releases/download/v0.2.0/SkelPass.Setup.0.2.0.exe" },
    repoUrl: "https://github.com/Skelvric/SkelPass-Desktop"
  }
];

export const skills = [
  "Ön Yüz Geliştirme",
  "Sunucu Mimarisi",
  "Veritabanı Yönetimi",
  "API Entegrasyonu",
  "Güvenli Kodlama",
  "Sistem Entegrasyonu"
];

export const certificates = [
  { title: "Türkiye Siber Vatan Programı 2026 Dönemi", issuer: "Siber Vatan", year: "2026", url: "https://drdogrulama.sanayi.gov.tr/tr/verify/26486802701678" },
  { title: "Dijital Adli Bilişim", issuer: "BTK Akademi", year: "2025", url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=qKrheZG6el" },
  { title: "Siber Güvenliğe Giriş", issuer: "BTK Akademi", year: "2025", url: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=rKjhaDjVjj" }
];

export const education = [
  { year: "2027", title: "Bilgisayar Programcılığı", school: "Bilecik Şeyh Edebali Üniversitesi" },
  { year: "2024", title: "Yazılım Geliştirme", school: "Hacı Sevim Yıldız-1 Mesleki ve Teknik Anadolu Lisesi" }
];

export const languages = [
  { name: "Türkçe", level: "Ana Dil", percent: 100 },
  { name: "İngilizce", level: "İyi Düzey", percent: 72 }
];
