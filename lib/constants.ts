import { Feature, PricingPlan, FAQ, AppStoreLink, SocialLink, ContactInfo, CompanyInfo } from '@/types'

// Fonctionnalités principales d'AskTheDocs
export const features: Feature[] = [
  {
    id: 'semantic-search',
    title: 'Recherche Sémantique Avancée',
    description: 'Compréhension intelligente du langage naturel. Posez vos questions naturellement, l\'IA comprend le contexte.',
    icon: 'Search',
    details: [
      'Modèle E5-small optimisé pour le français',
      'Recherche par similarité sémantique',
      'Pas de mots-clés à deviner',
      'Résultats contextuels et précis'
    ]
  },
  {
    id: 'local-ai',
    title: 'IA Locale & Privée',
    description: 'Toutes vos données restent sur votre téléphone. Pas de cloud, pas de fuite de données sensibles.',
    icon: 'Shield',
    details: [
      'Exécution 100% locale',
      'Aucune donnée envoyée sur Internet',
      'Conformité RGPD automatique',
      'Sécurité maximale pour documents confidentiels'
    ]
  },
  {
    id: 'rag-generation',
    title: 'Génération RAG Contextuelle',
    description: 'Réponses enrichies par vos documents avec Gemma 3 1B. Citations et sources précises.',
    icon: 'Brain',
    details: [
      'Gemma 3 1B pour génération de qualité',
      'Contexte tiré de vos documents',
      'Réponses sourcées et vérifiables',
      'Compréhension multi-documents'
    ]
  },
  {
    id: 'multi-format',
    title: 'Support Multi-Formats',
    description: 'PDF, Word, images scannées - tout est supporté avec extraction automatique du texte.',
    icon: 'FileText',
    details: [
      'PDF natifs et scannés',
      'Documents Word (.docx)',
      'Images avec OCR avancé',
      'Prétraitement automatique'
    ]
  },
  {
    id: 'conversations',
    title: 'Conversations Intelligentes',
    description: 'Discutez naturellement avec vos documents. L\'IA se souvient du contexte de la conversation.',
    icon: 'MessageCircle',
    details: [
      'Interface chat intuitive',
      'Historique des conversations',
      'Contexte maintenu',
      'Questions de suivi naturelles'
    ]
  },
  {
    id: 'performance',
    title: 'Performance Optimisée',
    description: 'Modèles légers et optimisés pour mobile. Réponses rapides même sur appareils modestes.',
    icon: 'Zap',
    details: [
      'Modèles quantifiés pour mobile',
      'Exécution optimisée ARM64',
      'Batterie préservée',
      'Stockage local efficace'
    ]
  }
]

// Plans tarifaires
export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Version d\'essai',
    price: {},
    description: 'Découvrez les capacités de l\'IA gratuitement',
    features: [
      'Jusqu\'à 5 documents',
      '3 conversations',
      '10 messages par conversation',
      'Support PDF, DOCX, images',
      'IA locale & privée',
      'Mises à jour gratuites'
    ],
    limits: {
      documents: 5,
      conversations: 3,
      messagesPerConversation: 10
    },
    cta: 'Essayer gratuitement'
  },
  {
    id: 'premium',
    name: 'Achat unique',
    price: {
      oneTime: 4.99
    },
    description: 'Accès illimité à vie - Un seul paiement',
    features: [
      'Documents illimités',
      'Conversations illimitées',
      'Messages illimités',
      'Support prioritaire',
      'Mises à jour gratuites à vie',
      'Toutes les fonctionnalités incluses'
    ],
    limits: {
      documents: 'unlimited',
      conversations: 'unlimited',
      messagesPerConversation: 'unlimited'
    },
    popular: true,
    cta: 'Acheter maintenant - 4,99€'
  }
]

// FAQ
export const faqs: FAQ[] = [
  {
    id: 'offline',
    question: 'L\'application fonctionne-t-elle hors ligne ?',
    answer: 'Oui, complètement ! AskTheDocs fonctionne 100% hors ligne. Les modèles d\'IA sont téléchargés une fois puis exécutés localement sur votre téléphone. Aucune connexion Internet n\'est requise pour poser des questions à vos documents.',
    category: 'fonctionnalités'
  },
  {
    id: 'security',
    question: 'Mes données sont-elles vraiment sécurisées ?',
    answer: 'Absolument. Contrairement aux solutions cloud, AskTheDocs traite tout localement. Vos documents, questions et réponses ne quittent jamais votre téléphone. Nous n\'avons aucun serveur, aucune base de données cloud, et nous ne collectons aucune donnée personnelle.',
    category: 'sécurité'
  },
  {
    id: 'formats',
    question: 'Quels formats de documents sont supportés ?',
    answer: 'AskTheDocs supporte PDF (natifs et scannés), documents Word (.docx), et images (JPG, PNG). Pour les PDFs scannés et images, un OCR avancé extrait automatiquement le texte avec une précision supérieure à 95%.',
    category: 'fonctionnalités'
  },
  {
    id: 'languages',
    question: 'L\'application supporte-t-elle d\'autres langues que le français ?',
    answer: 'Actuellement optimisée pour le français, mais l\'IA comprend également l\'anglais et d\'autres langues européennes. Nous travaillons à améliorer le support multilingue dans les futures versions.',
    category: 'fonctionnalités'
  },
  {
    id: 'storage',
    question: 'Où sont stockés mes documents et conversations ?',
    answer: 'Tout est stocké localement sur votre téléphone dans un stockage sécurisé. Vous gardez le contrôle total de vos données. La suppression de l\'app supprime automatiquement toutes vos données.',
    category: 'stockage'
  },
  {
    id: 'performance',
    question: 'L\'app est-elle rapide sur mon téléphone ?',
    answer: 'Oui ! Les modèles sont optimisés pour mobile avec quantification 4-bit et exécution ARM64 native. Sur un téléphone récent, les réponses arrivent en 2-5 secondes. L\'app préserve aussi la batterie grâce à des optimisations spécifiques.',
    category: 'performance'
  }
]

// Liens vers les stores
export const appStoreLinks: AppStoreLink[] = [
  {
    platform: 'android',
    url: 'https://play.google.com/store/apps/details?id=com.askthedocs.app',
    badgeUrl: '/google-play-badge.svg',
    alt: 'Télécharger sur Google Play',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z"/>
      <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"/>
      <path d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z"/>
      <path d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
    </svg>`
  }
]

// Liens sociaux
export const socialLinks: SocialLink[] = [
  {
    platform: 'twitter',
    url: 'https://twitter.com/askthedocs',
    icon: 'Twitter',
    label: 'Suivez-nous sur Twitter'
  },
  {
    platform: 'github',
    url: 'https://github.com/askthedocs',
    icon: 'Github',
    label: 'Code source sur GitHub'
  }
]

// Informations de contact
export const contactInfo: ContactInfo = {
  email: 'contact@askthedocs.app',
  twitter: 'https://twitter.com/askthedocs',
  github: 'https://github.com/askthedocs'
}

// Informations entreprise
export const companyInfo: CompanyInfo = {
  name: 'AskTheDocs',
  description: 'Application mobile d\'IA pour poser des questions intelligentes à vos documents',
  founded: 2024,
  location: 'France',
  contact: contactInfo
}