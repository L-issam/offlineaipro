# Offline AI Pro Landing Page

Landing page pour l'application Offline AI Pro, déployée sur GitHub Pages.

## 🚀 Déploiement

### Configuration GitHub Pages
1. Uploadez tous les fichiers dans un repo GitHub
2. Allez dans Settings > Pages
3. Sélectionnez "Deploy from a branch"
4. Choisissez la branche `main` et le dossier `/` (root)
5. L'URL sera : `https://[username].github.io/[repo-name]/`

### Fichiers importants à uploader
- Tous les fichiers `.html`
- `style.css`
- `icon.png`
- Dossier `.well-known/` (pour App Links)
- `robots.txt`
- `sitemap.xml`
- `.nojekyll`

## 🔍 SEO & Indexation

### Métadonnées SEO
Chaque page contient :
- Balises Open Graph (Facebook)
- Balises Twitter Cards
- Structured Data (JSON-LD)
- Meta description optimisée
- Mots-clés pertinents
- URL canonique

### Vérification Google Search Console
1. Créez un compte Google Search Console
2. Ajoutez votre propriété : `https://[username].github.io/[repo-name]/`
3. Téléchargez le fichier de vérification HTML et remplacez le contenu de `google-site-verification.html`
4. Ou utilisez la méthode "Balise HTML" et ajoutez le code dans toutes les pages `<head>`

### Soumission du sitemap
- Sitemap URL : `https://[username].github.io/[repo-name]/sitemap.xml`
- Robots.txt : `https://[username].github.io/[repo-name]/robots.txt`

## 📱 App Links (Android)

### Configuration terminée
- Intent-filter ajouté dans `AndroidManifest.xml`
- Fichier `.well-known/assetlinks.json` créé

### Étapes finales
1. Obtenez votre empreinte SHA256 (voir `README-App-Links.md`)
2. Remplacez `SHA256_FINGERPRINT_PLACEHOLDER` dans `assetlinks.json`
3. Uploadez sur GitHub Pages
4. Testez avec l'outil de Google : https://developers.google.com/digital-asset-links/tools/generator

## 🎨 Personnalisation

### Couleurs et styles
- Modifiez `style.css` pour changer l'apparence
- Utilisez des variables CSS pour les couleurs principales

### Contenu
- Mettez à jour les descriptions dans les fichiers HTML
- Changez les URLs Google Play Store
- Adaptez les prix et fonctionnalités

### Images
- Remplacez `icon.png` par votre icône
- Ajoutez une vraie `banner.png` pour les partages sociaux

## 📊 Analytics (optionnel)

Pour ajouter Google Analytics :
1. Créez une propriété dans Google Analytics 4
2. Ajoutez le code de suivi dans la section `<head>` de chaque page :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔧 Maintenance

### Mise à jour du contenu
1. Modifiez les fichiers HTML/CSS
2. Testez localement avec un serveur HTTP simple
3. Commitez et pushez sur GitHub
4. GitHub Pages se met à jour automatiquement

### Vérification SEO
- Utilisez Google Search Console pour monitorer l'indexation
- Testez les pages avec Google Rich Results Test
- Vérifiez la vitesse de chargement avec PageSpeed Insights