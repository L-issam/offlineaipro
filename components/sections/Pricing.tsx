'use client'

import { motion } from 'framer-motion'
import { Check, Star, Zap, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { pricingPlans, appStoreLinks } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

export function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tarifs transparents,
            <span className="block text-primary">pas de surprise</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Commencez gratuitement et évoluez selon vos besoins.
            Toutes les fonctionnalités sont incluses, pas de modules optionnels.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.id} variants={itemVariants}>
              <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Le plus populaire</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>

                  {/* Pricing */}
                  <div className="mt-4">
                    {plan.price.oneTime ? (
                      <div className="space-y-2">
                        <div className="text-4xl font-bold">
                          {formatPrice(plan.price.oneTime)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Paiement unique • Accès à vie
                        </div>
                      </div>
                    ) : plan.price.monthly || plan.price.yearly ? (
                      <div className="space-y-2">
                        {plan.price.monthly && (
                          <div className="text-4xl font-bold">
                            {formatPrice(plan.price.monthly)}
                            <span className="text-base font-normal text-muted-foreground">/mois</span>
                          </div>
                        )}
                        {plan.price.yearly && (
                          <div className="text-lg text-muted-foreground">
                            ou {formatPrice(plan.price.yearly)}
                            <span className="text-sm">/an</span>
                            <span className="ml-2 text-green-600 font-medium">
                              (économisez {Math.round((1 - plan.price.yearly! / (plan.price.monthly! * 12)) * 100)}%)
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-green-600">
                        Gratuit
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Limits */}
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Limites
                    </h4>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span>Documents :</span>
                        <span className="font-medium">
                          {plan.limits.documents === 'unlimited' ? 'Illimités' : plan.limits.documents}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversations :</span>
                        <span className="font-medium">
                          {plan.limits.conversations === 'unlimited' ? 'Illimitées' : plan.limits.conversations}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Messages/conversation :</span>
                        <span className="font-medium">
                          {plan.limits.messagesPerConversation === 'unlimited' ? 'Illimités' : plan.limits.messagesPerConversation}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                      Fonctionnalités incluses
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="space-y-3">
                  {plan.id === 'free' ? (
                    <a
                      href="#features"
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8`}
                    >
                      <span>{plan.cta}</span>
                      <Zap className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <button
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8`}
                    >
                      <span>{plan.cta}</span>
                    </button>
                  )}

                  {/* Store Links */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    {appStoreLinks.map((store) => (
                      <a
                        key={store.platform}
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground flex-1 text-xs h-8 rounded-md px-3"
                      >
                        <div className="w-3 h-3 mr-1" dangerouslySetInnerHTML={{ __html: store.icon || '' }} />
                        <span>
                          Google Play
                        </span>
                      </a>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
              🆓 Freemium généreux
            </h3>
            <p className="text-sm text-green-700 dark:text-green-300">
              Testez toutes les fonctionnalités gratuitement avec 5 documents, 3 conversations et 10 messages par discussion.
              Passez en Premium uniquement quand vous êtes convaincu !
            </p>
          </div>

          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Paiement sécurisé • Annulation facile • Support technique inclus
          </p>
        </motion.div>
      </div>
    </section>
  )
}