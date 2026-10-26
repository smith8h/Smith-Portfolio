// Single source of truth for all portfolio content.
// Every design reads from here, so copy changes happen in one place.

export const profile = {
    name: "Hussein Shakir",
    firstName: "Hussein",
    lastName: "Shakir",
    handle: "smith8h",
    email: "husseinshakir81@gmail.com",
    location: "Baghdad, Iraq",
    since: 2019,
    available: true,
    resume: "/assets/resume.pdf",
    avatar: "/assets/avatar.jpg",
    portrait: "/assets/me.jpg",
    roles: ["Mobile app developer", "Front-end developer", "Flutter engineer", "Open-source author"],
    headline: "I build mobile apps and websites.",
    intro:
        "I studied biotechnology, worked as a medical analyst, and taught myself to code along the way. Today I build Android and Flutter apps, front-end web, and the APIs behind them.",
    story: [
        "I studied biotechnology at Mustansiriyah University and spent a year as a medical analyst, reading slides under a microscope. That work taught me to be careful, to check results twice, and to write things down clearly.",
        "I started writing Android apps in 2019 as a hobby. The hobby turned into open-source libraries, then client apps, then Flutter, front-end web and .NET back ends.",
        "Now I'm learning AI engineering at intern level: preparing data, training and evaluating models, and wiring LLMs into real apps.",
    ],
};

export const socials = [
    { id: "github", label: "GitHub", handle: "@smith8h", href: "https://github.com/smith8h" },
    { id: "telegram", label: "Telegram", handle: "@smithdev", href: "https://t.me/smithdev" },
    { id: "linkedin", label: "LinkedIn", handle: "Hussein Shakir", href: "https://www.linkedin.com/in/hussein-shakir-114814192/" },
    { id: "youtube", label: "YouTube", handle: "@smith8h", href: "https://youtube.com/@smith8h" },
    { id: "instagram", label: "Instagram", handle: "@albudairii", href: "https://instagram.com/albudairii" },
];

export const stats = [
    { value: "28+", label: "Projects shipped" },
    { value: "12+", label: "Open-source libraries" },
    { value: "7+", label: "Happy clients" },
    { value: "∞", label: "Cups of tea" },
];

export const services = [
    {
        id: "mobile",
        title: "Mobile apps",
        description: "Native Android in Java and Kotlin, or one codebase for Android and iOS with Flutter. From the first sketch to the Play Store listing.",
        tools: ["Java", "Kotlin", "Flutter", "Dart"],
    },
    {
        id: "web",
        title: "Websites and web apps",
        description: "Fast, responsive front ends in React and Next.js, with motion and detail that make them feel finished.",
        tools: ["React", "Next.js", "JavaScript", "CSS"],
    },
    {
        id: "backend",
        title: "APIs and back ends",
        description: "ASP.NET Core APIs, databases and the plumbing that keeps an app's data safe and quick.",
        tools: ["C#", "ASP.NET", ".NET Core", "SQL"],
    },
];

export const skills = [
    { name: "Java", level: 99 },
    { name: "Dart / Flutter", level: 99 },
    { name: "Kotlin", level: 85 },
    { name: "JavaScript / React", level: 80 },
    { name: ".NET Core API", level: 75 },
    { name: "Python", level: 65 },
];

export const aiLearning = [
    "Python for AI",
    "NumPy and pandas",
    "Data preparation",
    "Machine learning fundamentals",
    "scikit-learn",
    "LLM API integration",
    "Prompt engineering",
    "Embeddings and vector search",
    "Retrieval-augmented generation",
    "Model evaluation",
    "Responsible AI and data privacy",
];

export const languages = ["Java", "Kotlin", "Dart", "Python", "C#", "JavaScript"];
export const frameworks = ["Flutter", "Android SDK", "React", "Next.js", "ASP.NET", ".NET Core API"];

// Ordered oldest → newest so it reads as a real timeline.
export const journey = [
    {
        id: "bsc",
        type: "education",
        start: "2017",
        end: "2021",
        title: "B.Sc. Biotechnology",
        place: "Mustansiriyah University",
        description: "Biology department. Genetics, microbiology and lab work.",
    },
    {
        id: "android",
        type: "work",
        start: "2019",
        end: "Present",
        title: "Native Android developer",
        place: "Freelance and open source",
        description: "12+ open-source libraries on GitHub and 5+ apps for private companies, with a focus on clean UI.",
    },
    {
        id: "courses",
        type: "education",
        start: "2019",
        end: "Present",
        title: "Courses and self-study",
        place: "Online and on-site",
        description: "Android, Flutter and full-stack web development, learned through courses and a lot of building.",
    },
    {
        id: "analyst",
        type: "work",
        start: "2021",
        end: "2022",
        title: "Medical analyst",
        place: "Medical laboratory",
        description: "A year of fast, accurate microscope readings and careful written reports.",
    },
    {
        id: "flutter",
        type: "work",
        start: "2023",
        end: "Present",
        title: "Flutter developer",
        place: "Freelance",
        description: "Cross-platform apps with clean architecture and responsive UI.",
    },
    {
        id: "fullstack",
        type: "work",
        start: "2024",
        end: "Present",
        title: "Front-end and back-end developer",
        place: "Freelance",
        description: "React and Next.js front ends backed by ASP.NET Core APIs and databases.",
    },
    {
        id: "ai",
        type: "education",
        start: "2026",
        end: "Present",
        title: "AI engineering, intern level",
        place: "Self-study",
        description: "Python for AI, scikit-learn, LLM APIs, embeddings, RAG and model evaluation.",
    },
];

export const categories = ["All", "Apps", "Android", "Flutter", "Web", "Desktop"];

export const projects = [
    {
        id: "swallet",
        title: "SWallet",
        kind: "App",
        category: "Apps",
        summary: "Keep your credit and debit cards in one private wallet on your phone.",
        image: "/assets/swallet.png",
        link: "https://play.google.com/store/apps/details?id=smith.app.swallet",
        linkLabel: "Google Play",
        privacyPolicy: "/swallet/privacy-policy",
        featured: true,
    },
    {
        id: "wave",
        title: "Wave",
        kind: "App",
        category: "Apps",
        summary: "An offline music player for Android. No ads, no tracking, no internet needed.",
        image: "/assets/wave.png",
        link: "https://play.google.com/store/apps/details?id=smith.app.wavemusic",
        linkLabel: "Google Play",
        privacyPolicy: "/wave/privacy",
        featured: true,
    },
    {
        id: "pc-cooler",
        title: "PC Cooler Monitor Driver",
        kind: "Tool",
        category: "Desktop",
        summary: "A desktop driver for a PC cooler's built-in monitor display.",
        image: "/assets/port.svg",
        link: "https://github.com/smith8h/pc-cooler-monitor-driver",
        featured: true,
    },
    {
        id: "flutter-extensions",
        title: "Flutter Extensions",
        kind: "Package",
        category: "Flutter",
        summary: "A package of handy Dart extensions for everyday Flutter code.",
        image: "/assets/filter.svg",
        link: "https://github.com/smith8h/flutter-extensions",
        featured: true,
    },
    { id: "sgpt", title: "SGPT", kind: "Library", category: "Android", summary: "Android library for talking to GPT models.", image: "/assets/dialog.svg", link: "https://github.com/smith8h/SGPT" },
    { id: "stextview", title: "STextView", kind: "Library", category: "Android", summary: "Android library for richer text views.", image: "/assets/text.svg", link: "https://github.com/smith8h/STextView" },
    { id: "scolor", title: "SColor", kind: "Library", category: "Android", summary: "Android library for working with colors.", image: "/assets/color.svg", link: "https://github.com/smith8h/SColor" },
    { id: "stextfilter", title: "STextFilter", kind: "Library", category: "Android", summary: "Android library for filtering text.", image: "/assets/filter.svg", link: "https://github.com/smith8h/STextFilter" },
    { id: "sanimation", title: "SAnimation", kind: "Library", category: "Android", summary: "Android library for view animations.", image: "/assets/animation.svg", link: "https://github.com/smith8h/SAnimation" },
    { id: "stoast", title: "SToast", kind: "Library", category: "Android", summary: "Android library for custom toasts.", image: "/assets/toast.svg", link: "https://github.com/smith8h/SToast" },
    { id: "scoverview", title: "SCoverView", kind: "Library", category: "Android", summary: "Android library for cover-style views.", image: "/assets/cover.svg", link: "https://github.com/smith8h/SCoverView" },
    { id: "sreporter", title: "SReporter", kind: "Library", category: "Android", summary: "Android library for crash and bug reports.", image: "/assets/report.svg", link: "https://github.com/smith8h/SReporter" },
    { id: "sconnect", title: "SConnect", kind: "Library", category: "Android", summary: "Android library for network requests.", image: "/assets/global.svg", link: "https://github.com/smith8h/SConnect" },
    { id: "sdialogs", title: "SDialogs", kind: "Library", category: "Android", summary: "Android library for ready-made dialogs.", image: "/assets/dialog.svg", link: "https://github.com/smith8h/SDialogs" },
    { id: "spermissions", title: "SPermissions", kind: "Library", category: "Android", summary: "Android library for runtime permissions.", image: "/assets/permission.svg", link: "https://github.com/smith8h/SPermissions" },
    { id: "scalculator", title: "SCalculator", kind: "Library", category: "Android", summary: "Kotlin Android library for evaluating math expressions.", image: "/assets/calc.svg", link: "https://github.com/smith8h/SCalculator-kotlin" },
    { id: "simageloader", title: "SImageLoader", kind: "Library", category: "Android", summary: "Android library for loading images.", image: "/assets/cover.svg", link: "https://github.com/smith8h/SImageLoader" },
    { id: "simgur", title: "SImgurUploader", kind: "Library", category: "Android", summary: "Android library for uploading images to Imgur.", image: "/assets/global.svg", link: "https://github.com/smith8h/SImgurUploader" },
    { id: "stooltip", title: "SToolTip", kind: "Library", category: "Android", summary: "Android library for tooltips.", image: "/assets/text.svg", link: "https://github.com/smith8h/SToolTip" },
    { id: "glass", title: "Glass Effect", kind: "Animation", category: "Android", summary: "A glass-effect animation for Android.", image: "/assets/animation.svg", link: "https://github.com/smith8h/glass-effect" },
    { id: "scolors-flutter", title: "SColors", kind: "Library", category: "Flutter", summary: "Flutter library for working with colors.", image: "/assets/color.svg", link: "https://github.com/smith8h/scolors-flutter" },
    { id: "naal-alarm", title: "NaalAlarm", kind: "Library", category: "Flutter", summary: "Flutter library for alarms.", image: "/assets/toast.svg", link: "https://github.com/smith8h/naal_alarm" },
    { id: "sbadge", title: "SBadgeView", kind: "Library", category: "Flutter", summary: "Flutter library for badges.", image: "/assets/toast.svg", link: "https://github.com/smith8h/sbadge_view" },
    { id: "sreporter-flutter", title: "SReporter", kind: "Library", category: "Flutter", summary: "Flutter library for crash and bug reports.", image: "/assets/report.svg", link: "https://github.com/smith8h/sreporter-flutter" },
    { id: "whatsapp-otp", title: "WhatsApp OTP", kind: "Library", category: "Flutter", summary: "Flutter library for sending one-time codes over WhatsApp.", image: "/assets/global.svg", link: "https://github.com/smith8h/whatsapp-otp" },
    { id: "mvvm", title: "Flutter MVVM Template", kind: "Template", category: "Flutter", summary: "A starting point for Flutter apps using MVVM.", image: "/assets/port.svg", link: "https://github.com/smith8h/flutter-mvvm-template" },
    { id: "portfolio", title: "This portfolio", kind: "Website", category: "Web", summary: "The site you're on, built with Next.js.", image: "/assets/port.svg", link: "https://github.com/smith8h/Smith-Portfolio" },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const pricing = [
    {
        id: "basic",
        name: "Basic",
        price: "$300–1,000",
        description: "One app or website, built well and handed over.",
        support: "No maintenance",
        features: ["Mobile app or website", "Clean, documented code", "Responsive design", "Full source code"],
    },
    {
        id: "premium",
        name: "Premium",
        price: "$1,000–5,000",
        description: "An app with its own API and integrations.",
        support: "Partial maintenance",
        features: ["Everything in Basic", "App integrations", "API development", "3 rounds of revisions", "Priority support"],
        recommended: true,
    },
    {
        id: "ultimate",
        name: "Ultimate",
        price: "$11,000+",
        description: "For companies that need a full product and long support.",
        support: "24/7 support for 3–7 months",
        features: ["Everything in Premium", "Unlimited revisions", "Full branding", "Deployment", "24/7 support"],
    },
];

export const posts = [
    { id: "flutter-dep", title: "New Flutter dependency", category: "Flutter", date: "2023-12-08", link: "https://t.me/smithdev/291" },
    { id: "android-dep", title: "Android dependency update", category: "Android", date: "2023-10-30", link: "https://t.me/smithdev/285" },
    { id: "libs-list", title: "List of my Android libraries", category: "Libraries", date: "2023-09-30", link: "https://t.me/smithdev/282" },
];

export const formatDate = (iso, opts = { day: "2-digit", month: "short", year: "numeric" }) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-GB", opts);
