# AskTheDocs - Site Web Simple

Site web statique HTML/CSS pour présenter l'application AskTheDocs.

## 📁 Structure du projet

```
site-simple/
├── index.html              # Page d'accueil
├── privacy-policy.html     # Politique de confidentialité
├── data-deletion.html      # Guide de suppression des données
├── style.css               # Styles CSS
├── icon.png                # Icône de l'application (présent)
├── splash.png              # Image de splash screen (présent)
├── banner.svg              # Bannière principale (placeholder SVG)
├── app-screenshot-1.svg    # Capture d'écran interface (placeholder SVG)
├── app-screenshot-2.svg    # Capture d'écran upload (placeholder SVG)
└── README.md               # Documentation
```

## 🚀 Déploiement

### Méthode 1: GitHub Pages
1. Uploadez tous les fichiers dans un repository GitHub
2. Allez dans Settings → Pages
3. Sélectionnez "Deploy from a branch" avec la branche main
4. Votre site sera accessible à `https://votre-nom.github.io/nom-repo/`

### Méthode 2: Serveur web simple
Uploadez tous les fichiers sur n'importe quel serveur web (Apache, Nginx, etc.)

## 📸 Images

**Images présentes :**
- ✅ **icon.png** : Icône de l'application
- ✅ **splash.png** : Image d'écran de démarrage

**Placeholders SVG temporaires (remplacez par vos vraies images) :**
- 🔄 **banner.svg** : Bannière principale (remplacez par banner.jpg - 1200x600px)
- 🔄 **app-screenshot-1.svg** : Interface de chat (remplacez par vraie capture)
- 🔄 **app-screenshot-2.svg** : Upload de documents (remplacez par vraie capture)

**Pour remplacer les placeholders :**
1. Créez vos vraies images avec les noms suivants :
   - `banner.jpg` (bannière principale)
   - `app-screenshot-1.jpg` (capture écran chat)
   - `app-screenshot-2.jpg` (capture écran upload)
2. Supprimez les fichiers `.svg` correspondants
3. Mettez à jour les références dans `index.html`

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `style.css` :
```css
:root {
    --primary: #2563eb;    /* Bleu principal */
    --secondary: #6b7280;  /* Gris */
    --accent: #10b981;     /* Vert */
}
```

### Contenu
Éditez directement les fichiers HTML pour modifier :
- Textes et descriptions
- Liens vers le Google Play Store
- Adresses email de contact
- Informations légales

## 📱 Fonctionnalités

- ✅ Design responsive (mobile-first)
- ✅ Navigation fluide
- ✅ Animations CSS légères
- ✅ SEO basique
- ✅ Performance optimisée
- ✅ Accessible

## 🔧 Technologies

- HTML5 sémantique
- CSS3 moderne (Grid, Flexbox)
- JavaScript minimal (FAQ uniquement)
- Pas de framework externe

---

**Note**: Ce site est conçu pour être simple, rapide et maintenable. Idéal pour présenter une app mobile sans complexité backend.
