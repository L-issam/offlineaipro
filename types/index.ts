// Types pour la landing page AskTheDocs

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  details?: string[]
}

export interface PricingPlan {
  id: string
  name: string
  price: {
    oneTime?: number
    monthly?: number
    yearly?: number
  }
  description: string
  features: string[]
  limits: {
    documents: number | 'unlimited'
    conversations: number | 'unlimited'
    messagesPerConversation: number | 'unlimited'
  }
  popular?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar?: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface AppStoreLink {
  platform: 'ios' | 'android'
  url: string
  badgeUrl: string
  alt: string
  icon?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

export interface ContactInfo {
  email: string
  twitter?: string
  github?: string
  linkedin?: string
}

export interface CompanyInfo {
  name: string
  description: string
  founded: number
  location: string
  contact: ContactInfo
}