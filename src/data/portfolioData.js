export const personalInfo = {
  name: "Firdevs Köse",
  title: "Full-Stack & Mobil Developer",
  university: "Fırat Üniversitesi Teknoloji Fakültesi",
  department: "Yazılım Mühendisliği",
  tagline: "Gerçek dünya ihtiyaçlarına modern mobil ve web çözümleri üretiyorum.",
  bio: "Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim. C#/.NET, ilişkisel veritabanları ve modern web/mobil ekosisteminde backend geliştirme, veritabanı mimarisi ve API entegrasyonu alanlarında kendimi geliştirdim. Geliştirdiğim projeleri yalnızca birer çalışma olarak bırakmayıp Google Play Store'da test sürecine taşımaya ve canlı kullanıcı deneyimlerine dönüştürmeye odaklanıyorum.",
  email: "firdevs6452@gmail.com",
  phone: "0543 877 88 60",
  github: "https://github.com/Firdevs64",
  linkedin: "https://www.linkedin.com/in/firdevs-kose/",
  medium: "https://medium.com/@firdevs6452",
  cvFile: "/Firdevs_Kose_CV.pdf"
};

// Sadece kullanıcının belirttiği 7 Ana Teknoloji
export const coreTechnologies = [
  {
    name: "C#",
    category: "Backend & Core",
    desc: "Nesne yönelimli programlama, kurumsal mimari ve yüksek performanslı backend servisleri."
  },
  {
    name: "ASP.NET Core Web API",
    category: "API & Backend",
    desc: "Katmanlı RESTful mimari, Entity Framework Core, JWT kimlik doğrulama ve API güvenliği."
  },
  {
    name: "React",
    category: "Frontend UI",
    desc: "Modern component yapısı, Vite, hook yönetimi, responsive ve dinamik kullanıcı arayüzleri."
  },
  {
    name: "Microsoft SQL Server",
    category: "Veritabanı",
    desc: "İlişkisel veritabanı tasarımı, T-SQL, indeksleme, ilişkisel veri modelleme ve optimizasyon."
  },
  {
    name: "REST API",
    category: "Entegrasyon",
    desc: "Temiz HTTP metodları, DTO yapıları, JSON veri alışverişi ve üçüncü parti API entegrasyonları."
  },
  {
    name: "Firebase",
    category: "Cloud & Backend",
    desc: "Cloud Firestore NoSQL veri modeli, Firebase Authentication ve gerçek zamanlı veri akışı."
  },
  {
    name: "PWA (Progressive Web Apps)",
    category: "Web & Mobile",
    desc: "Service worker yapılandırması, manifest, offline çalışma desteği ve uygulama deneyimi."
  }
];

export const projectsData = [
  {
    id: "isletme-defteri",
    type: "mobile",
    title: "İşletme Defteri",
    subtitle: "Küçük İşletmeler İçin Dijital Cari & Finans Takip Uygulaması",
    description: "Küçük işletmelerin kasa durumu, gelir-gider, cari hesap ve finansal raporlamalarını tek ekrandan yönetebileceği, Google Play Store'da kapalı test aşamasında olan mobil & PWA uygulaması.",
    techStack: ["React", "Capacitor", "Firebase", "PWA", "Tailwind CSS"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.firdevskose.isletmedefteri",
    githubUrl: "https://github.com/Firdevs64/isletme-defterim",
    screens: [
      {
        id: 0,
        title: "1 / 5: Ana Sayfa & Kasa Durumu",
        image: "/projects/isletme_anasayfa.jpeg",
        leftCallout: "İşletmenin tüm gelir, gider ve cari hareketlerini anlık özetleyin",
        rightCallout: "Firebase Firestore ile anlık veri akışı ve dinamik grafikler"
      },
      {
        id: 1,
        title: "2 / 5: Cari Müşteri ve Tedarikçi Yönetimi",
        image: "/projects/isletme_cariler.jpeg",
        leftCallout: "Her müşteri ve tedarikçi için ayrı borç/alacak takibi",
        rightCallout: "Tek dokunuşla geçmiş hareketleri ve cari bakiyeleri filtreleyin"
      },
      {
        id: 2,
        title: "3 / 5: Hızlı Satış, Tahsilat & Ödeme Girişi",
        image: "/projects/isletme_islem.jpeg",
        leftCallout: "Satış, alış, ödeme ve tahsilatı tek pencereden kaydedin",
        rightCallout: "Anında kullanıcı bazlı Firestore alt koleksiyonuna yazılır"
      },
      {
        id: 3,
        title: "4 / 5: Dönemsel Raporlama & Finansal Analiz",
        image: "/projects/isletme_raporlar.jpeg",
        leftCallout: "Geçmişe dönük kâr, zarar ve nakit akışını analiz edin",
        rightCallout: "Küçük işletmeler için muhasebe defterini cebe taşıyan deneyim"
      },
      {
        id: 4,
        title: "5 / 5: Hızlı İşlemler & Kategori Menüsü",
        image: "/projects/isletme_menu.jpeg",
        leftCallout: "Kullanıcı dostu arayüz ve kategorize edilmiş modüller",
        rightCallout: "Tüm finansal fonksiyonlara tek dokunuşla erişim"
      }
    ]
  },
  {
    id: "360-sanal-tur",
    type: "web",
    title: "360° Sanal Tur",
    subtitle: "Mekanlar İçin Etkileşimli Sanal Tur & Panoramik Gezinti",
    description: "İzmir Statik Yazılım bünyesinde geliştirilen, mekânların 360° panoramik sahnelerle sanal olarak gezilmesini ve etkileşimli geçiş noktalarıyla (hotspot) keşfedilmesini sağlayan web platformu.",
    techStack: ["Photo Sphere Viewer", "Laravel", "JavaScript", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/Firdevs64",
    scenes: [
      {
        id: "tur-ana",
        name: "Sanal Tur Karşılama",
        badge: "Giriş Panoraması",
        image: "/projects/sanaltur_main.jpeg"
      },
      {
        id: "tur-ziyaretci",
        name: "Ziyaretçi Arayüzü",
        badge: "Tur Keşif Ekranı",
        image: "/projects/sanaltur_ziyaretci.jpeg"
      },
      {
        id: "tur-dashboard",
        name: "Yönetici Dashboard",
        badge: "İçerik Yönetimi",
        image: "/projects/sanaltur_dashboard.jpeg"
      },
      {
        id: "tur-turlar",
        name: "Turlar Listesi",
        badge: "Mekan Turları",
        image: "/projects/sanaltur_turlar.jpeg"
      },
      {
        id: "tur-sahneler",
        name: "Sahneler Yönetimi",
        badge: "Mekan Sahneleri",
        image: "/projects/sanaltur_sahneler.jpeg"
      },
      {
        id: "tur-baglanti",
        name: "Geçiş Noktaları",
        badge: "Hotspot & Bağlantılar",
        image: "/projects/sanaltur_baglantilar.jpeg"
      }
    ]
  },
  {
    id: "kasko-makine",
    type: "web",
    title: "Kasko Makine",
    subtitle: "İş Makineleri İçin Hızlı Kasko Teklifi & Danışmanlık Platformu",
    description: "İş makineleri sektörü için hızlı kasko ve sigorta teklif talebi oluşturma, detaylı poliçe danışmanlığı ve kurumsal referans sunumu sağlayan modern web platformu.",
    techStack: ["React", "ASP.NET Core Web API", "SQL Server", "Tailwind CSS", "REST API"],
    liveUrl: "https://www.kaskomakine.com/",
    githubUrl: "https://github.com/Firdevs64/kasko-makine",
    image: "/projects/kasko_anasayfa.jpeg",
    gallery: [
      { name: "Ana Sayfa", image: "/projects/kasko_anasayfa.jpeg" },
      { name: "Projeler", image: "/projects/kasko_projeler.jpeg" },
      { name: "Proje Detay", image: "/projects/kasko_detay.jpeg" },
      { name: "Hakkımızda", image: "/projects/kasko_hakkimizda.jpeg" }
    ]
  },
  {
    id: "grafix-ajans",
    type: "web",
    title: "Grafix Ajans",
    subtitle: "Modern Kreatif Dijital Ajans Web Sitesi",
    description: "Kreatif dijital ajanslar için modern portföy sunumu, proje vitrini ve dinamik yönetim paneline sahip, yüksek performanslı ve tam responsive kurumsal ajans web sitesi.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Netlify"],
    liveUrl: "https://grafixajans.netlify.app/",
    githubUrl: "https://github.com/Firdevs64/grafix-ajans-web-sitesi",
    image: "/projects/grafix_anasayfa.jpeg",
    gallery: [
      { name: "Ana Sayfa", image: "/projects/grafix_anasayfa.jpeg" },
      { name: "Projeler", image: "/projects/grafix_projeler.jpeg" },
      { name: "Tüm Projeler", image: "/projects/grafix_tumprojeler.jpeg" },
      { name: "Yönetici Paneli", image: "/projects/grafix_panel.jpeg" }
    ]
  },
  {
    id: "hayat-hatti",
    type: "in-progress",
    title: "Hayat Hattı",
    subtitle: "Mobil Afet İletişim Uygulaması (Bluetooth Low Energy / BLE)",
    desc: "Afet durumlarında GSM veya internet bağlantısı bulunmadığında, Bluetooth Low Energy (BLE) üzerinden acil yardım sinyali göndermeyi ve konum paylaşmayı sağlayan hayat kurtarıcı mobil uygulama.",
    statusText: "Çalışmalar sürüyor • Ekiple beraber baştan revize edilip güncelleniyor",
    githubUrl: "https://github.com/Clumsy33-ES/Hayat-Hatti",
    techTags: ["Flutter", "Dart", "BLE Mesh", "Location API"]
  },
  {
    id: "ders-pusulam",
    type: "in-progress",
    title: "Ders Pusulam",
    subtitle: "Öğrenci Çalışma, Planlama ve Verimlilik Mobil Uygulaması",
    desc: "Öğrencilerin ders programlarını, sınav tarihlerini, günlük çalışma hedeflerini ve Pomodoro odaklanma sayaçlarını yönetebildiği kapsamlı verimlilik platformu.",
    statusText: "Çalışmalar sürüyor • Baştan revize edilip güncelleniyor",
    githubUrl: "https://github.com/Firdevs64/DersPusulam",
    techTags: ["Flutter", "Dart", "Pomodoro", "SharedPreferences"]
  },
  {
    id: "suru-takip",
    type: "in-progress",
    title: "Sürü Takip",
    subtitle: "Web ve Mobil Destekli Çiftlik & Hayvan Yönetim Sistemi",
    desc: "Hayvan takibi, aşı ve sağlık süreçleri ile çiftlik görevlerinin yönetildiği platform. Groq AI entegrasyonu ve kurumsal abonelik altyapısıyla Play Store yayını için yeniden yapılandırılıyor.",
    statusText: "Çalışmalar sürüyor • Baştan revize edilip güncelleniyor",
    githubUrl: "https://github.com/Firdevs64/suru-yonetimi-takibi-frontend",
    techTags: ["React Native", "C# ASP.NET Core", "Groq AI", "SQL Server"]
  }
];
