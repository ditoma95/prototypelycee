export const mockNews = [
  {
    id: 1,
    title: "Nouvelle Filière en Agro-écologie",
    excerpt: "Le lycée lance une nouvelle filière spécialisée en agriculture durable et pratiques écologiques.",
    date: "2025-01-15",
    image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Formation"
  },
  {
    id: 2,
    title: "Succès aux Examens 2024",
    excerpt: "Excellents résultats avec 95% de réussite au Baccalauréat Professionnel Agricole.",
    date: "2025-01-10",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Résultats"
  },
  {
    id: 3,
    title: "Partenariat avec Coopératives Locales",
    excerpt: "Signature d'accords pour stages et formation pratique avec les coopératives agricoles de la région.",
    date: "2025-01-08",
    image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Partenariat"
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Journée Portes Ouvertes",
    date: "2025-02-15",
    time: "08:00 - 17:00",
    location: "Campus Principal",
    description: "Découverte des filières et rencontre avec les équipes pédagogiques"
  },
  {
    id: 2,
    title: "Salon de l'Agriculture Locale",
    date: "2025-02-20",
    time: "09:00 - 16:00",
    location: "Centre de Nanoro",
    description: "Participation des élèves avec exposition de leurs projets"
  },
  {
    id: 3,
    title: "Examens Trimestriels",
    date: "2025-03-01",
    time: "08:00 - 12:00",
    location: "Salles d'examens",
    description: "Évaluations du second trimestre"
  }
];

export const mockTeachers = [
  {
    id: 1,
    name: "Dr. Marie OUEDRAOGO",
    subject: "Sciences Agronomiques",
    experience: "15 ans",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Spécialiste en agriculture durable et techniques modernes de production."
  },
  {
    id: 2,
    name: "Prof. Jean KABORE",
    subject: "Élevage et Zootechnie",
    experience: "12 ans",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Expert en élevage moderne et gestion des ressources pastorales."
  },
  {
    id: 3,
    name: "Mme. Claire SAWADOGO",
    subject: "Transformation Agroalimentaire",
    experience: "10 ans",
    image: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "Formatrice en techniques de transformation et conservation des produits agricoles."
  }
];

export const mockCourses = [
  {
    id: 1,
    title: "Introduction à l'Agronomie",
    teacher: "Dr. Marie OUEDRAOGO",
    level: "1ère Année",
    duration: "45h",
    description: "Bases fondamentales de l'agriculture et des sciences du sol"
  },
  {
    id: 2,
    title: "Techniques d'Élevage",
    teacher: "Prof. Jean KABORE",
    level: "2ème Année",
    duration: "60h",
    description: "Méthodes modernes d'élevage et de gestion des troupeaux"
  },
  {
    id: 3,
    title: "Transformation des Produits",
    teacher: "Mme. Claire SAWADOGO",
    level: "3ème Année",
    duration: "50h",
    description: "Techniques de transformation et valorisation des produits agricoles"
  }
];

export const mockStudents = [
  {
    id: 1,
    name: "Aminata TRAORE",
    class: "3ème Année Agronomie",
    grades: {
      "Agronomie": 16,
      "Élevage": 14,
      "Transformation": 18,
      "Français": 15,
      "Mathématiques": 13
    }
  },
  {
    id: 2,
    name: "Ibrahim SANKARA",
    class: "2ème Année Élevage",
    grades: {
      "Élevage": 17,
      "Agronomie": 15,
      "Sciences": 16,
      "Français": 14,
      "Mathématiques": 15
    }
  }
];

export const mockGallery = [
  {
    id: 1,
    type: "image",
    url: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Travaux Pratiques en Agronomie",
    category: "Formation"
  },
  {
    id: 2,
    type: "image",
    url: "https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Laboratoire de Sciences",
    category: "Équipements"
  },
  {
    id: 3,
    type: "image",
    url: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Campus du Lycée",
    category: "Infrastructure"
  },
  {
    id: 4,
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Présentation du Lycée",
    category: "Présentation"
  }
];

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Présentation",
      education: "Pédagogie",
      registration: "Inscriptions",
      students: "Élèves/Parents",
      calendar: "Calendrier",
      news: "Actualités",
      gallery: "Galerie",
      contact: "Contact",
      admin: "Administration"
    },
    common: {
      readMore: "Lire plus",
      viewAll: "Voir tout",
      contact: "Contact",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      registration: "Registration",
      students: "Students/Parents",
      calendar: "Calendar",
      news: "News",
      gallery: "Gallery",
      contact: "Contact",
      admin: "Administration"
    },
    common: {
      readMore: "Read more",
      viewAll: "View all",
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      address: "Address"
    }
  }
};