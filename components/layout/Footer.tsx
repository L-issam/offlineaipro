import Link from 'next/link'
import { Twitter, Github, Mail } from 'lucide-react'
import { socialLinks, companyInfo, appStoreLinks } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <img src="../../icon.png" alt="AskTheDocs" className="h-6 w-6 rounded" />
              <span className="text-lg font-bold">AskTheDocs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Posez des questions intelligentes à vos documents avec l'IA.
              Recherche sémantique, réponses contextuelles, vie privée garantie.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.platform === 'twitter' && <Twitter className="h-5 w-5" />}
                  {social.platform === 'github' && <Github className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/askthedocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Code source
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-muted-foreground hover:text-foreground transition-colors">
                  Suppression de données
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Téléchargements */}
          <div>
            <h3 className="font-semibold mb-4">Télécharger</h3>
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.askthedocs.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="h-5 w-5" dangerouslySetInnerHTML={{ __html: appStoreLinks[0]?.icon || '' }} />
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AskTheDocs. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/data-deletion"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Suppression données
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}