'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Shield, Brain, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { appStoreLinks } from '@/lib/constants'

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white mb-8 mx-auto"
          >
            <Shield className="w-4 h-4 mr-2" />
            IA 100% locale • Données privées
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-center text-gray-900"
          >
            Posez des questions
            <span className="block text-primary">intelligentes</span>
            à vos documents
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Découvrez les réponses cachées dans vos documents avec l'IA.
            Recherche sémantique avancée, réponses contextuelles,
            vie privée garantie.
          </motion.p>

          {/* Value Props */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600"
          >
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm">
              <img src="/icon.png" alt="AskTheDocs" className="w-5 h-5 rounded" />
              <span className="font-medium">Gemma 3 1B</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Données locales</span>
            </div>
            <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm">
              <Zap className="w-5 h-5 text-green-600" />
              <span className="font-medium">Optimisé mobile</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              {appStoreLinks.map((store) => (
                <a
                  key={store.platform}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>
                    {store.platform === 'ios' ? 'App Store' : 'Google Play'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Application mobile gratuite • Pas de compte requis • Open source
            </p>
            <div className="flex justify-center items-center space-x-6 text-xs text-muted-foreground">
              <span>🔒 Vie privée</span>
              <span>📱 Mobile-first</span>
              <span>🚀 Performant</span>
              <span>💯 Gratuit</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mockup App Preview */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 transform -translate-x-1/2 absolute"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

              {/* App Content Mockup */}
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-900">
                {/* Header */}
                <div className="bg-primary text-primary-foreground p-4">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-6 h-6" />
                    <span className="font-bold text-lg">AskTheDocs</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 flex-1">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-[80%]">
                      Quelle est la valeur de l'angle ?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-4 py-2 max-w-[80%]">
                      Selon le document, l'angle du dossier au palette est de <strong>15°</strong>.
                      <br />
                      <small className="text-muted-foreground">Source: page 3, paragraphe 2</small>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-[80%]">
                      Quelles sont les dimensions ?
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Posez votre question..."
                      className="flex-1 px-3 py-2 border rounded-lg text-sm"
                      readOnly
                    />
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              IA Active
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              Local Only
            </motion.div>
          </div>
        </motion.div>

        {/* App Screenshots Section */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Découvrez l'application</h3>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="../../splash.png"
                alt="AskTheDocs - Écran d'accueil"
                className="rounded-lg shadow-2xl max-w-sm mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Disponible sur Google Play
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}