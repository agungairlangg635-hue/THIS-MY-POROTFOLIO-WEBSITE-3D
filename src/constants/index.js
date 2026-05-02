import {
  mobile,
  backend,
  creator,
  python,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  flowfit,
  java,
  joao_miguel,
  ricardo,
  heritage,
  forever,
  beamimg,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {

  
    title: "Data Analyst\nPower BI • Metabase • PostgreSQL",
    icon: web,
  },
  {
    title: "Data Science\nPython • ML Model • Fraud Detection",
    icon: mobile,
  },
  {
    title: "Data Engineer\nETL • Airflow • Kafka • PostgreSQL",
    icon: backend,
  },
  {
    title: "Open to Work\nInternship • Freelance",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "python",
    icon: python,
  },
  
  
  {
    name: "Java",
    icon: java,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Intensive Data Analyst Bootcamp",
    institution: "Dicoding, DQlab, Dibimbing",
    icon: web,
    iconBg: "#383E56",
    date: "Aug 2025 - Apr 2026",
    points: [
      "Menyelesaikan bootcamp Data Analyst intensif yang berfokus pada pembangunan keterampilan praktis siap kerja melalui proyek langsung dan studi kasus.",
      "Belajar pembersihan data, eksplorasi data, analisis bisnis, pengembangan dasbor, dan presentasi wawasan.",
      "Mengembangkan proyek portofolio yang melibatkan analisis KPI, tren pendapatan, perilaku pelanggan, dan pengambilan keputusan berbasis data.",
      "Mendapatkan sertifikasi Data Analyst BNSP sebagai bukti kompetensi dalam dasar-dasar analisis data.",
      "Bekerja dengan Excel, SQL, PostgreSQL, dan Power BI untuk menganalisis dataset dan membuat dasbor pelaporan bisnis.",
    ],
    link: "https://github.com/agungairlangg635-hue",
  },
  {
    title: "Data Science Bootcamp",
    institution: " Project Independen",
    icon: mobile,
    iconBg: "#383E56",
    date: "Dec 2025-  Apr 2026",
    points: [
      "Mengembangkan portofolio project analisis data end-to-end menggunakan dataset real-world untuk memperkaya skill statistical analysis dan business intelligence.",
    "Membangun interactive dashboards di Power BI dan Tableau untuk visualisasi KPI, sales performance, dan customer behavior insights.",
    "Melakukan exploratory data analysis (EDA), correlation analysis, dan statistical testing menggunakan Python (Pandas, NumPy, Scikit-learn).",
    "Mengoptimalkan SQL queries untuk extracting insights dari database besar dengan PostgreSQL, mengasah kemampuan data manipulation untuk analytical needs.",
    "Mempelajari fundamental machine learning untuk classification, regression, dan clustering — diterapkan pada use case bisnis seperti customer segmentation dan prediction modeling.",
    ],
    link: "https://github.com/agungairlangg635-hue",
  },
  {
    title: "Data Engineering",
    institution: " Itensive Project-Based Learning",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2025 - Apr 2026",
    points: ["Membangun pipeline data ETL menggunakan Python, Apache Airflow, dan PostgreSQL untuk pemrosesan data dalam skala besar.",
      "Mengintegrasikan multiple data sources (REST API, database, file CSV) ke dalam data warehouse terpusat.",
      "Berkolaborasi dengan tim analyst untuk memastikan kualitas dan ketersediaan data sesuai kebutuhan analisis bisnis.",
      "Mengoptimalkan query SQL dan struktur database untuk meningkatkan performa pipeline hingga 40%.",
      "Mempelajari implementasi Kafka untuk streaming data real-time dan FastAPI untuk membangun data services.",
    

    ],
  },
  {
    title: "Open to Work",
    institution: "Internship, Freelance",
    icon: creator,
    iconBg: "#383E56",
    date: "Jun - Sep 2026",
    points: [
     "Sedang aktif mencari kesempatan magang (internship) di bidang Data Engineering atau Data Analyst untuk mengembangkan kemampuan dan kontribusi langsung di industri.",
    "Terbuka untuk proyek freelance terkait pembuatan dashboard, analisis data, ETL pipeline, atau visualisasi data dengan tools seperti Power BI, Metabase, dan Python.",
    "Memiliki kemampuan dalam Python, SQL, PostgreSQL, Apache Airflow, Docker, dan Power BI yang siap diterapkan dalam proyek nyata.",
    "Berkomitmen untuk belajar cepat, kerja tim, dan menyelesaikan tugas dengan kualitas tinggi sesuai timeline yang disepakati.",
    "Dapat dihubungi melalui email atau LinkedIn untuk diskusi peluang kolaborasi dan kerja sama profesional.",
    ],
    link: "https://github.com/agungairlangg635-hue",
  },
];

const testimonials = [
  {
    testimonial:
      " kombinasi rare yang dicari di industri data: foundation analytics yang kuat dengan kemampuan engineering yang membuatnya independent. Sertifikasi BNSP Data Analyst-nya menunjukkan kompetensi fundamental, sementara project-nya membuktikan dia bisa go beyond — building automation untuk mendukung analytical workflow. Dia siap untuk tantangan di entry-level Data Analyst atau Analytics Engineer.",
    name: "Made Aditya mardewa",
    designation: "Software Engineer",
    company: "Telkom University",
    image: ricardo,
  },
  {
    testimonial:
      " kemampuannya translate technical work jadi business insight yang clear. Saat working dengan SQL kompleks atau ML model, dia selalu fokus ke business question yang ingin dijawab, bukan ke complexity teknisnya. Dengan skill set ini, dia akan jadi asset di tim mana saja yang fokus ke data-driven decision making.",
    name: "Fransisco Gilbert Pintu Batu",
    designation: "Blockchain Engineer",
    company: "Telkom University",
    image: joao_miguel,
  },
];
const projects = [
  {
    name: "supply-chain-analyst",
    description:
      "Comprehensive supply chain analytics project untuk membantu tim operasional mengidentifikasi bottleneck logistik dan optimasi inventory. Melakukan exploratory data analysis (EDA) menggunakan Python dan SQL untuk menganalisis pola permintaan, lead time, dan stock turnover. Membangun interactive dashboard yang memvisualisasikan KPI logistik secara real-time, dilengkapi predictive analysis dengan akurasi 70% untuk demand forecasting. Hasil analisis membantu stakeholder mengambil keputusan inventory yang lebih cepat dan berbasis data.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "orange-text-gradient" },
    ],
    image: flowfit,
    source_code_link: "https://github.com/agungairlangg635-hue/jakarta-flood-warning",
  },
  {
    name: "fraud-detection-analytics",
    description:
      "Project analisis fraud kartu kredit untuk membantu tim risk management mengidentifikasi pola transaksi mencurigakan. Melakukan exploratory data analysis (EDA), correlation analysis, dan statistical testing untuk memahami karakteristik transaksi fraudulent. Membangun classification model untuk flagging transaksi mencurigakan dengan precision 65%, dilengkapi monitoring dashboard real-time. Untuk skalabilitas, model di-deploy via FastAPI dengan automated pipeline menggunakan Airflow — memastikan analyst dapat fokus ke insight, bukan ke data engineering manual.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "Statistics", color: "blue-text-gradient" },
      { name: "Power BI", color: "orange-text-gradient" },
    ],
    image: beamimg,
    source_code_link: "https://github.com/agungairlangg635-hue/fraud-detection-mlops",
  },
  {
    name: "business-analytics-platform",
    description:
      "End-to-end business analytics platform yang mengintegrasikan multiple data sources untuk comprehensive business intelligence reporting. Membangun automated data pipeline dengan SQL, Python, dan Metabase untuk tracking sales performance, customer behavior, dan operational KPIs. Project ini fokus pada data preparation yang clean, advanced SQL analytics, dan dashboard design yang user-friendly untuk decision makers — sehingga business team bisa langsung consume insights tanpa perlu request dari tim teknis.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Metabase", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "ETL", color: "orange-text-gradient" },
    ],
    image: forever,
    source_code_link: "https://github.com/agungairlangg635-hue/ultimate-data-platform",
  },
];

export { services, technologies, experiences, testimonials, projects };